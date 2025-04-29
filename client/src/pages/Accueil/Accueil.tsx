import React from "react";
import { Link } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';

import Happyman from "../../assets/Accueil/images/hero.png";
import img from "../../assets/Accueil/images/progres.png";
import man from "../../assets/Accueil/images/man.png";
import woman from "../../assets/Accueil/images/woman.png";

import InsuranceBrands from "../../Components/Accueil/InsuranceBrands";
import ComparateurMutuelle from "../../Components/Accueil/ComparateurMutuelle";
import EtapesEtComparatif from "../../Components/Accueil/EtapesEtComparatif";
import ComprendreMonDevis from "../../Components/Accueil/ComprendreMonDevis";
import FacteursPrixMutuelle from "../../Components/Accueil/FacteursPrixMutuelle";
import AvisEtDevis from "../../Components/Accueil/AvisEtDevis";
import MutuelleFAQSection from "../../Components/Accueil/MutuelleFAQSection";
import HealthInsuranceMenuWithNavbar from "../../Components/Accueil/InsuranceAndMutualHealth";

export default function Accueil() {
  return (
    <div>
      <section className="bg-[#f5f6ff] py-10 px-4 sm:px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Texte à gauche */}
        <div className="max-w-xl text-center md:text-left mb-10 md:mb-0">
          <p className="flex items-center justify-center md:justify-start text-sm uppercase text-blue-600">
            <FiSearch className="mr-2 h-5 w-5" /> Le comparateur d'assurances intelligent
          </p>
          <h2 className="mb-6 text-4xl font-extrabold text-blue-700 md:text-5xl lg:text-6xl">
            Économisez jusqu'à
            <span className="ml-2 inline-block bg-orange-500 px-4 py-1 text-white rounded-lg shadow-lg">
              36%
            </span>
          </h2>
          <p className="text-lg text-gray-700">
            Comparez en 2 minutes les offres de plus de 30 assureurs partenaires et trouvez la meilleure protection au prix idéal.
          </p>
          <p className="text-lg font-semibold text-gray-800 mb-4 mt-4">Vous êtes :</p>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center md:justify-start">
            <Link
              to="/DevisMutuelleForm"
              className="border border-blue-300 rounded-xl p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition"
            >
              <img src={woman} alt="Femme" className="w-24 h-auto" />
              <span className="text-gray-800 font-medium">Une femme</span>
            </Link>

            <Link
              to="/DevisMutuelleForm"
              className="border border-blue-300 rounded-xl p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition"
            >
              <img src={man} alt="Homme" className="w-24 h-auto" />
              <span className="text-gray-800 font-medium">Un homme</span>
            </Link>
          </div>
        </div>

        {/* Image / illustration */}
        <div className="relative w-full flex justify-center md:justify-end">
          <img
            src={Happyman}
            alt="comparateur mutuelle"
            className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto z-10 relative"
          />
          <div className="absolute top-0 left-0 bg-white border rounded-xl shadow-md p-2 text-sm text-gray-700 translate-x-4 translate-y-4">
            Score garanties/prix <br />
            <span className="text-black font-bold flex items-center gap-1">
              <img src={img} className="w-8 h-auto" /> 19.0/20
            </span>
          </div>
        </div>
      </section>

      <InsuranceBrands />
      {/*<HealthInsuranceMenuWithNavbar />*/}
      {/*<ComparateurMutuelle />*/}
      <EtapesEtComparatif />
      <ComprendreMonDevis />
      <FacteursPrixMutuelle />
      <AvisEtDevis />
      <MutuelleFAQSection />
    </div>
  );
}