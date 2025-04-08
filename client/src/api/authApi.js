import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Envoi du code à l'e-mail
export async function sendCode(email) {
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
export async function verifyCode(email, code) {
  const response = await fetch(`${API_BASE_URL}/auth/verify-code`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, code }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Code incorrect");
  }

  return response.json(); // peut contenir un token ou user info
}
export const registerUser = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/auth/register`, data);
  return response.data;
};
export const getUserProfile = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/auth/profile/${id}`);
  return response.data;
};

export const getUserProfileToken = async (token) => {
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