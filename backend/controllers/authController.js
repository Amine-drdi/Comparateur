const User = require('../models/User');
const AuthCode = require('../models/AuthCode');
const transporter = require('../utils/mailer');
const { generateCode } = require('../utils/codeGenerator');
const jwt = require('jsonwebtoken');



// Callback après authentification Google réussie
exports.googleCallback = async (req, res) => {
  const { email, exists } = req.user;

  if (!exists) {
    // Rediriger vers login si utilisateur non trouvé
    return res.redirect(`${process.env.URL_FRONTEND}/login?error=email_inexistant`);
  }

  try {
    const user = await User.findOne({ email });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.redirect(`${process.env.URL_FRONTEND}/dashboard?token=${token}`);
  } catch (err) {
    console.error('Erreur GoogleCallback :', err);
    res.redirect(`${process.env.URL_FRONTEND}/login?error=erreur_interne`);
  }
};

// Vérification de l'état de connexion Google
exports.googleSuccess = (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Utilisateur non authentifié' });
  }

  res.json({ message: 'Connexion Google réussie', user: req.user });
};

// Déconnexion utilisateur
exports.logout = (req, res) => {
  req.logout(err => {
    if (err) return res.status(500).json({ error: 'Erreur lors de la déconnexion' });
    res.json({ message: 'Déconnecté avec succès' });
  });
};

// Gestion des erreurs d’authentification Google
exports.failure = (req, res) => {
  res.status(401).json({ message: 'Échec de l’authentification' });
};

// Envoi du code d'authentification par email
exports.sendEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ error: 'Email requis' });

  try {
    // Vérifie si l'utilisateur existe
    const userExists = await User.findOne({ email });

    if (!userExists) {
      return res.status(400).json({ message: 'Utilisateur non trouvé, veuillez vous inscrire' });
    }

    const code = generateCode();

    await AuthCode.create({ email, code });

    const mailOptions = {
      from: '"Mon App" <votre.email@gmail.com>',
      to: email,
      subject: 'Votre code d’authentification',
      text: `Votre code est : ${code}`
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Code envoyé avec succès' });

  } catch (err) {
    console.error('Erreur envoi email:', err);
    res.status(500).json({ error: 'Échec d’envoi de l’email' });
  }
};


// Vérification du code reçu par email
exports.verifyEmail = async (req, res) => {
  const { email, code } = req.body;

  if (!email || !code) {
    return res.status(400).json({ error: 'Email et code requis' });
  }

  try {
    const authCode = await AuthCode.findOne({ email, code });

    if (!authCode) {
      return res.status(400).json({ error: 'Code invalide ou expiré' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Utilisateur non trouvé, veuillez vous inscrire' });
    }

    user.isVerified = true;
    await user.save();

    await AuthCode.deleteMany({ email });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(200).json({ message: 'Utilisateur vérifié et connecté', token, user });

  } catch (err) {
    console.error('Erreur lors de la vérification:', err);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
};

// enregister utilisateur 
exports.registerUser = async (req, res) => {
  const {
    email,
    nom,
    prenom,
    telephone,
    genre,
    dateNaissance,
    couverture,
    regimeSocial,
    codePostal,
    dateDebutAssurance,
    typeCouverture
  } = req.body;

  if (!email || !nom || !prenom) {
    return res.status(400).json({ error: 'Email, nom et prénom sont requis.' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'Cet utilisateur existe déjà.' });
    }

    const newUser = new User({
      email,
      nom,
      prenom,
      telephone,
      genre,
      dateNaissance,
      couverture,
      regimeSocial,
      codePostal,
      dateDebutAssurance,
      typeCouverture,
      isVerified: false,  
    });

    await newUser.save();

    res.status(201).json({ message: 'Utilisateur enregistré avec succès', user: newUser });
  } catch (err) {
    console.error('Erreur lors de l’enregistrement:', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// Vérification du code reçu par email
exports.profileUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
}; 

exports.getAuthenticatedUser = (req, res) => {
  res.json(req.user);
};