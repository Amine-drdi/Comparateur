/*const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

module.exports = passport => {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Ne pas créer automatiquement l'utilisateur
      const existingUser = await User.findOne({ email: profile.emails[0].value });

      // Passer l'email (et profil si besoin) même si user n'existe pas
      return done(null, { email: profile.emails[0].value, exists: !!existingUser });
    } catch (err) {
      return done(err, null);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});
};
*/
export {};
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

module.exports = (passport: { use: (arg0: any) => void; serializeUser: (arg0: (user: any, done: any) => void) => void; deserializeUser: (arg0: (user: any, done: any) => void) => void; }) => {
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
    console.warn("⚠️ GOOGLE_CLIENT_ID ou GOOGLE_CLIENT_SECRET est manquant. Auth Google désactivée.");
    return;
  }

  passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  (accessToken: any, refreshToken: any, profile: any, done: (arg0: null, arg1: any) => any) => {
    // Ici tu peux gérer la logique utilisateur
    return done(null, profile);
  }));
  
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};
