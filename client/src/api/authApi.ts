import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
interface UserInfo {
  prenom: string;
  nom: string;
  email: string;
  codePostal?: string;
  address?: string;
  telephone?: string;
  [key: string]: string | undefined;
}
// Envoi du code à l'e-mail
export async function sendCode(email: any) {
  const response = await fetch(`${API_BASE_URL}/auth/send-code`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erreur lors de l’envoi du code");
  }
 
  return response.json();
}


export const verifyCode = async (email: string, code: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/verify-code`, { email, code });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Code de vérification invalide');
    }
    throw new Error('Une erreur est survenue');
  }
};
export const getUserProfile = async (id: any) => {
  const response = await axios.get(`${API_BASE_URL}/auth/profile/${id}`);
  return response.data;
};

export const getUserProfileToken = async (token: any) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
     return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération du profil utilisateur :', error);
    throw error;
  }
};

export const updateUserProfile = async (id: string, userData: UserInfo): Promise<UserInfo> => {
  const response = await fetch(`${API_BASE_URL}/auth/profile/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error('Erreur lors de la mise à jour du profil utilisateur.');
  }

  return await response.json();
};
export const deleteUserProfile = async (id: any) => {
  const response = await fetch(`${API_BASE_URL}/auth/profile/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}` si besoin
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Erreur suppression utilisateur");
  }

  return await response.json();
};

