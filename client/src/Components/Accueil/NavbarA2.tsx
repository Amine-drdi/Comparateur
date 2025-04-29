import React, { useState } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import logo from "../../assets/Accueil/images/mutuelle2.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../../context/AuthContext";
import { AnimatePresence, motion } from "framer-motion";

const NavbarA: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.auth.user);

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <span className="text-sm md:text-lg font-bold text-orange-600">
            Devis <span className="text-blue-600">mutuelle</span>
          </span>
        </Link>

        {/* Right side with buttons and burger menu */}
        <div className="flex items-center gap-2">
          {/* DEVIS GRATUIT - visible on both mobile and desktop now */}
          <Link
            to="/compare"
            className="border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-600 hover:text-white transition text-sm"
          >
            DEVIS GRATUIT
          </Link>

          {/* Menu utilisateur (desktop) */}
          <div className="hidden md:block">
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
                      <Link to="/dashboard" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                        Mon Profil
                      </Link>
                      <button onClick={handleLogout} className="block w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-100 rounded">
                        Déconnexion
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Connexion
              </Link>
            )}
          </div>

          {/* Connexion button for mobile */}
          {!isAuthenticated && (
            <Link
              to="/login"
              className="md:hidden px-4 py-1 text-sm font-medium rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Connexion
            </Link>
          )}

          {/* Burger menu (mobile) */}
          <button onClick={toggleMenu} className="text-2xl text-gray-700">
            <FaBars />
          </button>
        </div>
      </div>

      {/* Menu latéral mobile */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 transform transition-transform duration-300 z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <span className="text-sm font-bold text-orange-600">
              Devis <span className="text-blue-600">mutuelle</span>
            </span>
          </Link>
          <button onClick={toggleMenu}>
            <FaTimes className="text-xl" />
          </button>
        </div>

        <nav className="space-y-6 text-base md:text-lg text-gray-800 overflow-y-auto max-h-screen px-4 py-6 pr-6 border-r border-gray-200 scrollbar-thin scrollbar-thumb-gray-300 pb-32">
  {/* VOS BESOINS */}
  <div>
    <p className="font-bold text-xs md:text-sm text-gray-500 uppercase">Vos besoins</p>
    <ul className="ml-2 space-y-1">
      <li><Link to="/InsuranceComparison" onClick={toggleMenu}>Mutuelle santé</Link></li>
      <li><Link to="/mutuelleEntreprise" onClick={toggleMenu}>Mutuelle d'entreprise</Link></li>
      <li><Link to="/optique" onClick={toggleMenu}>Besoin optique</Link></li>
      <li><Link to="/dentaire" onClick={toggleMenu}>Besoin dentaire</Link></li>
      <li><Link to="/orthodontie" onClick={toggleMenu}>Besoin orthodontie</Link></li>
      <li><Link to="/expatries" onClick={toggleMenu}>Assurance santé expatriés</Link></li>
    </ul>
  </div>

  {/* VOTRE PROFIL */}
  <div>
    <p className="font-bold text-xs md:text-sm text-gray-500 uppercase">Votre profil</p>
    <ul className="ml-2 space-y-1">
      <li><Link to="/profil/senior" onClick={toggleMenu}>Senior</Link></li>
      <li><Link to="/profil/famille" onClick={toggleMenu}>Famille</Link></li>
      <li><Link to="/profil/tns" onClick={toggleMenu}>Indépendant et TNS</Link></li>
      <li><Link to="/profil/sans-emploi" onClick={toggleMenu}>Sans emploi</Link></li>
      <li><Link to="/profil/fonctionnaire" onClick={toggleMenu}>Fonctionnaire</Link></li>
      <li><Link to="/profil/etudiant" onClick={toggleMenu}>Étudiant</Link></li>
      <li><Link to="/profil/entreprise" onClick={toggleMenu}>Mutuelle entreprise</Link></li>
    </ul>
  </div>

  {/* MIEUX CHOISIR */}
  <div>
    <p className="font-bold text-xs md:text-sm text-gray-500 uppercase">Mieux choisir</p>
    <ul className="ml-2 space-y-1">
      <li><Link to="/assureurs" onClick={toggleMenu}>Assureurs partenaires</Link></li>
      <li><Link to="/prix" onClick={toggleMenu}>Prix des mutuelles</Link></li>
      <li><Link to="/pas-cher" onClick={toggleMenu}>Mutuelle pas chère</Link></li>
      <li><Link to="/meilleure" onClick={toggleMenu}>Meilleure mutuelle</Link></li>
      <li><Link to="/contrat" onClick={toggleMenu}>Choisir son contrat</Link></li>
    </ul>
  </div>

  {/* PRATIQUE */}
  <div>
    <p className="font-bold text-xs md:text-sm text-gray-500 uppercase">Pratique</p>
    <ul className="ml-2 space-y-1">
      <li><Link to="/depassements" onClick={toggleMenu}>Dépassements d'honoraires</Link></li>
      <li><Link to="/resiliation" onClick={toggleMenu}>Résilier sa mutuelle</Link></li>
      <li><Link to="/frais-medicaux" onClick={toggleMenu}>Frais médicaux</Link></li>
      <li><Link to="/infos" onClick={toggleMenu}>Infos pratiques</Link></li>
    </ul>
  </div>

  {/* AUTHENTIFICATION */}
  <div className="mt-6 border-t pt-4">
    {isAuthenticated ? (
      <div className="space-y-2">
        <p className="text-xs text-gray-500">Connecté :</p>
        <p className="font-semibold">{user?.nom} {user?.prenom}</p>
        <Link
          to="/dashboard"
          onClick={toggleMenu}
          className="block px-4 py-2 rounded bg-gray-100 text-sm text-gray-700 hover:bg-gray-200"
        >
          Mon profil
        </Link>
        <button
          onClick={handleLogout}
          className="block w-full text-left px-4 py-2 rounded bg-red-500 text-white text-sm hover:bg-red-600"
        >
          Déconnexion
        </button>
      </div>
    ) : (
      <div className="space-y-2">
        <Link
          to="/login"
          onClick={toggleMenu}
          className="block w-full text-center px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Connexion
        </Link>
        <Link
          to="/compare"
          onClick={toggleMenu}
          className="block w-full text-center px-4 py-2 rounded border border-blue-600 text-blue-600 bg-white hover:bg-blue-100 font-semibold shadow-sm transition"
        >
          Créer un compte
        </Link>
      </div>
    )}
  </div>
</nav>

      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default NavbarA;
