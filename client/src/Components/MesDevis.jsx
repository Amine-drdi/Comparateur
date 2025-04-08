import { useState } from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

export default function MesDevis() {
  const [tab, setTab] = useState('sante');

  const tabs = [
    { key: 'sante', label: 'Mutuelle santé' },
    { key: 'auto', label: 'Assurance auto' },
    { key: 'moto', label: 'Assurance moto' },
    { key: 'habitation', label: 'Assurance habitation' },
  ];

  const devis = {
    sante: [
      {
        date: '08/04/2025',
        adulte: 1,
        enfant: 2,
        prix: '64,64',
        debut: '08/04/2025',
      },
      {
        date: '04/04/2025',
        adulte: 2,
        enfant: 2,
        prix: '71,44',
        debut: '05/04/2025',
      },
    ],
    auto: [],
    moto: [],
    habitation: [],
  };

  const renderDevis = (category) => {
    if (devis[category].length === 0) {
      return (
        <p className="text-gray-500 text-sm italic">
          Aucun devis disponible pour cette catégorie.
        </p>
      );
    }

    return devis[category].map((devisItem, idx) => (
      <div
        key={idx}
        className="bg-white p-6 rounded-lg shadow-sm border flex flex-col md:flex-row md:items-center justify-between mb-5"
      >
        <div className="mb-4 md:mb-0">
          <p className="text-gray-600 text-sm mb-1">
            Votre meilleur prix obtenu le {devisItem.date}
          </p>
          <p className="text-sm">
            Adulte : <strong>{devisItem.adulte}</strong>
          </p>
          <p className="text-sm">
            Enfant : <strong>{devisItem.enfant}</strong>
          </p>
          <p className="text-sm">
            Début de contrat : <strong>{devisItem.debut}</strong>
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900">
              {devisItem.prix} €<span className="text-sm">/mois</span>
            </p>
            <p className="text-sm text-gray-500">proposé par MGC</p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg">
            Revoir les prix
          </button>

          <div className="flex flex-col space-y-2 text-sm text-gray-600">
            <button className="flex items-center space-x-1 hover:text-blue-600">
              <FiEdit2 />
              <span>Modifier les infos</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-red-600">
              <FiTrash2 />
              <span>Supprimer</span>
            </button>
          </div>
        </div>
      </div>
    ));
  };

  const getNewDevisLabel = (key) => {
    switch (key) {
      case 'sante':
        return 'Faire un nouveau devis santé';
      case 'auto':
        return 'Faire un nouveau devis auto';
      case 'moto':
        return 'Faire un nouveau devis moto';
      case 'habitation':
        return 'Faire un nouveau devis habitation';
      default:
        return 'Faire un nouveau devis';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-10 py-10 mt-2">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Mes devis</h1>

      {/* Onglets */}
      <div className="flex border-b border-gray-200 mb-8">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2 font-semibold ${
              tab === t.key
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-700'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Contenu dynamique */}
      <div className="space-y-5">
        {renderDevis(tab)}

        {/* Bouton spécifique selon l’onglet actif */}
        <div className="pt-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
            {getNewDevisLabel(tab)}
          </button>
        </div>
      </div>
    </div>
  );
}
