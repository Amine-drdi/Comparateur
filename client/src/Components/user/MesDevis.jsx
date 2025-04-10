import { useState, useEffect } from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { getDevisByCategory, deleteDevisById } from '../../api/devisApi';
import { useNavigate } from 'react-router-dom';
 export default function MesDevis() {
  const [tab, setTab] = useState('sante');
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const [devisData, setDevisData] = useState({
    sante: [],
    auto: [],
    moto: [], 
    habitation: [] 
  });

  const tabs = [
    { key: 'sante', label: 'Mutuelle santé' },
    { key: 'auto', label: 'Assurance auto' },
    { key: 'moto', label: 'Assurance moto' },
    { key: 'habitation', label: 'Assurance habitation' },
  ];

  useEffect(() => {


    const fetchDevis = async () => {
      try {
        const data = await getDevisByCategory(tab, user.email);
  
        const mapped = data.map((d) => {
          const adultes = d.members.filter((m) => m.type === 'adulte').length;
          const enfants = d.members.filter((m) => m.type === 'enfant').length;
          return {
            id: d._id,
            date: new Date(d.dateSearch).toLocaleDateString(),
            adulte: adultes,
            enfant: enfants,
            prix: typeof d.prixTotal === 'number' ? d.prixTotal.toFixed(2).replace('.', ',') : '0,00',
            debut: new Date(d.dateDebutAssurance).toLocaleDateString()
          };
        });
  
        setDevisData((prev) => ({ ...prev, [tab]: mapped }));
      } catch (err) {
        console.error('Erreur fetch devis:', err);
      }
    };
  
    fetchDevis();
  }, [tab]);
  const handleUpdate =  (id) => {
    navigate(`/compare/${id}`);

  }
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Voulez-vous vraiment supprimer ce devis ?');
    if (!confirmDelete) return;
  
    try {
      await deleteDevisById(id);
  
      setDevisData((prev) => ({
        ...prev,
        [tab]: prev[tab].filter((item) => item.id !== id),
      }));
    } catch (err) {
      console.error('Erreur lors de la suppression :', err);
    }
  };
  
  const renderDevis = (category) => {
    if (devisData[category].length === 0) {
      return (
        <p className="text-gray-500 text-sm italic">
          Aucun devis disponible pour cette catégorie.
        </p>
      );
    }

    return devisData[category].map((devisItem, idx) => (
      <div
        key={idx}
        className="bg-white p-6 rounded-lg shadow-sm border flex flex-col md:flex-row md:items-center justify-between mb-5"
      >
        <div className="mb-4 md:mb-0">
          <p className="text-gray-600 text-sm mb-1">
            Votre meilleur prix obtenu le {devisItem.date}
          </p>
          <p className="text-sm">Adulte : <strong>{devisItem.adulte}</strong></p>
          <p className="text-sm">Enfant : <strong>{devisItem.enfant}</strong></p>
          <p className="text-sm">Début de contrat : <strong>{devisItem.debut}</strong></p>
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
              <span  onClick={() => handleUpdate(devisItem.id)}>Modifier les infos</span>
            </button>
            <button
              onClick={() => handleDelete(devisItem.id)}
              className="flex items-center space-x-1 hover:text-red-600"
            >
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

      <div className="flex border-b border-gray-200 mb-8">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2 font-semibold ${
              tab === t.key ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="space-y-5">
        {renderDevis(tab)} 
        <div className="pt-4">
        {tab === 'sante' ? (
    <button
      onClick={() => navigate('/compare')}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
    >
      Faire un nouveau devis santé
    </button>
  ) : (
    <button
      disabled
      className="bg-gray-400 text-white font-bold py-3 px-6 rounded-lg cursor-not-allowed"
    >
      {getNewDevisLabel(tab)}
    </button>
  )}
        </div>
      </div>
    </div>
  );
}
