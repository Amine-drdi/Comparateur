import { motion } from "framer-motion";
import { FaGoogle, FaFacebook } from "react-icons/fa";

export default function AuthPage() {
  return (
    <div className="min-h-screen my-10 bg-gray-50 flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Bienvenue sur MonCompare
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Connectez-vous pour accéder à votre espace personnel.
        </p>

        {/* Email login */}
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Adresse e-mail
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

      

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Se connecter
          </button>
        </form>

        {/* OR separator */}
        <div className="flex items-center my-10">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-2 text-sm text-gray-500">ou</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Social login */}
        <div className="space-y-3">
          <a
            href="http://localhost:5000/auth/google"
            className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition"
          >
            <FaGoogle className="mr-2 text-red-500" />
            Continuer avec Google
          </a>
     
        </div>

     
      </motion.div>
    </div>
  );
}
