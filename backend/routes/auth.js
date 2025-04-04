const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../controllers/authController');

// Google Auth
router.get('/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account'
  }),
  authController.googleLogin
);

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/failure' }),
  authController.googleCallback
);

router.get('/google/success', authController.googleSuccess);

 

// Déconnexion
router.get('/logout', authController.logout);

// Échec
router.get('/failure', authController.failure);

module.exports = router;
