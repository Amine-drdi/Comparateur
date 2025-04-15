import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/authSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function VerifyCode() {
  const [code, setCode] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;
  const { user, loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, code }));
  };

  useEffect(() => {
    if (user) {
      navigate('/dashboard'); // redirige une fois connecté
    }
  }, [user, navigate]);

  return (
    <div className="p-6 max-w-md mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-4">Vérification du code</h2>
      <p className="mb-4">Un code a été envoyé à {email}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Code à 6 chiffres"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {loading ? "Connexion..." : "Vérifier le code"}
        </button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>
    </div>
  );
}
