import React from 'react';
import { FiSearch, FiClock, FiUsers, FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col-reverse items-center justify-between lg:flex-row">
        {/* Texte de gauche */}
        <div className="lg:w-1/2">
          <p className="flex items-center text-sm uppercase text-blue-600">
            <FiSearch className="mr-2 h-5 w-5" /> Le comparateur d'assurances intelligent
          </p>
          <h2 className="mb-6 text-4xl font-extrabold text-blue-700 md:text-5xl lg:text-6xl">
            Économisez jusqu'à
            <span className="ml-2 inline-block bg-green-500 px-4 py-1 text-white rounded-lg shadow-lg">
              40%
            </span>
          </h2>
          <p className="text-lg text-gray-700">
            Comparez en 2 minutes les offres de plus de 30 assureurs partenaires et trouvez la meilleure protection au prix idéal.
          </p>
          <div className="mt-8 flex space-x-4">
            <a
              href="/"
              className="px-6 py-3 text-white bg-blue-700 rounded-lg shadow-lg hover:bg-blue-800 transition"
            >
              Comparer maintenant
            </a>
            <a
              href="/"
              className="flex items-center text-blue-600 hover:text-blue-900 transition"
            >
              Comment ça marche ?
              <FiClock className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Partie droite améliorée */}
        <div className="relative flex items-center justify-center lg:w-1/2">
          <motion.div
            className="grid grid-cols-2 gap-6 w-96 p-6 bg-white rounded-3xl shadow-xl transform hover:scale-105 transition"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center p-6 rounded-xl bg-blue-200">
              <FiUsers className="text-blue-700 text-4xl" />
              <p className="text-2xl font-bold text-blue-800">30+</p>
              <p className="text-sm text-blue-900">Assureurs</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-blue-300">
              <FiClock className="text-blue-800 text-4xl" />
              <p className="text-2xl font-bold text-blue-900">2 min</p>
              <p className="text-sm text-blue-900">Pour comparer</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-green-400">
              <FiStar className="text-white text-4xl" />
              <p className="text-2xl font-bold text-white">4.9/5</p>
              <p className="text-sm text-white">Satisfaction</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-blue-500">
              <FiSearch className="text-white text-4xl" />
              <p className="text-2xl font-bold text-white">327€</p>
              <p className="text-sm text-white">Économie moyenne</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
