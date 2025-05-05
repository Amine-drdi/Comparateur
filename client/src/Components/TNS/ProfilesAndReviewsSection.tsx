import React from "react";
import { FaStar } from "react-icons/fa";

const ProfilesAndReviewsSection = () => {
  const profils = [
    { label: "Les cas particuliers pour le profil de votre mutuelle santé", href: "#" },
    { label: "Mutuelle agriculteur : choisissez la meilleure couverture santé pour exploitants et salariés agricoles en 2025", href: "#" },
    { label: "Mutuelle chômeur : quelle est la meilleure mutuelle pour les demandeurs d'emploi en 2025 ?", href: "#" },
    { label: "Mutuelle étudiante : quelle mutuelle choisir en 2025 ?", href: "#" },
    { label: "Mutuelle fonctionnaire : comparez les offres de mutuelles pour fonctionnaires", href: "#" },
    { label: "Mutuelle maternité : quelle mutuelle pour future maman choisir en 2025 ?", href: "#" },
    { label: "Mutuelle profession libérale : trouvez la mutuelle qui répond à vos besoins", href: "#" },
    { label: "Mutuelle senior : quelle est la meilleure mutuelle pour retraités en 2025 ?", href: "#" },
    { label: "Quelle mutuelle pour les intérimaires ?", href: "#" },
    { label: "Quelle mutuelle santé choisir pour votre famille ?", href: "#" },
    { label: "Trouvez la meilleure mutuelle santé pour votre statut d’auto-entrepreneur", href: "#" },
  ];

  const avis = [
    {
      message: "A trouvé la meilleure offre correspondant à mes besoins en 2 mins",
      author: "Melodie D.",
      date: "19/10/2024",
    },
    {
      message: "Super 46 euros de gagnés en augmentant mes garanties. Soit 552 euros annuellement.",
      author: "Isabelle C.",
      date: "27/10/2024",
    },
    {
      message: "Les offres proposées sont diverses et adaptées à ma situation.",
      author: "Monique V.",
      date: "11/10/2024",
    },
  ];

  return (
    <div className="px-4 md:px-12 py-10 space-y-16 bg-gray-50">
      {/* Section Profils */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-6">
          Les différents profils en mutuelle santé : les sujets liés
        </h2>
        <ul className="list-disc list-inside space-y-2 text-blue-800 text-sm md:text-base">
          {profils.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="hover:underline hover:text-blue-600">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Section Avis Clients */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">
          Les avis de nos clients sur notre comparateur de mutuelles pas chères
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {avis.map((a, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-5 text-sm border"
            >
              <p className="mb-4 text-gray-800 italic">"{a.message}"</p>
              <div className="flex items-center gap-1 text-orange-400 mb-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>
              <p className="text-xs text-gray-600">
                {a.date} – <span className="font-semibold">{a.author}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilesAndReviewsSection;
