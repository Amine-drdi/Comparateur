const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  age: { type: Number, required: true },
  type: { type: String, enum: ['adulte', 'enfant'], required: true }
});

const DevisSchema = new mongoose.Schema({
  members: { type: [memberSchema], required: true },
  prixTotal: { type: Number, required: true },
  categories: { type: String, trim: true, required: true },
  codePostal: { type: String, trim: true, required: true },
  dateDebutAssurance: { type: Date, required: true },
  dateSearch: { type: Date, required: true },
  typeCouverture: { type: String, trim: true, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Devis', DevisSchema);
