const Devis = require('../models/Devis');
const User = require('../models/User');

// CREATE
exports.createDevis = async (req, res) => {
  try {
    const { email, nom, prenom, telephone, ...devisData } = req.body;

    // Rechercher si l'utilisateur existe déjà
    let user = await User.findOne({ email });

    if (!user) {
      // Créer un nouvel utilisateur
      user = await User.create({ email, nom, prenom, telephone });
    }

    // Créer le devis
    const devis = await Devis.create({
      ...devisData,
      email,
      nom,
      prenom,
      telephone
    });

    return res.status(201).json({ message: 'Devis enregistré avec succès.', devis });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erreur serveur lors de l'enregistrement du devis." });
  }
};

// READ ALL
exports.getAllDevis = async (req, res) => {
  try {
    const allDevis = await Devis.find();
    res.status(200).json(allDevis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
exports.getDevisById = async (req, res) => {
  try {
    const devis = await Devis.findById(req.params.id);
    if (!devis) return res.status(404).json({ error: 'Devis not found' });
    res.status(200).json(devis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateDevis = async (req, res) => {
  try {
    const updatedDevis = await Devis.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedDevis);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteDevis = async (req, res) => {
  try {
    await Devis.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Devis deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Get all Devis selon category
exports.getDevisByCategoryEmail = async (req, res) => {
  try {
    const { categorie } = req.params;
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ message: 'Email manquant dans les paramètres de requête' });
    }

    const devis = await Devis.find({ categorie, email }); // ✅ email est une string ici

    res.status(200).json(devis);
  } catch (err) {
    console.error('Erreur serveur :', err);
    res.status(500).json({ error: err.message });
  }
};
