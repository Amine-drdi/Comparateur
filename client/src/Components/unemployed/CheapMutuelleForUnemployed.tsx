import React from "react";

const CheapMutuelleForUnemployed = () => {
  return (
    <section className="px-4 py-10 md:px-10 max-w-6xl mx-auto bg-white">
      <h2 className="text-xl md:text-2xl font-bold text-teal-900 mb-4">
        Mutuelle santé pas chère pour chômeur : une offre adaptée avec Devis Mutuelle
      </h2>

      <p className="text-gray-800 mb-4">
        Pour trouver une mutuelle adaptée à votre situation, même lorsque vous êtes sans emploi, Devis Mutuelle vous propose des solutions sur-mesure. La perte de revenus ne doit pas empêcher l’accès à des soins de qualité. Avec nos partenaires, vous comparez facilement les offres les plus économiques.
      </p>

      <p className="text-gray-800 mb-4">
        Une mutuelle santé pour chômeur permet d’éviter les restes à charge en cas de consultation ou de soins non remboursés intégralement par la Sécurité sociale. Elle vous garantit également la prise en charge rapide en cas d’urgence ou de besoin ponctuel, sans avancer des frais importants.
      </p>

      <ul className="list-disc list-inside text-gray-800 mb-6">
        <li>Des garanties ajustées à votre budget</li>
        <li>La possibilité de conserver votre mutuelle d’entreprise via la portabilité</li>
        <li>Une souscription simple et rapide en ligne</li>
      </ul>

      <h3 className="text-lg font-semibold text-blue-800 mb-2">
        Comparer votre mutuelle chômeur avec Devis Mutuelle c’est :
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 text-center mb-10 gap-6">
        <div>
          <img src="/src/assets/unemployed/images/img1.png" alt="Économie" className="mx-auto w-12 h-12" />
          <p className="text-sm mt-2 font-medium">Du temps et de l'argent économisés</p>
        </div>
        <div>
          <img src="/src/assets/unemployed/images/img2.png" alt="Clarté" className="mx-auto w-12 h-12" />
          <p className="text-sm mt-2 font-medium">Une comparaison simple et claire</p>
        </div>
        <div>
          <img src="/src/assets/unemployed/images/img3.png" alt="Sans engagement" className="mx-auto w-12 h-12" />
          <p className="text-sm mt-2 font-medium">Sans frais ni obligation d’adhésion</p>
        </div>
      </div>

      <p className="text-gray-800 mb-6">
        Grâce à notre comparateur, vous visualisez les offres en quelques clics. Indiquez simplement votre profil (chômage, ancien salarié, etc.), vos besoins en soins, et votre budget. Devis Mutuelle vous affiche une liste des mutuelles les mieux adaptées. Vous pouvez ensuite affiner par niveau de remboursement ou délai de carence.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-300">
          <thead className="bg-blue-50">
            <tr>
              <th className="p-3 font-medium">Assureur</th>
              <th className="p-3 font-medium">Prix moyen / mois</th>
              <th className="p-3 font-medium">Note des utilisateurs Devis Mutuelle</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-t">
              <td className="p-3">April</td>
              <td className="p-3">19,90€</td>
              <td className="p-3">⭐⭐⭐⭐⭐</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">Apivia Macif</td>
              <td className="p-3">21,70€</td>
              <td className="p-3">⭐⭐⭐⭐</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">Mutuelle Ociane</td>
              <td className="p-3">23,50€</td>
              <td className="p-3">⭐⭐⭐⭐⭐</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">SwissLife</td>
              <td className="p-3">24,10€</td>
              <td className="p-3">⭐⭐⭐</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-400 mt-4 italic">
        Mise à jour le 30/04/2025 — Tarifs à titre indicatif.
      </p>
    </section>
  );
};

export default CheapMutuelleForUnemployed;
