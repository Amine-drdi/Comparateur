import { logout as reduxLogout } from '../../redux/authSlice';
import { FiLogOut } from 'react-icons/fi';
import { SetStateAction, useState, useEffect, JSX } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MesDevis from './MesDevis';
import MesInformations from './MesInformations';
import MesPreferences from './MesPreferences';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/Accueil/images/mutuelle2.png';
import { Link } from 'react-router-dom';
type TabKey = 'devis' | 'informations' | 'preferences';

export default function AdminNavbar() {
  const user = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState<TabKey>(
    (localStorage.getItem('adminActiveTab') as TabKey) || 'devis'
  );

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(reduxLogout());
    window.location.href = '/';
  };

  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab);
    localStorage.setItem('adminActiveTab', tab);
    setIsMobileMenuOpen(false);
  };
 
  // Bloquer scroll quand menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  const components: Record<TabKey, JSX.Element> = {
    devis: <MesDevis />,
    informations: <MesInformations />,
    preferences: <MesPreferences />,
  };
  return (
    <>
      {/* TOP NAVBAR */}
      <nav className="w-full bg-white shadow-md border-b fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
  <img src={logo} alt="Logo" className="w-10 h-10" />
  <span className="text-sm md:text-lg font-bold text-orange-600">
  Devis <span className="text-blue-600"> mutuelle</span>
  </span>
</Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <li>
              <button
                onClick={() => handleTabChange('devis')}
                className={`hover:text-blue-600 transition ${
                  activeTab === 'devis' ? 'text-blue-600 underline font-semibold' : ''
                }`}
              >
                Mes devis
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabChange('informations')}
                className={`hover:text-blue-600 transition ${
                  activeTab === 'informations' ? 'text-blue-600 underline font-semibold' : ''
                }`}
              >
                Mes informations
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabChange('preferences')}
                className={`hover:text-blue-600 transition ${
                  activeTab === 'preferences' ? 'text-blue-600 underline font-semibold' : ''
                }`}
              >
                Mes préférences
              </button>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-600 hover:text-red-700 transition"
              >
                <FiLogOut />
                Déconnexion
              </button>
            </li>
          </ul>

          {/* Burger menu (mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 space-y-3 shadow-lg">
            <button
              onClick={() => handleTabChange('devis')}
              className={`block w-full text-left ${
                activeTab === 'devis' ? 'text-blue-600 underline font-semibold' : ''
              }`}
            >
              Mes devis
            </button>
            <button
              onClick={() => handleTabChange('informations')}
              className={`block w-full text-left ${
                activeTab === 'informations' ? 'text-blue-600 underline font-semibold' : ''
              }`}
            >
              Mes informations
            </button>
            <button
              onClick={() => handleTabChange('preferences')}
              className={`block w-full text-left ${
                activeTab === 'preferences' ? 'text-blue-600 underline font-semibold' : ''
              }`}
            >
              Mes préférences
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center text-red-600 hover:text-red-700 gap-2"
            >
              <FiLogOut />
              Déconnexion
            </button>
          </div>
        )}
      </nav>

      {/* Main content */}
      <div className="pt-24 px-4">
        {components[activeTab]}
      </div>
    </>
  );
}
