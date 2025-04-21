import React, { ReactNode } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import AppRoutes from './AppRoutes';
import AdminNavbar from './Components/user/AdminNavbar';
import NavbarA from './Components/Accueil/NavbarA';
import Footer from './Components/Home/Footer';

// Typage des props de LayoutWrapper
interface LayoutWrapperProps {
  children: ReactNode;
}

// Composant wrapper qui affiche un layout différent selon le chemin
const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <>
      {isDashboard ? <AdminNavbar /> : <NavbarA />}
      <main className="min-h-screen pt-16">{children}</main>
      {!isDashboard && <Footer />}
    </>
  );
};

// Composant principal
const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <LayoutWrapper>
          <CartProvider>
            <AppRoutes />
          </CartProvider>
        </LayoutWrapper>
      </AuthProvider>
    </Router>
  );
};

export default App;
