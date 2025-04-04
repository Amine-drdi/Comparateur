import { useState } from "react";
import { motion } from "framer-motion";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [authCode, setAuthCode] = useState("");
  const [message, setMessage] = useState("");

  const handleSendCode = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/send-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (res.ok) {
      setCodeSent(true);
      setMessage("Code envoyé à votre adresse e-mail.");
    } else {
      setMessage(data.message || "Une erreur s'est produite.");
    }
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/verify-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, code: authCode }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("Connexion réussie !");
      // redirection, stockage token, etc.
    } else {
      setMessage(data.message || "Code incorrect.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-4">Connexion</h2>
        {message && <p className="text-center text-sm text-gray-600 mb-4">{message}</p>}

        <form onSubmit={codeSent ? handleVerifyCode : handleSendCode} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {codeSent && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Code reçu</label>
              <input
                type="text"
                required
                value={authCode}
                onChange={(e) => setAuthCode(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
          >
            {codeSent ? "Valider le code" : "Recevoir un code"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
