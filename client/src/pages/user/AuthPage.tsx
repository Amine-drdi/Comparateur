import { useState, useEffect, FormEvent } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaEnvelope } from "react-icons/fa";
import { sendCode } from "../../api/authApi";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/Accueil/images/mutuelle2.png";

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const errorParam = queryParams.get("error");

    if (errorParam === "email_inexistant") {
      setMessage("❌ Utilisateur non trouvé, veuillez vous inscrire");
    }
  }, [location]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await sendCode(email); // appel API
      navigate('/verify-code', { state: { email } }); // transmettre l'email
    } catch (err) {
      if (err instanceof Error) {
        setMessage(`❌ ${err.message}`);
      } else {
        setMessage("❌ Une erreur inconnue est survenue");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 pt-20 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="flex flex-col items-center">
            <img src={logo} alt="logo" className="w-16 h-16" />
            <span className="text-xl font-bold mt-2">
              <span className="text-orange-600">Devis</span>{" "}
              <span className="text-blue-600">mutuelle</span>
            </span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Bienvenue
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Connectez-vous pour accéder à votre espace personnel.
        </p>

        {/* Email login */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Adresse e-mail
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="votre@email.com"
                className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
          >
            Se connecter
          </button>
        </form>

        {/* Affichage du message de réponse */}
        {message && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-4 p-3 rounded-lg ${
              message.includes("❌") ? "bg-red-50 text-red-800" : "bg-green-50 text-green-800"
            }`}
          >
            <p className="text-sm text-center">{message}</p>
          </motion.div>
        )}

        {/* OR separator */}
        <div className="flex items-center my-8">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-4 text-sm text-gray-500 font-medium">ou</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Social login */}
        <div className="space-y-3">
          <a
            href="http://localhost:5000/auth/google"
            className="flex items-center justify-center w-full px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition shadow-sm"
          >
            <FaGoogle className="mr-3 text-red-500" />
            <span className="font-medium">Continuer avec Google</span>
          </a>
        </div>

        {/* Register link */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Pas encore de compte ?{" "}
          <a 
            href="/register" 
            className="font-semibold text-blue-600 hover:text-blue-800"
          >
            S'inscrire
          </a>
        </p>
      </motion.div>

      {/* Footer text */}
      <p className="mt-8 text-center text-xs text-gray-500">
        En vous connectant, vous acceptez nos{" "}
        <a href="/conditions" className="underline">
          Conditions d'utilisation
        </a>{" "}
        et notre{" "}
        <a href="/confidentialite" className="underline">
          Politique de confidentialité
        </a>
      </p>
    </div>
  );
};

export default AuthPage;
