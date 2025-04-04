// controllers/authController.js

exports.googleLogin = (req, res, next) => {
    // Passport gère la redirection, rien à faire ici
    next();
  };
  
  exports.googleCallback = (req, res) => {
    res.redirect('/auth/google/success');
  };
  
  exports.googleSuccess = (req, res) => {
    if (!req.user) return res.status(401).json({ message: 'Utilisateur non authentifié' });
    res.json({ message: 'Connexion Google réussie', user: req.user });
  };
 
  
  exports.logout = (req, res) => {
    req.logout(() => {
      res.json({ message: 'Déconnecté' });
    });
  };
  
  exports.failure = (req, res) => {
    res.status(401).json({ message: 'Échec de l’authentification' });
  };
  