import { useEffect, useState, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile, updateUserProfile, deleteUserProfile } from '../../api/authApi';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/store';

interface UserInfo {
  prenom: string;
  nom: string;
  email: string;
  codePostal?: string;
  address?: string;
  telephone?: string;
  [key: string]: string | undefined;
}

export default function MesInformations() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (!user) return; // 🛑 user est null, on arrête

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => prev ? { ...prev, [name]: value } : prev);
  };

  const handleUpdate = async () => {
    if (!user || !userInfo) return; // ✅ sécurise les deux
  
    try {
      await updateUserProfile(user._id, userInfo);
      setSuccessMessage("Informations mises à jour avec succès.");
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Une erreur est survenue lors de la mise à jour.");
      setSuccessMessage(null);
    }
  };

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm("Es-tu sûr de vouloir supprimer ton compte ? Cette action est irréversible.");
    if (!confirmDelete || !user) return; // ✅ sécurise user
  
    try {
      await deleteUserProfile(user._id);
      dispatch({ type: "LOGOUT" });
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
          <img src="./images/about.jpg" alt="" className="h-auto max-h-[400px]" />
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
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <div className="pt-4 flex gap-4 flex-wrap">
            <button
              type="button"
              onClick={handleUpdate}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow transition"
            >
              Modifier
            </button>
            <button
              type="button"
              onClick={handleDeleteAccount}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl shadow transition"
            >
              Supprimer mon compte
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
