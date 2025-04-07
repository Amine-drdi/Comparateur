import React, { createContext, useState, useContext } from "react";

// Créer un contexte pour l'authentification
const AuthContext = createContext();

// Créer un fournisseur de contexte pour envelopper l'application
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Vérifie si le token est présent dans le stockage local
  const checkAuth = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

// Appelle cette fonction pour se connecter
  const login = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };


  // Appelle cette fonction pour se déconnecter
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  // Utilisation de useEffect pour vérifier l'authentification au démarrage
  React.useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, checkAuth, logout,login }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte d'authentification
export const useAuth = () => useContext(AuthContext);
