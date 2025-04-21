import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/authSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState, FormEvent } from 'react';
import type { RootState, AppDispatch } from '../../redux/store';

export default function VerifyCode() {
  const [code, setCode] = useState('');
  const dispatch = useDispatch<AppDispatch>(); // ✅ Dispatch typé
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;
  const { user, loading, error } = useSelector((state: RootState) => state.auth); // ✅ Selector typé
  const token = useSelector((state: any) => state.auth.token);

  /*const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && code) {
      dispatch(loginUser({ email, code }));
    }
  };*/
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && code) {
      // Add this for debugging
      console.log('Submitting code verification with:', { email, code });
      
      const result = await dispatch(loginUser({ email, code }));
      
      // Add this to check what's returned from the thunk
      console.log('Login result:', result);
      
      // Check if the login was rejected
      if (loginUser.rejected.match(result)) {
        console.error('Login rejected:', result.payload);
      }
    }
  };

  /*useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);
*/
useEffect(() => {
  if (user && token) { // Check for both user and token
    navigate('/dashboard');
  }
}, [user, token, navigate]);
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
