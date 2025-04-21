import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function AvisEtDevis() {
  return (
    <div className="flex flex-col md:flex-row bg-[#f5f5ff] rounded-md overflow-hidden max-w-7xl mx-auto shadow-sm">
      {/* Bloc gauche */}
      <div className="md:w-1/4 flex flex-col justify-center items-center p-6 text-center bg-[#eef0ff]">
        <p className="text-lg font-medium text-blue-900 mb-4">
          Économisez jusqu’à 36% sur votre contrat en comparant les mutuelles !
        </p>
        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100 transition">
          Devis gratuit
        </button>
      </div>

      {/* Bloc témoignages */}
      <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 bg-white">
        {/* Témoignage 1 */}
        <div className="bg-white p-4 rounded shadow-sm border">
          <div className="flex items-center mb-2 text-yellow-400">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
          </div>
          <p className="text-sm mb-2">
            “Le comparateur d’assurance était satisfaisant”
          </p>
          <p className="text-xs text-gray-500">Paule D., le 03/12/2023</p>
        </div>

        {/* Témoignage 2 */}
        <div className="bg-white p-4 rounded shadow-sm border">
          <div className="flex items-center mb-2 text-yellow-400">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <p className="text-sm mb-2">
            “Bonjour, Merci pour le devis. Le questionnaire était simple.”
          </p>
          <p className="text-xs text-gray-500">Michèle F., le 21/11/2023</p>
        </div>

        {/* Témoignage 3 */}
        <div className="bg-white p-4 rounded shadow-sm border">
          <div className="flex items-center mb-2 text-yellow-400">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <p className="text-sm mb-2">
            “Retour rapide des mutuelles sélectionnées”
          </p>
          <p className="text-xs text-gray-500">Sébastien D., le 20/11/2023</p>
        </div>
      </div>
    </div>
  );
}
