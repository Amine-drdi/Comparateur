import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { verifyCode } from "../api/authApi";  
import { useAuth } from "../context/AuthContext";


export default function VerifyCodePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const { login } = useAuth();
  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await verifyCode(email, code);
      login(response.token); // Connexion réussie, stockage du token
      setMessage("✅ Authentifié !");
      
      navigate("/dashboard"); // ou autre page protégée
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    }
  };
  return (
    <div className="min-h-screen my-10 bg-gray-50 flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Vérification du code
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Saisissez le code reçu par e-mail pour continuer.
        </p>

        <form className="space-y-4" onSubmit={handleVerify}>
          <div>
            <label htmlFor="code" className="block text-sm font-medium text-gray-700">
              Code de vérification
            </label>
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Vérifier
          </button>
        </form>

        {message && (
          <p className="mt-4 text-sm text-center text-gray-600">
            {message}
          </p>
        )}
      </motion.div>
    </div>
  );
}
