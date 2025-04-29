import React from 'react';
import { FaClock } from 'react-icons/fa';

const ExpatHealthInfo: React.FC = () => {
  return (
    <div className="text-sm text-gray-700 space-y-2">
      <p>
        <strong>Mutuelle internationale, assurance santé expatrié...</strong> Les solutions pour se protéger à l'étranger sont nombreuses. 
        <span className="capitalize"> Devis mutuelle</span> vous résume les différentes possibilités selon votre statut d’expatrié.
      </p>

      <div className="flex flex-wrap items-center text-xs text-gray-500 gap-2">
        <a
          href="#"
          className="text-blue-600 hover:underline"
        >
          Les cas particuliers pour le profil de votre mutuelle santé
        </a>
        <span>par <span className="text-blue-600 hover:underline">La rédaction</span></span>
        <span>• mis à jour le 28 juillet 2021</span>
        <span className="flex items-center gap-1">
          <FaClock className="text-gray-400" /> 3 min de lecture
        </span>
      </div>
    </div>
  );
};

export default ExpatHealthInfo;
