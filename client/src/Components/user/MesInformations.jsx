import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile, updateUserProfile, deleteUserProfile } from '../../api/authApi';
import { useNavigate } from 'react-router-dom';

export default function MesInformations() {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleUpdate = async () => {
    try {
      await updateUserProfile(user._id, userInfo);
      setSuccessMessage("Informations mises à jour avec succès.");
    } catch (err) {
      console.error(err);
      setError("Une erreur est survenue lors de la mise à jour.");
    }
  };

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm("Es-tu sûre de vouloir supprimer ton compte ? Cette action est irréversible.");

    if (!confirmDelete) return;

    try {
      await deleteUserProfile(user._id);

      dispatch({ type: "LOGOUT" }); // adapte à ton reducer
      navigate('/');
    } catch (error) {
      console.error('Erreur suppression :', error);
      alert("Erreur lors de la suppression du compte.");
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
          {[
            { label: 'Prénom', name: 'prenom', type: 'text' },
            { label: 'Nom', name: 'nom', type: 'text' },
            { label: 'Adresse e-mail', name: 'email', type: 'email' },
            { label: 'Code postal ou ville', name: 'codePostal', type: 'text' },
            { label: 'Adresse', name: 'address', type: 'text' },
            { label: 'Téléphone', name: 'telephone', type: 'text' },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
              <input
                type={type}
                name={name}
                value={userInfo[name] || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          ))}

          <div className="pt-4 flex gap-4 flex-wrap">
            <button
              type="button"
              onClick={handleUpdate}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow"
            >
              Modifier
            </button>
            <button
              type="button"
              onClick={handleDeleteAccount}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl shadow"
            >
              Supprimer mon compte
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
