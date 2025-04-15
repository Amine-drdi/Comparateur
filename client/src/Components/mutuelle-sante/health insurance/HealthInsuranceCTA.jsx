import React from "react";

const HealthInsuranceCTA = () => {
  return (
    <div className="bg-blue-100 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between rounded-lg shadow-lg w-full">
      <div className="flex flex-col md:flex-row items-center md:space-x-4 w-full md:w-auto">
        <img 
          src="https://media.istockphoto.com/id/1473835464/fr/vectoriel/croix-blanche-cercle-vert-symbole-durgence-conception-m%C3%A9dicale-illustration-vectorielle.jpg?s=612x612&w=0&k=20&c=R-berQ9WJS46J11KQnKP80-9EXP7f2SGq7kUZtluFuc=" 
          alt="Health Icon" 
          className="w-16 h-16 mb-4 md:mb-0" 
        />
        <h2 className="text-xl md:text-2xl font-bold text-blue-900 text-center md:text-left md:ml-4">
        Comparez les mutuelles santé et trouvez l’offre qui vous correspond
        </h2>
      </div>
      <a
        href="/compare"
        className="mt-4 md:mt-0 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow text-center"
      >
        Comparer maintenant 
      </a>
    </div>
  );
};

export default HealthInsuranceCTA;
