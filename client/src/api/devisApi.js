import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const registerDevis = async (data) => { 
  data.categories = 'sante';  

  const response = await axios.post(`${API_BASE_URL}/api/devis`, data);
    // On envoie l'email avec les infos récupérées
    const email = data.email;
    const nom = data.nom;
    await sendEmail(email, nom, `${API_BASE_URL}/offre`);
  return response.data;
};
// Utilitaire pour envoyer l'email
const sendEmail = async (email, name, link) => {
  try {
    await axios.post(`${API_BASE_URL}/api/devis/send-email`, {
      email,
      name,
      link,
    });
  } catch (err) {
    console.error("Erreur d'envoi d'email :", err.response?.data || err.message);
  }
};
// 🔍 getDevisById
export const getDevisById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/api/devis/${id}`);



  return response;
};

// ✏️ updateDevis + envoi email
export const updateDevis = async (id, data) => {
  const response = await axios.put(`${API_BASE_URL}/api/devis/${id}`, data);

  const email = data.email;
  const nom = data.nom;
  await sendEmail(email, nom, `${API_BASE_URL}/offre`);

  return response;
};
export const getDevisByCategory = async (categorie, email) => {

  try {
    const res = await fetch(`${API_BASE_URL}/api/devis/categorie?email=${encodeURIComponent(email)}&categories=${categorie}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!res.ok) throw new Error('Erreur lors de la récupération des devis');
    return await res.json();
  } catch (error) {
    console.error('Erreur API GET devis:', error);
    throw error;
  }
};

export const deleteDevisById = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/devis/${id}`, {
      method: 'DELETE',
    });

    if (!res.ok) throw new Error('Erreur lors de la suppression du devis');
    return true;
  } catch (error) {
    console.error('Erreur API DELETE devis:', error);
    throw error;
  }
};
