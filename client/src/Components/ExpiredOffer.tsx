import React, { useState } from "react";

type ExpiredOfferProps = {
  companyLogo: string;
  formulaName: string;
  price: number;
  benefits: {
    soinsCourants: number;
    hospitalisation: number;
    dentaire: number;
    optique: number;
  };
  expiredMessage?: string;
  companyDescription?: string[];
  estimatedAnnual?: number;
};

const ExpiredOffer: React.FC<ExpiredOfferProps> = ({
  companyLogo,
  formulaName,
  price,
  benefits,
  expiredMessage = "Offre expirée",
  companyDescription = [],
  estimatedAnnual,
}) => {
  const [showMore, setShowMore] = useState(false);

  const renderBars = (level: number) => (
    <div className="flex justify-center gap-1 mt-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`w-2.5 h-5 rounded-full transition-all ${
            i < level ? "bg-blue-600" : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 w-full max-w-4xl mx-auto mb-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-4">
          <img src={companyLogo} alt="Logo" className="w-16 h-16 object-contain" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{formulaName}</h2>
            <p className="text-sm text-red-600 bg-red-100 px-2 py-1 rounded mt-1 inline-block">
              {expiredMessage}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-indigo-700">{price.toFixed(2)} €</p>
          <p className="text-sm text-gray-500">/ mois</p>
          {estimatedAnnual && (
            <p className="text-xs text-gray-400 mt-1">
              ≈ {estimatedAnnual} € / an
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 text-center">
        <div>
          <p className="text-gray-600 text-sm font-medium">Soins</p>
          {renderBars(benefits.soinsCourants)}
        </div>
        <div>
          <p className="text-gray-600 text-sm font-medium">Hospitalisation</p>
          {renderBars(benefits.hospitalisation)}
        </div>
        <div>
          <p className="text-gray-600 text-sm font-medium">Dentaire</p>
          {renderBars(benefits.dentaire)}
        </div>
        <div>
          <p className="text-gray-600 text-sm font-medium">Optique</p>
          {renderBars(benefits.optique)}
        </div>
      </div>

      {showMore && (
        <div className="mt-6 border-t pt-4 text-sm text-gray-700 space-y-2">
          <h3 className="font-semibold text-gray-800 mb-1">À propos de cette mutuelle :</h3>
          <ul className="list-disc list-inside space-y-1">
            {companyDescription.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6 text-center">
        <button
          className="text-blue-600 underline text-sm"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? "Moins de détails ▲" : "Voir plus de détails ▼"}
        </button>
      </div>
    </div>
  );
};

export default ExpiredOffer;
