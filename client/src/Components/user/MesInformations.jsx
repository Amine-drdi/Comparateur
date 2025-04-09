import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserProfile, updateUserProfile } from '../../api/authApi';

export default function MesInformations() {
  const [userInfo, setUserInfo] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      await updateUserProfile(user._id, userInfo);
      setSuccessMessage("Informations mises à jour avec succès.");
      setEditMode(false);
    } catch (err) {
      console.error(err);
      setError("Une erreur est survenue lors de la mise à jour.");
    }
  };

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  if (!userInfo) {
    return <p className="text-center mt-10 text-gray-500">Chargement des informations...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-6 px-6 py-10 bg-white rounded-3xl shadow-sm">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">Mes informations</h2>

      {successMessage && (
        <p className="text-green-600 text-center mb-4 font-medium">{successMessage}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img src="./images/Profil_info.svg" alt="Illustration" className="h-auto max-h-[400px]" />
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Prénom</label>
              <input
                type="text"
                name="prenom"
                value={userInfo.prenom || ''}
                onChange={handleChange}
                 
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Nom</label>
              <input
                type="text"
                name="nom"
                value={userInfo.nom || ''}
                onChange={handleChange}
                 
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Adresse e-mail</label>
            <input
              type="email"
              name="email"
              value={userInfo.email || ''}
              onChange={handleChange}
               
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Code postal ou ville</label>
            <input
              type="text"
              name="codePostal"
              value={userInfo.codePostal || ''}
              onChange={handleChange}
               
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Adresse</label>
            <input
              type="text"
              name="address"
              value={userInfo.address || ''}
              onChange={handleChange}
               
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Téléphone</label>
            <input
              type="text"
              name="telephone"
              value={userInfo.telephone || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div className="pt-4 flex gap-4">
            {!editMode ? (
              <button
                type="button"
                onClick={() => setEditMode(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow"
              >
                Modifier
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={handleSave}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow"
                >
                  Enregistrer
                </button>
                <button
                  type="button"
                  onClick={() => setEditMode(false)}
                  className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-6 py-3 rounded-xl shadow"
                >
                  Annuler
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
