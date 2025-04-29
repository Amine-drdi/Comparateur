import React from 'react';

export default function PrixMutuelleIndependant() {
  const offres = [
    {
      logo: '/src/assets/TNS/images/direct-assurance.png',
      name: 'Direct Assurance',
      price: '103,69 €/mois',
      budget: '1244,28 €/an',
    },
    {
      logo: '/src/assets/TNS/images/cnp-assurances.png',
      name: 'CNP Assurances',
      price: '123,72 €/mois',
      budget: '1484,66 €/an',
    },
    {
      logo: '/src/assets/TNS/images/mgc.png',
      name: 'Mutuelle MGC',
      price: '49,98 €/mois',
      budget: '599,76 €/an',
    },
    {
      logo: '/src/assets/TNS/images/ampli.png',
      name: 'AMPLI Mutuelle',
      price: '61 €/mois',
      budget: '912 €/an',
    },
  ];

  return (
    <section className="bg-gray-50 py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-6">
          Quel est le prix d'une mutuelle pour indépendant ?
        </h2>
        <p className="text-gray-700 mb-4">
          Chez Devis Mutuelle, vous pourrez trouver une mutuelle pour travailleur indépendant à partir de 12€/mois.
          Mais vous bénéficierez de garanties minimes, et donc de remboursements aussi minimes sur les principaux postes de dépenses de santé que sont les soins courants (médecins, pharmacie),
          dentaires, optiques et l’hospitalisation. Selon vos besoins une mutuelle avec des remboursements plus importants peut être plus intéressante pour votre profil.
        </p>
        <p className="text-gray-700 mb-6">
          Pour vous donner une idée plus précise du prix d'une mutuelle pour TNS en fonction de ce qu'elle couvre et rembourse :
        </p>
        <h3 className="text-lg font-semibold text-blue-900 mb-4">
          Voici les 4 dernières offres qui ont été souscrites sur notre site par nos clients TNS :
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offres.map((offre, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img src={offre.logo} alt={offre.name} className="w-24 h-24 mx-auto mb-4 object-contain" />
              <h4 className="text-center text-lg font-semibold text-gray-800 mb-2">{offre.name}</h4>
              <ul className="text-center text-sm text-gray-600 mb-4">
                <li>Soins courants</li>
                <li>Hospitalisation</li>
                <li>Dentaire</li>
                <li>Optique</li>
              </ul>
              <p className="text-center text-xl font-bold text-blue-700 mb-2">{offre.price}</p>
              <p className="text-center text-sm text-gray-500">Budget estimé : {offre.budget}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
