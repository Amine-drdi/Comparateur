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

    
  

    </section>
  );
};

export default AvisEtSujetsLiés;