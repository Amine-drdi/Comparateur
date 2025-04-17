import React from "react";
import { Link } from 'react-router-dom';

import { FaMale, FaFemale } from "react-icons/fa";
import HappyWoman from "../../assets/Accueil/images/happy-woman.png"
import man from "../../assets/Accueil/images/man.png"
import woman from "../../assets/Accueil/images/woman.png"
import InsuranceBrands from "../../Components/Accueil/InsuranceBrands";
import ComparateurMutuelle from "../../Components/Accueil/ComparateurMutuelle";
import EtapesEtComparatif from "../../Components/Accueil/EtapesEtComparatif"
export default function Accueil() {
  return (
    <div>
    <section className="bg-[#f5f6ff] py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
      {/* Texte à gauche */}
      <div className="max-w-xl mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Mutuelle santé :<br />
          <span className="text-black"> comparez et économisez avec le n°1</span>  du devis gratuit.
        </h1>
        
        <p className="text-lg text-gray-700 mb-4">
        Économisez jusqu’à 36 % sur votre complémentaire santé grâce
         à notre comparateur d’assurance.
        </p>
        <p className="text-lg font-semibold text-gray-800 mb-4">Vous êtes :</p>


    <div className="flex gap-6">
      <Link
        to="/DevisMutuelleForm"
        className="border border-blue-200 rounded-xl p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition"
      >
        <img src={woman} alt="Femme" className="w-20 h-auto" />
        <span className="text-gray-800 font-medium">Une femme</span>
      </Link>

      <Link
        to="/DevisMutuelleForm"
        className="border border-blue-200 rounded-xl p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition"
      >
        <img src={man} alt="Homme" className="w-20 h-auto" />
        <span className="text-gray-800 font-medium">Un homme</span>
      </Link>
    </div>
 

      </div>

      {/* Image / illustration */}
      <div className="relative">
      <img
  src={HappyWoman} // remplace ceci par le bon chemin
  alt="Femme heureuse"
  className="w-[400px] md:w-[500px] h-auto z-10 relative"
/>
        <div className="absolute top-0 left-0 bg-white border rounded-xl shadow-md p-2 text-sm text-gray-700">
          Score garanties/prix <br />
          <span className="text-black font-bold">19.0/20</span>
        </div>
      </div>
    </section>
    <InsuranceBrands/>
    <ComparateurMutuelle/>
    <EtapesEtComparatif/>
    </div>
  );
}
