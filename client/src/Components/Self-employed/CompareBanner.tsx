import React from "react";
import icon from "../../assets/senior/images/plus.png"; // Remplace ce chemin par celui de ton icône

export default function CompareBanner() {
  return (
    <div className="border border-blue-300 bg-blue-100 rounded-md p-4 flex items-center justify-between max-w-4xl mx-auto">
      <div className="flex items-center space-x-3">
        <img src={icon} alt="Icône santé" className="w-20 h-20" />
        <span className="text-sm font-medium text-gray-800">
          Trouvez le contrat santé qui correspond à vos besoins !
        </span>
      </div>

      <a
        href="/compare"
        className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
      >
        Comparer les mutuelles 
      </a>
    </div>
  );
}
