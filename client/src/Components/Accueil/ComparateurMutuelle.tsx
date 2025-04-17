import React from 'react';
import { useState } from 'react';

const ComparateurMutuelle = () => {
  const filters = {
    niveaux: ['Minimum', 'Moyen', 'Élevé', 'Maximum'],
    profils: ['Actifs', 'Fonctionnaires', 'Seniors', 'Tous profils'],
    assureurs: ['AcommeAssure', 'Aésio Mutuelle', 'Allianz', 'Alptis', 'Apicil', 'Apivia', 'April', 'AvoCotés'],
    garanties: {
      'Soins courants': ['Médecines douces', 'Cures thermales', 'Aides auditives', 'Appareillage orthopédique'],
      Optique: ['Chirurgie pour la myopie', 'Lentilles'],
      Dentaire: ['Prothèses dentaires', 'Implants dentaires', 'Orthodontie adulte'],
      Hospitalisation: ['Chambre particulière', 'Forfait maternité'],
    },
  };
  const [hasClickedVoirPlus, setHasClickedVoirPlus] = useState(false);

  const offres = [
    {
      assureur: 'Aésio',
      produit: 'Santé Particuliers Hospi',
      niveau: 2,
      avantages: [
        'Médecines douces jusqu’à 40€ par séance',
        'Chambre particulière jusqu’à 60€ par jour',
        'Assistance psychologique 24h/24 7j/7',
      ],
      promo: '1 mois offert',
    },
    {
      assureur: 'Julia',
      produit: 'Alto Santé 1',
      niveau: 2,
      avantages: [
        'Renforts pour les aides auditives',
        'Chambre particulière jusqu’à 65€ par jour',
      ],
      promo: '',
    },
    // Ajoute ici d'autres lignes comme nécessaire
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      {/* Filtres */}
      <aside className="w-full lg:w-1/4 space-y-4">
        {/* Niveau de couverture */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">Niveau de couverture</h3>
          {filters.niveaux.map((n, i) => (
            <label key={i} className="block text-sm">
              <input type="checkbox" className="mr-2" /> {n}
            </label>
          ))}
        </div>

        {/* Votre profil */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">Votre profil</h3>
          {filters.profils.map((p, i) => (
            <label key={i} className="block text-sm">
              <input type="checkbox" className="mr-2" /> {p}
            </label>
          ))}
        </div>

        {/* Assureurs */}
        <div className="bg-white p-4 rounded shadow max-h-40 overflow-y-auto">
          <h3 className="font-bold mb-2">Assureurs</h3>
          {filters.assureurs.map((a, i) => (
            <label key={i} className="block text-sm">
              <input type="checkbox" className="mr-2" /> {a}
            </label>
          ))}
        </div>

        {/* Garanties */}
        {Object.entries(filters.garanties).map(([cat, list], i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold mb-2">{cat.toUpperCase()}</h3>
            {list.map((g, j) => (
              <label key={j} className="block text-sm">
                <input type="checkbox" className="mr-2" /> {g}
              </label>
            ))}
          </div>
        ))}
      </aside>

      {/* Tableau des offres */}
      <main className="w-full lg:w-3/4">
        {offres.map((offre, i) => (
          <div
            key={i}
            className="bg-white rounded shadow p-4 mb-4 flex flex-col md:flex-row items-center justify-between"
          >
            {/* Info assureur + produit */}
            <div className="w-full md:w-1/4 text-center md:text-left">
              <div className="font-bold">{offre.assureur}</div>
              <div className="text-sm">{offre.produit}</div>
            </div>

            {/* Niveau de couverture */}
            <div className="w-full md:w-1/4 text-center py-2 md:py-0">
              {'⭐'.repeat(offre.niveau)}{' '}
              {'☆'.repeat(5 - offre.niveau)}
            </div>

            {/* Avantages */}
            <ul className="w-full md:w-1/3 text-sm list-disc pl-4 text-gray-600">
              {offre.avantages.map((a, idx) => (
                <li key={idx}>{a}</li>
              ))}
            </ul>

            {/* Actions */}
            <div className="w-full md:w-1/6 text-center mt-4 md:mt-0">
              {offre.promo && (
                <div className="text-sm text-blue-600 mb-1">{offre.promo}</div>
              )}
            <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded">
  Obtenir un devis
</button>
            </div>
          </div>
        ))}
       <div className="text-center mt-6">
  {!hasClickedVoirPlus ? (
    <button
      onClick={() => setHasClickedVoirPlus(true)}
      className="border border-blue-500 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 text-sm font-medium"
    >
      Voir plus d'offres
    </button>
  ) : (
    <p className="text-gray-600 text-sm">Toutes les offres disponibles sont affichées.</p>
  )}
</div>
      </main>
    </div>
  );
};

export default ComparateurMutuelle;
