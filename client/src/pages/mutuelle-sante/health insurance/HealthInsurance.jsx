import React, { useState } from "react";
import InsuranceBrands from "../../../Components/mutuelle-sante/health insurance/InsuranceBrands";
import CustomerReviews from "../../../Components/mutuelle-sante/health insurance/CustomerReviews";
import HealthInsuranceCTA from "../../../Components/mutuelle-sante/health insurance/HealthInsuranceCTA"
import HealthInsuranceCTA2 from "../../../Components/mutuelle-sante/health insurance/HealthInsuranceCTA2"
import HealthInsuranceCTA3 from "../../../Components/mutuelle-sante/health insurance/HealthInsuranceCTA3"
import MutuelleComparator from "../../../Components/mutuelle-sante/health insurance/MutuelleComparator";
import MutuelleProfileSelector from "../../../Components/mutuelle-sante/health insurance/MutuelleProfileSelector";
import ComplémentaireSantéPage from "../../../Components/mutuelle-sante/health insurance/ComplémentaireSantéPage ";
import MutuelleQuestionsNumerated from "../../../Components/mutuelle-sante/health insurance/MutuelleQuestionsNumerated ";
import HealthComplement2025 from "../../../Components/mutuelle-sante/HealthSection/HealthComplement2025";
import HealthGuides from "../../../Components/mutuelle-sante/Guide/HealthGuides";
import HealthNewsComponent from "../../../Components/mutuelle-sante/HealthNews/HealthNewsComponent ";

const InsuranceComparison = () => {

    const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value) {
      window.location.href = event.target.value;
    }
  };
  return (
    <div>
    <div className="bg-blue-100 p-10 mt-20 flex flex-col md:flex-row items-center justify-between rounded-lg shadow-lg">
      <div className="md:w-2/3">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          Trouvez la mutuelle santé qui répond à vos besoins
        </h1>
        <ul className="text-blue-800 space-y-2 mb-4">
          <li className="flex items-center">
            <span className="mr-2">✨</span> Les offres de 35 mutuelles & assureurs santé comparées
          </li>
          <li className="flex items-center">
            <span className="mr-2">✨</span> Une économie moyenne de <span className="font-bold">416€/an</span> sans changer de garanties
          </li>
        </ul>
        <div className="flex flex-col md:flex-row gap-4">
          <select className="p-3 rounded-lg border border-gray-300 w-full md:w-auto" onChange={handleChange} value={selectedOption}>
            <option value="">Qui souhaitez-vous assurer ?</option>
            <option value="/compare">Vous</option>
            <option value="/compare">Vous et vos enfants</option>
            <option value="/compare">Vous et votre conjoint</option>
            <option value="/compare">Vous, votre conjoint et vos enfants</option>
          </select>
          <a href="/compare" className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow text-center">
            Comparer en 2 minutes
          </a>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <div className="flex text-yellow-400 text-xl">
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span className="text-gray-400">⭐</span>
          </div>
          <span className="ml-2 font-bold">4.1</span>
          <span className="ml-2">(9249 avis)</span>
        </div>
      </div>
      <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
        <img src="https://www.pngplay.com/wp-content/uploads/7/Nurse-Transparent-PNG.png" alt="Nurse Character" className="w-48 md:w-64" />
      </div>
      
    </div>
    <InsuranceBrands/>
    <MutuelleComparator/>
    <HealthInsuranceCTA3/>
    <MutuelleProfileSelector/>
    <ComplémentaireSantéPage/>
    <HealthInsuranceCTA/>
    <MutuelleQuestionsNumerated/>
    <CustomerReviews/>
    <HealthComplement2025/>
    <HealthGuides/>
    <HealthNewsComponent/>
    <HealthInsuranceCTA2/>
 

    </div>
  );
};

export default InsuranceComparison;


