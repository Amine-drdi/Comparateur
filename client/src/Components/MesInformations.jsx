import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserProfile } from '../api/authApi';

export default function MesInformations() {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data = await getUserProfile(user._id);
        setUserInfo(data);
      } catch (err) {
        console.error('Erreur lors du chargement du profil :', err);
        setError("Impossible de charger les informations utilisateur.");
      }
    };

    if (user && user._id) {
      fetchUserInfo();
    }
  }, [user]);

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  if (!userInfo) {
    return <p className="text-center mt-10 text-gray-500">Chargement des informations...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-6 px-6 py-10 bg-white rounded-3xl shadow-sm">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">Mes informations</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img src="./images/Profil_info.svg" alt="Illustration" className="h-auto max-h-[400px]" />
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Prénom</label>
              <input type="text" value={userInfo.prenom || ''} readOnly className="w-full px-4 py-2 border rounded-lg bg-gray-100" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Nom</label>
              <input type="text" value={userInfo.nom || ''} readOnly className="w-full px-4 py-2 border rounded-lg bg-gray-100" />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Adresse e-mail</label>
            <input type="email" value={userInfo.email || ''} readOnly className="w-full px-4 py-2 border rounded-lg bg-gray-100" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Code postal ou ville</label>
            <input type="text" value={userInfo.codePostal || ''} readOnly className="w-full px-4 py-2 border rounded-lg bg-gray-100" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Adresse</label>
            <input type="text" value={userInfo.address || ''} readOnly className="w-full px-4 py-2 border rounded-lg bg-gray-100" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Téléphone</label>
            <input type="text" value={userInfo.telephone || ''} readOnly className="w-full px-4 py-2 border rounded-lg bg-gray-100" />
          </div>

          <div className="pt-4">
            <button type="button" disabled className="bg-blue-400 text-white font-semibold px-6 py-3 rounded-xl shadow cursor-not-allowed">
              Enregistrer les modifications
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
