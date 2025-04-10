import React, { useState } from "react";

const FilterHeader = () => {
  const [levels, setLevels] = useState({
    "Soins courants": "Fort",
    "Hospitalisation": "Moyen",
    "Dentaire": "Moyen",
    "Optique": "Fort",
  });

  const handleLevelChange = (label, newLevel) => {
    setLevels((prev) => ({
      ...prev,
      [label]: newLevel,
    }));
  };

  return (
    <div className="bg-gray-50 p-6 mb-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        Sirine, voici les meilleures offres pour votre assurance santé ✨
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Classées par prix croissants et affichées de façon impartiale.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {Object.keys(levels).map((label) => (
          <div key={label}>
            <p className="text-sm font-semibold text-gray-700 mb-2">{label}</p>
            <div className="grid grid-cols-4 gap-2 bg-gray-100 p-1 rounded-xl text-sm text-center">
              {["Mini", "Moyen", "Fort", "Maxi"].map((level) => (
                <button
                  key={level}
                  onClick={() => handleLevelChange(label, level)}
                  className={`py-1 rounded-lg font-medium transition-all ${
                    level === levels[label]
                      ? "bg-blue-600 text-white shadow"
                      : "text-gray-600 hover:bg-blue-100"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterHeader;
