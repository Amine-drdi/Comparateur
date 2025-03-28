import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaProjectDiagram, FaEnvelope, FaChevronDown, FaBloggerB} from "react-icons/fa";
import { FaHeartbeat , FaCar } from "react-icons/fa";


export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Données des menus
  const menuItems = [
    {
      name: "Accueil",
      icon: "",
      content: (
        <div className="grid gap-2 p-3 w-64">
          <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition">
            <span className="bg-blue-100 p-2 rounded-full mr-3">
              <FaHome className="text-blue-600" />
            </span>
            <div>
              <p className="font-medium">Accueil Principal</p>
              <p className="text-sm text-gray-500">Page d'accueil</p>
            </div>
          </a>
          <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition">
            <span className="bg-purple-100 p-2 rounded-full mr-3">
              <FaBloggerB className="text-purple-600" />
            </span>
            <div>
              <p className="font-medium">Blog</p>
              <p className="text-sm text-gray-500">Nos articles</p>
            </div>
          </a>
        </div>
      ),
    },
    {
      name: "Mutuelle santé",
      icon: <FaHeartbeat className="mr-2" />,
      content: (
        <div className="p-3 ">
          <div className="flex space-x-3 ">
            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 border border-gray-100 transition min-w-[180px]">
              <img 
                  src="../../public/Nouveau dossier/assurance-medicale.png" 
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
    {
      name: "Assurance auto",
      icon: <FaCar className="mr-2" />,
      content: (
        <div className="p-3 ">
          <div className="flex space-x-3 ">
          <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 border border-gray-100 transition min-w-[180px]">
              <img 
                  src="../../public/Nouveau dossier/voiture.png" 
                  alt="Assurance auto" 
                  className="w-20 h-20 mb-2 mx-auto"
                />
              <p className="font-medium text-center">Assurance auto</p>
              <p className="text-sm text-blue-600 text-center">Obtenir un devis</p>
            </a>
          </div>
        </div>
      ),
    },
    {
      name: "Assurance habitation",
      icon: <FaHome className="mr-2" />,
      content: (
        <div className="p-3 ">
          <div className="flex space-x-3 ">
            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 border border-gray-100 transition min-w-[180px]">
              <img 
                  src="../../public/Nouveau dossier/maison.png" 
                  alt="Assurance habitation" 
                  className="w-20 h-20 mb-2 mx-auto"
                />
              <p className="font-medium text-center">Assurance habitation</p>
              <p className="text-sm text-blue-600 text-center">Obtenir un devis</p>
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Structure en 3 colonnes */}
        <div className="flex items-center justify-between">
          {/* Colonne gauche - Logo */}
          <a href="#" class="flex items-center whitespace-nowrap text-2xl font-black">
        <span class="mr-2 text-4xl text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm1.65-2.65L11.5 12.2V9h1v2.79l1.85 1.85l-.7.71z"/>
          </svg>
        </span>
        MonCompare
      </a>
          {/* Colonne centrale - Menu (centré) */}
          <div className="flex-1 flex justify-center">
            <ul className="flex space-x-1 md:space-x-8">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="relative"
                >
                  <button className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200 rounded-full hover:bg-gray-50">
                    {item.icon}
                    {item.name}
                    <FaChevronDown className={`ml-1 text-xs transition-transform ${activeDropdown === index ? "rotate-180" : ""}`} />
                  </button>

                  {/* Dropdown Card */}
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                      >
                        {item.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne droite - Espace vide (pour l'équilibre) */}
          <div className="w-32 flex-shrink-0"></div>
        </div>
      </div>
    </nav>
  );
}