require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const session = require('express-session');
require('./config/passport')(passport);

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
const { CLIENT_ID, CLIENT_SECRET, AUTH_URL, API_URL, PORT } = process.env;

// Session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }));

  // Passport
app.use(passport.initialize());
app.use(passport.session());
// Fonction pour récupérer le token d'accès
async function getAccessToken() {
    try {
        const response = await axios.post(AUTH_URL, {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: 'client_credentials'
        }, { headers: { 'Content-Type': 'application/json' } });

        return response.data.access_token;
    } catch (error) {
        console.error('Erreur Token:', error.response?.data || error.message);
        throw new Error('Impossible d’obtenir le token');
    }
}

// Routes
app.use('/auth', require('./routes/auth')); 

// API route protégée
app.get('/profile', ensureAuth, (req, res) => {
    res.json({ user: req.user });
  });

  // Middleware pour protéger les routes
function ensureAuth(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.status(401).json({ message: 'Non autorisé' });
  }
  
// Route pour envoyer les données et récupérer les résultats
app.post('/api/comparaison', async (req, res) => {
    try {
        const token = await getAccessToken();
        const response = await axios.post(API_URL, req.body, {
            headers: { 
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.response?.data || error.message });
    }
});

// Démarrer le serveur
app.listen(PORT, () => console.log(`Serveur sur http://localhost:${PORT}`));