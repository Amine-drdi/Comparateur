import { logout as reduxLogout } from '../../redux/authSlice';
import { FiLogOut } from 'react-icons/fi';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MesDevis from './MesDevis';
import MesInformations from './MesInformations';
import MesPreferences from './MesPreferences';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function AdminNavbar() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem('adminActiveTab') || 'devis';
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(reduxLogout());
    window.location.href = '/';
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    localStorage.setItem('adminActiveTab', tab);
    setIsMobileMenuOpen(false); // close menu on mobile
  };

  const components = {
    devis: <MesDevis />,
    informations: <MesInformations />,
    preferences: <MesPreferences />,
  };

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            <a href="./">MonCompare Admin</a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 text-sm font-medium items-center">
            <li>
              <button
                onClick={() => handleTabChange('devis')}
                className={`hover:text-blue-600 transition ${
                  activeTab === 'devis' ? 'font-bold underline text-blue-600' : ''
                }`}
              >
                Mes devis
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabChange('informations')}
                className={`hover:text-blue-600 transition ${
                  activeTab === 'informations' ? 'font-bold underline text-blue-600' : ''
                }`}
              >
                Mes informations
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabChange('preferences')}
                className={`hover:text-blue-600 transition ${
                  activeTab === 'preferences' ? 'font-bold underline text-blue-600' : ''
                }`}
              >
                Mes préférences
              </button>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-red-600 hover:text-red-800 transition"
              >
                <FiLogOut />
                <span>Déconnexion</span>
              </button>
            </li>
          </ul>

          {/* Mobile Burger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow px-4 py-4 space-y-4">
            <button
              onClick={() => handleTabChange('devis')}
              className={`block w-full text-left ${
                activeTab === 'devis' ? 'text-blue-600 font-semibold underline' : ''
              }`}
            >
              Mes devis
            </button>
            <button
              onClick={() => handleTabChange('informations')}
              className={`block w-full text-left ${
                activeTab === 'informations' ? 'text-blue-600 font-semibold underline' : ''
              }`}
            >
              Mes informations
            </button>
            <button
              onClick={() => handleTabChange('preferences')}
              className={`block w-full text-left ${
                activeTab === 'preferences' ? 'text-blue-600 font-semibold underline' : ''
              }`}
            >
              Mes préférences
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center text-red-600 hover:text-red-800 gap-2"
            >
              <FiLogOut />
              <span>Déconnexion </span>
            </button>
          </div>
        )}
      </nav>

      {/* Contenu */}
      <div className="pt-24 px-4">
        {components[activeTab]}
      </div>
    </>
  );
}
