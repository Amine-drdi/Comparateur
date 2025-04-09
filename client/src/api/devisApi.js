import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const registerDevis = async (data) => { 
  data.categories = 'sante';  

  const response = await axios.post(`${API_BASE_URL}/api/devis`, data);
  return response.data;
};
export const getDevisById = (id) => axios.get(`${API_BASE_URL}/api/devis/${id}`);
export const updateDevis = (id, data) => axios.put(`${API_BASE_URL}/api/devis/${id}`, data)
export const getDevisByCategory = async (categorie, email) => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/devis/categorie/${categorie}?email=${encodeURIComponent(email)}`, {
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
