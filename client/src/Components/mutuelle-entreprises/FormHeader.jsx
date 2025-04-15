import React from "react";
import image from "../../assets/mutuelle-entreprises/images/en-entreprise-qui-decide-choix-mutuelle-collective-173934.jpg"
const FormHeader = () => {
  return (
    <header className="mt-10 md:mt-20 flex flex-col md:flex-row items-center justify-between bg-white p-6 md:p-10 shadow-sm rounded-xl mb-10">
      {/* Texte à gauche */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
          Comparateur de Mutuelle entreprise
        </h1>
        <ul className="text-sm md:text-base text-gray-700 space-y-1">
          <li>✅ Meilleurs tarifs 2024 Garantis</li>
          <li>✅ Devis Gratuit & sans Engagement</li>
          <li>
            ✅ Les avis des clients :{" "}
            <a href="#" className="text-blue-600 underline">9/10</a> ⭐⭐⭐⭐⭐
          </li>
        </ul>
      </div>

      {/* Mascotte à droite */}
      <div className="mt-6 md:mt-0">
      <img
  src={image}
  alt="Mascotte"
  className="w-40 md:w-64 object-contain"
/>
      </div>
    </header>
  );
};

export default FormHeader;
