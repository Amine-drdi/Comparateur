const Devis = require('../models/Devis');

// CREATE
exports.createDevis = async (req, res) => {
  try {
    const devis = new Devis(req.body);
    const savedDevis = await devis.save();
    res.status(201).json(savedDevis);
  } catch (err) {
    res.status(400).json({ error: err.message });
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
exports.getDevisByCategory = async (req, res) => {
  try {
    const category = req.params.cat;
    const devis = await Devis.find({ categories: category });
    res.status(200).json(devis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};