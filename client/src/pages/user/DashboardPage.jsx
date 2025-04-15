import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfileFromToken, setUser } from '../../redux/authSlice';
import { getUserProfileToken } from '../../api/authApi';

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (token) {
      localStorage.setItem('token', token);
      dispatch(fetchUserProfileFromToken());

      getUserProfileToken(token)
        .then(user => dispatch(setUser(user))) 
        .catch(err => console.error("Erreur auth persistante :", err));

      navigate('/dashboard', { replace: true });
    } else {
      const storedToken = localStorage.getItem('token');
      if (!storedToken) {
        navigate('/login?error=unauthorized');
      } else {
        dispatch(fetchUserProfileFromToken());
      }
    }
  }, [location.search, dispatch, navigate]);

  // 🔐 Protection si non connecté
  if (!user) {
    return (
      <div className="pt-24 text-center text-red-600 text-xl font-semibold">
        Veuillez vous connecter pour accéder au tableau de bord.
      </div>
    );
  }

  return <div className="pt-20" />;
}
