const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: { type: String },
  displayName: { type: String },

  isVerified: { type: Boolean, default: false },

  genre: { type: String, trim: true },
  couverture: { type: String, trim: true },
  dateNaissance: { type: String, trim: true },
  regimeSocial: { type: String, trim: true },
  codePostal: { type: String, trim: true },
  dateDebutAssurance: { type: String, trim: true },
  typeCouverture: { type: String, trim: true },

  nom: { type: String, trim: true },
  prenom: { type: String, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  telephone: { type: String, trim: true },

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
