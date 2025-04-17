// ... imports inchangés
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaBloggerB, FaHeartbeat, FaCar, FaUserCircle } from "react-icons/fa";
import { useSelector } from 'react-redux';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const menuItems = [
    {
      name: <a href="/Accueil" className="flex items-center p-3 rounded-lg hover:bg-gray-50">Accueil</a>,
      icon: <FaHome className="mr-1" />,
      content: (
        <div className="p-3 grid gap-2 max-w-xs w-full">
          <a href="/Accueil" className="flex items-center p-3 rounded-lg hover:bg-gray-50">
            <span className="bg-blue-100 p-2 rounded-full mr-3"><FaHome className="text-blue-600" /></span>
            <div>
              <p className="font-medium">Accueil Principal</p>
              <p className="text-sm text-gray-500">Page d'accueil</p>
            </div>
          </a>
        </div>
      ),
    },
    {
      name: <a href="/InsuranceComponent" className="text-blue-600 hover:underline">Mutuelle santé</a>,
      icon: <FaHeartbeat className="mr-2" />,
      content: (
        <div className="p-3 ">
          <div className="flex space-x-3 ">
            <a href="/compare" className="block p-3 rounded-lg hover:bg-gray-50 border border-gray-100 transition min-w-[180px]">
              <img 
                src="/images/assurance-medicale.png" 
                alt="Mutuelle santé" 
                className="w-20 h-20 mb-2 mx-auto"
              />
              <p className="font-medium text-center">Mutuelle santé</p>
              <p className="text-sm text-blue-600 text-center">Obtenir un devis</p>
            </a>
          </div>
        </div>
      ),
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <a href="/" className="flex items-center text-xl font-black">
            <span className="text-3xl text-blue-500 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5z" />
              </svg>
            </span>
            MonCompare
          </a>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-4">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="relative"
                >
                  <button className="inline-flex items-center gap-1 text-gray-700 hover:text-blue-600 transition">
                    {item.icon}
                    <span>{item.name}</span>
                  </button>
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 top-full mt-2 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl border border-gray-100 w-max"
                      >
                        {item.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>

            {/* Utilisateur connecté */}
            {isAuthenticated ? (
              <div
                className="relative"
                onMouseEnter={() => setIsUserMenuOpen(true)}
                onMouseLeave={() => setIsUserMenuOpen(false)}
              >
                <button className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition">
                  <FaUserCircle className="text-blue-600" />
                  <span>{user?.nom} {user?.prenom}</span>
                </button>
                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg p-2 z-50"
                    >
                      <a href="/dashboard" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Mon Profil</a>
                      <button onClick={handleLogout} className="block w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-100 rounded">Déconnexion</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a href="/login" className="px-4 py-2 text-sm font-medium rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
                Connexion
              </a>
            )}
          </div>

          {/* Menu burger */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-gray-700 hover:text-blue-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 space-y-4">
            {menuItems.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                  className="flex items-center w-full text-gray-700 hover:text-blue-600"
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </button>
                {activeDropdown === index && (
                  <div className="mt-2 pl-6">
                    {item.content}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 border-t">
              {isAuthenticated ? (
                <>
                  <p className="text-sm text-gray-600">{user?.nom} {user?.prenom}</p>
                  <a href="/dashboard" className="block mt-2 px-4 py-2 rounded bg-gray-100 text-gray-800">Mon Profil</a>
                  <button onClick={handleLogout} className="block mt-2 w-full text-left px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600">
                    Déconnexion
                  </button>
                </>
              ) : (
                <a href="/login" className="block w-full text-center px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                  Connexion
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
