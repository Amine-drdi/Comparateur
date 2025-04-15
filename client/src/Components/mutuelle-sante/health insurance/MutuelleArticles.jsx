import React from 'react';
import {sections} from "../../../assets/mutuelle-sante/Data/sections"
const MutuelleArticles = () => {
 

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="bg-teal-600 p-4">
          <h1 className="text-white text-2xl font-bold">Pouvez-vous changer de mutuelle quand vous voulez ?</h1>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <p className="text-gray-700 mb-4">
              Oui, généralement vous pouvez changer de mutuelle à tout moment après un an d'engagement. La loi Hamon simplifie ce processus 
              en permettant de résilier sans justification après la première année. Découvrez comment faire, quand c'est le meilleur moment et 
              dans quels cas vous pouvez changer avant la fin de votre engagement de contrat.
            </p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Sommaire</h2>
            <ol className="list-decimal pl-6 text-blue-600">
              <li className="mb-2">
                <a href="#changer-mutuelle" className="hover:underline">Pouvez-vous changer de mutuelle quand vous voulez ?</a>
              </li>
              <li className="mb-2">
                <a href="#cours-annee" className="hover:underline">Peut-on changer de mutuelle en cours d'année ?</a>
              </li>
              <li className="mb-2">
                <a href="#resilier-contrat" className="hover:underline">Dans quels cas pouvez-vous résilier votre contrat avant un an ?</a>
              </li>
            </ol>
          </div>
          
          <div className="mb-8">
            <img 
              src="/api/placeholder/640/320" 
              alt="Consultation avec un médecin" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg flex items-center mb-6">
            <div className="bg-blue-600 text-white p-2 rounded-full mr-3">
              <span className="font-bold">?</span>
            </div>
            <h2 className="text-xl font-bold text-blue-800">Pouvez-vous changer de mutuelle en cours d'année ?</h2>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-6">Nos articles sur les mutuelles</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <a 
            key={section.id} 
            href={`/article/${section.id}${section.link}`} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src="/api/placeholder/400/240" 
                alt={section.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{section.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {section.description[0]}
              </p>
              <div className="mt-4 text-blue-600 font-medium text-sm">
                Lire l'article →
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MutuelleArticles;