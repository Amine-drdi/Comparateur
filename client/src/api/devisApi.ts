import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const registerDevis = async (data: { genre?: string; couverture?: string; dateNaissance?: string; regimeSocial?: string; codePostal?: string; selectedCode?: null; dateDebutAssurance?: string; typeCouverture?: string; nom: any; prenom?: string; email: any; telephone?: string; accepteAppel?: string; conditionsAcceptees?: boolean; niveauRemboursement?: { soinsCourants: string; hospitalisation: string; dentaire: string; optique: string; }; categories?: any; }) => { 
  data.categories = 'sante';  

  const response = await axios.post(`${API_BASE_URL}/api/devis`, data);
    // On envoie l'email avec les infos récupérées
    const email = data.email;
    const nom = data.nom;
    await sendEmail(email, nom, `${API_BASE_URL}/offre`);
  return response.data;
};
// Utilitaire pour envoyer l'email
const sendEmail = async (email: any, name: any, link: string) => {
  try {
    await axios.post(`${API_BASE_URL}/api/devis/send-email`, {
      email,
      name,
      link,
    });
  } /*catch (err) {
    console.error("Erreur d'envoi d'email :", err.response?.data || err.message);
  }*/
    catch (error: any) {
      console.error("Erreur d'envoi d'email  :", error.response?.data || error.message);
      throw new Error("Erreur d'envoi d'email ");
    }
};
// 🔍 getDevisById
export const getDevisById = async (id: any) => {
  const response = await axios.get(`${API_BASE_URL}/api/devis/${id}`);



  return response;
};

// ✏️ updateDevis + envoi email
export const updateDevis = async (id: any, data: { genre?: string; couverture?: string; dateNaissance?: string; regimeSocial?: string; codePostal?: string; selectedCode?: null; dateDebutAssurance?: string; typeCouverture?: string; nom: any; prenom?: string; email: any; telephone?: string; accepteAppel?: string; conditionsAcceptees?: boolean; niveauRemboursement?: { soinsCourants: string; hospitalisation: string; dentaire: string; optique: string; }; }) => {
  const response = await axios.put(`${API_BASE_URL}/api/devis/${id}`, data);

  const email = data.email;
  const nom = data.nom;
  await sendEmail(email, nom, `${API_BASE_URL}/offre`);

  return response;
};
export const getDevisByCategory = async (categorie: string, email: string | number | boolean) => {

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

export const deleteDevisById = async (id: any) => {
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
