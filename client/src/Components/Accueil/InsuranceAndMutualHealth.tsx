import React from 'react';

const HealthInsuranceMenuWithNavbar = () => {
  return (
    <div className="pt-16 md:pt-20"> {/* Espace pour la navbar */}
      <div className="flex flex-col md:flex-row gap-4 bg-white font-sans max-w-6xl mx-auto px-4">
        {/* Colonne gauche */}
        <div className="w-full md:w-1/3 bg-white rounded shadow p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-green-500 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 className="font-medium text-gray-700">Assurance et mutuelle santé</h2>
          </div>
            
          <a href="/compare" className="block">
  <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-medium py-3 px-4 rounded text-center transition-colors">
    Obtenir un devis
  </button>
</a>
          
          <div className="mb-4">
            <h3 className="font-medium text-gray-700 mb-2">Nos produits</h3>
            
            <ul className="space-y-2">
              <li><a href="/InsuranceComparison" className="text-blue-400 hover:text-blue-500">Mutuelle santé</a></li>
              <li><a href="/mutuelleEntreprise" className="text-blue-400 hover:text-blue-500">Mutuelle d'entreprise</a></li>
              <li><a href="/optique" className="text-blue-400 hover:text-blue-500">Besoin optique</a></li>
              <li><a href="/dentaire" className="text-blue-400 hover:text-blue-500">Besoin dentaire</a></li>
              <li><a href="#" className="text-blue-400 hover:text-blue-500">Besoin orthodontie</a></li>
              <li><a href="#" className="text-blue-400 hover:text-blue-500">Assurance santé expatriés</a></li>
            </ul>
          </div>
        </div>
        
        {/* Colonne du milieu */}
        <div className="w-full md:w-1/3 p-4">
          <div className="mb-4">
            <h2 className="text-gray-700 mb-2">Vous êtes</h2>
            
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-400 hover:text-blue-500">Senior / Retraité</a></li>
              <li><a href="#" className="text-blue-400 hover:text-blue-500">Travailleur Non Salarié (TNS)</a></li>
              <li><a href="#" className="text-blue-400 hover:text-blue-500">Demandeur d'emploi</a></li>
              <li><a href="#" className="text-blue-400 hover:text-blue-500">Fonctionnaire</a></li>
              <li><a href="#" className="text-blue-400 hover:text-blue-500">Profession libérale</a></li>
              <li><a href="#" className="text-blue-400 hover:text-blue-500">Auto entrepreneur</a></li>
              <li><a href="#" className="text-blue-400 hover:text-blue-500">Etudiant</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-700 mb-2">Voir aussi</h3>
            
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-400 hover:text-blue-500">Assurance prévoyance</a></li>
              <li><a href="#" className="text-blue-400 hover:text-blue-500">Lettre de résiliation</a></li>
            </ul>
          </div>
        </div>
        
        {/* Colonne droite */}
        <div className="w-full md:w-1/3">
          {/* Boîte d'aide */}
          <div className="bg-blue-50 rounded p-4 mb-4">
            <div className="flex items-center gap-2 mb-4">
            <div className="mb-4 flex justify-center">
              <img src="https://www.argusdelassurance.com/mediatheque/2/3/6/000163632_896x598_c.jpg" 
              alt="Hervé" 
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full"
              />
              </div>
              <h2 className="font-medium text-gray-700">Pour vous aider</h2>
            </div>
            
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-400 hover:text-blue-500">Tout savoir sur son assurance santé</a></li>
              <li><a href="#" className="text-blue-400 hover:text-blue-500">Bien choisir son assurance santé</a></li>
              <li><a href="#" className="text-blue-400 hover:text-blue-500">Résilier son assurance santé</a></li>
              <li><a href="#" className="text-blue-400 hover:text-blue-500">Les remboursements de l'assurance santé</a></li>
              <li><a href="#" className="text-blue-400 hover:text-blue-500">Tous les guides santé</a></li>
              <li><a href="#" className="text-blue-400 hover:text-blue-500">Les dernières actualités</a></li>
            </ul>
          </div>
          
          {/* Boîte de service */}
          <div className="bg-blue-50 rounded p-4">
            <div className="flex items-center gap-2 mb-4">
            <div className="mb-4 flex justify-center">
              <img src="https://www.flexassur.fr/design/medias/img-mutuelle-sante-m.jpg"
                alt="Hervé" 
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full"
              />
              </div>
              <h2 className="font-medium text-gray-700">Fonctionnement</h2>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-blue-400">Service 100% gratuit</span>
              <span className="text-blue-400">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthInsuranceMenuWithNavbar;