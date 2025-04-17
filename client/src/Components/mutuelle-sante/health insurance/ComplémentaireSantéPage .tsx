import React from 'react';

const ComplémentaireSantéPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">Combien va coûter une complémentaire santé en 2025 ?</h1>
      
      <p className="mb-4 text-gray-700">
        Vous l'avez sans doute vu dans les actu, les mutuelles risquent encore d'augmenter le prix de leurs offres début 2025. La tendance annoncée par les spécialistes serait une hausse moyenne des tarifs des complémentaires santés individuelles comprise entre 6 et 8%. Cette augmentation est due, en grande partie, à la hausse des tarifs des consultations médicales qui prend effet en décembre 2024.
      </p>
      
      <p className="mb-4 text-gray-700">
        Mais toutes les mutuelles ne vont pas forcément augmenter leurs prix. D'autres vont les augmenter de moins de 8%. Et d'autres de plus de 8%. Tout ça pour dire que le meilleur moyen de trouver un contrat santé pas cher c'est... la comparaison !
      </p>
      
      <p className="mb-4 font-medium text-gray-800">
        Sachez aussi que le <span className="font-bold">prix de votre complémentaire santé dépend de plusieurs autres critères</span> :
      </p>
      
      <ul className="mb-6 pl-5">
        <li className="flex items-start mb-2">
          <span className="text-blue-500 mr-2">•</span>
          <span>Votre âge</span>
        </li>
        <li className="flex items-start mb-2">
          <span className="text-blue-500 mr-2">•</span>
          <span>Votre lieu de résidence</span>
        </li>
        <li className="flex items-start mb-2">
          <span className="text-blue-500 mr-2">•</span>
          <span>Le nombre de personnes couvertes par le contrat (ayants droit)</span>
        </li>
        <li className="flex items-start mb-2">
          <span className="text-blue-500 mr-2">•</span>
          <span>Le niveau de couverture choisi</span>
        </li>
      </ul>
      
      <h2 className="text-xl font-bold text-blue-800 mb-6">
        C'est plus clair pour vous ? Alors, lancez-vous dans une comparaison de mutuelles en ligne avec LNR Finance !
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Premier avantage */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="text-orange-500 text-2xl">⏳</span>
            </div>
          </div>
          <h3 className="text-lg font-bold text-center mb-2">Du temps de gagné !</h3>
          <p className="text-gray-600 text-sm">
            Au lieu d'aller sur de nombreux sites différents pour trouver la meilleure complémentaire santé, LNR Finance compare pour vous jusqu'à 30 offres sur une seule page.
          </p>
        </div>
        
        {/* Deuxième avantage */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-500 text-2xl">👩‍💼</span>
            </div>
          </div>
          <h3 className="text-lg font-bold text-center mb-2">Tout est plus clair !</h3>
          <p className="text-gray-600 text-sm">
            LNR Finance vous explique simplement les garanties et assurances santé pour que vous fassiez le meilleur choix. Finies les décisions à l'aveugle.
          </p>
        </div>
        
        {/* Troisième avantage */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <span className="text-yellow-500 text-2xl">💰</span>
            </div>
          </div>
          <h3 className="text-lg font-bold text-center mb-2">Faites face à l'inflation !</h3>
          <p className="text-gray-600 text-sm">
            Trouver une assurance santé moins chère avec les mêmes garanties, c'est autant d'économies faites pour préserver votre budget plaisir sans sacrifier votre protection.
          </p>
        </div>
      </div>
      
      {/* Nouvelle section de page de résultats */}
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
        <h2 className="text-xl font-bold text-blue-800 mb-4">
          À quoi ressemble une page de résultats de comparaison de mutuelle en ligne chez LNR Finance ?
        </h2>
        
        <p className="mb-4 text-gray-700">
          La comparaison chez LNR Finance est rapide et gratuite, n'ayez pas peur. Après avoir rempli vos informations et le niveau de couverture souhaité dans notre comparateur, vous allez :
        </p>
        
        <ul className="pl-5">
          <li className="flex items-start mb-3">
            <span className="text-blue-500 mr-2">•</span>
            <span>Découvrir une liste des offres de nos mutuelles partenaires, qui correspondent à vos besoins, et qui seront classées selon le meilleur prix (du plus petit au plus grand)</span>
          </li>
          <li className="flex items-start mb-3">
            <span className="text-blue-500 mr-2">•</span>
            <span>Pouvoir faire une demande de devis gratuit en un clic</span>
          </li>
          <li className="flex items-start mb-3">
            <span className="text-blue-500 mr-2">•</span>
            <span>Obtenir une synthèse des garanties et des taux de remboursement de chaque contrat, vous pourrez aussi accéder au détail de l'offre</span>
          </li>
          <li className="flex items-start mb-3">
            <span className="text-blue-500 mr-2">•</span>
            <span>Pouvoir faire une comparaison précise entre deux offres sélectionnées</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ComplémentaireSantéPage;