import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (token) {
      login(token); // enregistre le token dans localStorage et met isAuthenticated à true
      navigate('/dashboard', { replace: true }); // Supprime le token de l'URL pour sécurité
    }
  }, [location, login, navigate]);

  return <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-xl shadow-md">
  <h1 className="text-2xl md:text-3xl font-semibold text-sky-800 text-center mb-8">
Daschboard  </h1>
  </div>
}
