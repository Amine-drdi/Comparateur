import { useState, useEffect } from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDevisByCategory, deleteDevisById } from '../../api/devisApi';
import { RootState } from '../../redux/store';

interface DevisItem {
  id: string;
  date: string;
  adulte: number;
  enfant: number;
  prix: string;
  debut: string;
}

type CategoryKey = 'sante' | 'auto' | 'moto' | 'habitation';

export default function MesDevis() {
  const [tab, setTab] = useState<CategoryKey>('sante');
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  const [devisData, setDevisData] = useState<Record<CategoryKey, DevisItem[]>>({
    sante: [],
    auto: [],
    moto: [],
    habitation: [],
  });

  const tabs: { key: CategoryKey; label: string }[] = [
    { key: 'sante', label: 'Mutuelle santé' },
    { key: 'auto', label: 'Assurance auto' },
    { key: 'moto', label: 'Assurance moto' },
    { key: 'habitation', label: 'Assurance habitation' },
  ];

  useEffect(() => {
    const fetchDevis = async () => {
      if (!user) return; // 🛑 user est null, on arrête
  
      try {
        const data = await getDevisByCategory(tab, user.email);
        const mapped: DevisItem[] = data.map((d: any) => {
          const adultes = d.members.filter((m: any) => m.type === 'adulte').length;
          const enfants = d.members.filter((m: any) => m.type === 'enfant').length;
  
          return {
            id: d._id,
            date: new Date(d.dateSearch).toLocaleDateString(),
            adulte: adultes,
            enfant: enfants,
            prix:
              typeof d.prixTotal === 'number'
                ? d.prixTotal.toFixed(2).replace('.', ',')
                : '0,00',
            debut: new Date(d.dateDebutAssurance).toLocaleDateString(),
          };
        });
  
        setDevisData((prev) => ({ ...prev, [tab]: mapped }));
      } catch (err) {
        console.error('Erreur fetch devis:', err);
      }
    };
  
    fetchDevis();
  }, [tab, user]);

  const handleUpdate = (id: string) => {
    navigate(`/modification/${id}`);
  };

  const handleDelete = async (id: string) => {
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

  const renderDevis = (category: CategoryKey) => {
    if (devisData[category].length === 0) {
      return (
        <p className="text-gray-500 italic text-center">
          Aucun devis disponible pour cette catégorie.
        </p>
      );
    }

    return devisData[category].map((devisItem, idx) => (
      <div
        key={idx}
        className="bg-white border rounded-2xl shadow-md p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:shadow-lg"
      >
        <div className="space-y-2">
          <p className="text-sm text-gray-500">
            Meilleur prix obtenu le <span className="font-medium">{devisItem.date}</span>
          </p>
          <div className="text-sm text-gray-700">
            <p>👤 Adulte(s) : <strong>{devisItem.adulte}</strong></p>
            <p>👶 Enfant(s) : <strong>{devisItem.enfant}</strong></p>
            <p>📅 Début du contrat : <strong>{devisItem.debut}</strong></p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="text-2xl font-bold text-blue-600">
              {devisItem.prix} €<span className="text-sm font-normal">/mois</span>
            </p>
            <p className="text-sm text-gray-500">Proposé par MGC</p>
          </div>

          <button
            onClick={() => handleUpdate(devisItem.id)}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium shadow-sm transition"
          >
            Revoir les prix
          </button>

          <div className="flex flex-col items-end gap-2">
            <button
              onClick={() => handleUpdate(devisItem.id)}
              className="flex items-center text-blue-500 hover:text-blue-700 text-sm"
            >
              <FiEdit2 className="mr-1" /> Modifier
            </button>
            <button
              onClick={() => handleDelete(devisItem.id)}
              className="flex items-center text-red-500 hover:text-red-700 text-sm"
            >
              <FiTrash2 className="mr-1" /> Supprimer
            </button>
          </div>
        </div>
      </div>
    ));
  };

  const getNewDevisLabel = (key: CategoryKey): string => {
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
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">📋 Mes devis</h1>

      <div className="flex border-b border-gray-200 overflow-x-auto mb-8">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
              tab === t.key
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-blue-500'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {renderDevis(tab)}

        <div className="pt-6 text-center">
          {tab === 'sante' ? (
            <button
              onClick={() => navigate('/compare')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow"
            >
              Faire un nouveau devis santé
            </button>
          ) : (
            <button
              disabled
              className="bg-gray-300 text-white font-semibold py-3 px-6 rounded-lg cursor-not-allowed"
            >
              {getNewDevisLabel(tab)}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
