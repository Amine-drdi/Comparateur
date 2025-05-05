import React from "react";

const sujets = [
  {
    titre: "Les cas particuliers pour le profil de votre mutuelle santé",
    lien: "/mutuelle/profil-particulier",
  },
  {
    titre: "Mutuelle agriculteur : choisissez la meilleure couverture santé pour exploitants et salariés agricoles en 2025",
    lien: "/mutuelle/agriculteur-2025",
  },
  {
    titre: "Mutuelle étudiante : quelle mutuelle choisir en 2025 ?",
    lien: "/mutuelle/etudiant-2025",
  },
  {
    titre: "Mutuelle fonctionnaire : comparez les offres de mutuelles pour fonctionnaires",
    lien: "/mutuelle/fonctionnaire",
  },
  {
    titre: "Mutuelle maternité : quelle mutuelle pour future maman choisir en 2025 ?",
    lien: "/mutuelle/maternite-2025",
  },
  {
    titre: "Mutuelle profession libérale : trouver la mutuelle qui répond à vos besoins",
    lien: "/mutuelle/profession-liberale",
  },
  {
    titre: "Mutuelle senior : bien choisir sa mutuelle en prenant de l’âge",
    lien: "/mutuelle/senior",
  },
  {
    titre: "Mutuelle TNS : comparez les mutuelles pour travailler non salarié en 2025",
    lien: "/mutuelle/tns-2025",
  },
  {
    titre: "Quelle mutuelle pour les infirmiers ?",
    lien: "/mutuelle/infirmiers",
  },
  {
    titre: "Quelle mutuelle santé choisir pour votre famille ?",
    lien: "/mutuelle/famille",
  },
  {
    titre: "Trouvez la mutuelle santé pour votre statut d’auto-entrepreneur",
    lien: "/mutuelle/auto-entrepreneur",
  },
];

const avis = [
  {
    texte: "J’ai trouvé la meilleure offre correspondant à mes besoins en 2 mins !",
    date: "19/10/2024",
    auteur: "Mélodie D.",
    note: 5,
  },
  {
    texte: "Super 46 euros de gagné en augmentant mes garanties. Soit 552 euros annuellement.",
    date: "27/09/2024",
    auteur: "Isabelle C.",
    note: 5,
  },
  {
    texte: "Les offres proposées sont diverses et adaptées à ma situation.",
    date: "11/10/2024",
    auteur: "Monique V.",
    note: 5,
  },
];

const AvisEtSujetsLiés: React.FC = () => {
  return (
    <section className="bg-white px-6 py-12 max-w-7xl mx-auto text-[#1c1c1c]">
      {/* Sujets liés */}
      <h2 className="text-xl md:text-2xl font-bold text-[#004c97] mb-4">
        Les différents profils en mutuelle santé : les sujets liés
      </h2>
      <ul className="list-disc list-inside text-blue-600 space-y-1 mb-12">
        {sujets.map((sujet, idx) => (
          <li key={idx}>
            <a href={sujet.lien} className="hover:underline">
              {sujet.titre}
            </a>
          </li>
        ))}
      </ul>

      {/* Avis clients */}
      <h2 className="text-xl md:text-2xl font-bold text-[#004c97] mb-8">
        Les avis de nos clients sur notre comparateur de mutuelles pas chères
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {avis.map((avisItem, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
          >
            <p className="text-sm mb-4">“{avisItem.texte}”</p>
            <div className="text-sm text-gray-600 mb-2">
              {avisItem.date} -{" "}
              <span className="font-medium">{avisItem.auteur}</span>
            </div>
            <div className="flex space-x-1">
              {Array.from({ length: avisItem.note }).map((_, starIdx) => (
                <span key={starIdx} className="text-orange-400 text-sm">
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Note globale */}
      <div className="text-center text-sm text-gray-700 mb-4">
        À partir des 9295 avis de nos clients, nous obtenons la note de{" "}
        <span className="font-semibold text-black">4,1 sur 5</span> sur la plateforme
        <div className="mt-2">
      
        </div>
      </div>

      <div className="text-center">
        <a
          href="#"
          className="text-red-500 font-medium hover:underline"
        >
          Voir plus d’avis clients →
        </a>
      </div>
    </section>
  );
};

export default AvisEtSujetsLiés;
