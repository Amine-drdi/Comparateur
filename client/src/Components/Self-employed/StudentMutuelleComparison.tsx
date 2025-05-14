import React from "react";

const mutuelles = [
  {
    nom: "Identités mutuelle",
    prix: "20€",
    sante100: "NON",
    consultation: "100%",
    sejour: "100%",
    orthodontie: "NC",
    lunettes: "110€",
  },
  {
    nom: "Ociane Matmut",
    prix: "22€",
    sante100: "OUI",
    consultation: "100%",
    sejour: "100%",
    orthodontie: "100€",
    lunettes: "0,15€",
  },
  {
    nom: "Mutuelle MGC",
    prix: "22€",
    sante100: "NON",
    consultation: "100%",
    sejour: "100%",
    orthodontie: "200€",
    lunettes: "100€",
  },
  {
    nom: "M comme Mutuelle",
    prix: "26€",
    sante100: "NON",
    consultation: "100 à 250%",
    sejour: "100%",
    orthodontie: "NC",
    lunettes: "100€",
  },
  {
    nom: "UNISF",
    prix: "27€",
    sante100: "OUI",
    consultation: "100%",
    sejour: "100%",
    orthodontie: "100€",
    lunettes: "170€",
  },
];

const StudentMutuelleComparison: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10 text-[#0f1f38]">
      <h2 className="text-xl font-bold mb-4">
        Comparatif des mutuelles pour les étudiants
      </h2>

      <p className="text-sm mb-6">
        Le comparateur en ligne lesfurets.com vous accompagne dans votre démarche de comparaison gratuitement
        pour vous permettre de trouver une mutuelle qui répond à vos besoins de santé. L’objectif est de trouver
        la mutuelle étudiante qui est faite pour vous parmi les partenaires proposés par lesfurets.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Mutuelle</th>
              <th className="px-4 py-2 border">Prix/mois</th>
              <th className="px-4 py-2 border">100% santé</th>
              <th className="px-4 py-2 border">Consultation</th>
              <th className="px-4 py-2 border">Frais de séjour hospi</th>
              <th className="px-4 py-2 border">Orthodontie</th>
              <th className="px-4 py-2 border">Lunettes</th>
            </tr>
          </thead>
          <tbody>
            {mutuelles.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                <td className="px-4 py-2 border">{item.nom}</td>
                <td className="px-4 py-2 border">{item.prix}</td>
                <td className="px-4 py-2 border">{item.sante100}</td>
                <td className="px-4 py-2 border">{item.consultation}</td>
                <td className="px-4 py-2 border">{item.sejour}</td>
                <td className="px-4 py-2 border">{item.orthodontie}</td>
                <td className="px-4 py-2 border">{item.lunettes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs italic text-gray-500 mt-4">
        Ce comparatif a été réalisé à partir des 5 premiers résultats d’une comparaison de mutuelles santé effectuée
        sur lesfurets le 11/04/2025. Le profil utilisé est celui d’un homme né en 2002, étudiant et habitant à Lyon.
        Il demande un remboursement minimal dans tous les postes de soins. Les données présentes dans ce tableau
        sont données à titre indicatif et ne sauraient constituer une obligation de la part des assureurs.
      </p>

      <div className="bg-blue-50 mt-8 p-4 border-l-4 border-blue-500 flex gap-4">
        <img
          src="/src/assets/student/images/insuranceStudent.png"
          alt="Bon à savoir"
          className="w-16 h-16 object-contain"
        />
        <div className="text-sm space-y-2">
          <p>
            <span className="font-semibold text-blue-700">La Sécurité sociale vous rembourse uniquement une partie de vos dépenses de santé !</span>{" "}
            Par exemple, une consultation chez votre médecin traitant, s’il est conventionné secteur 1, sera remboursée 16€ alors qu’elle coûte 26€.
            Si vous ne voulez pas payer le reste de votre poche, la mutuelle peut s’en charger !
          </p>
          <p>
            <span className="font-semibold text-blue-700">Tout ne sera pas non plus pris en charge dans les soins non couverts par l’Assurance Maladie</span>, 
            comme les médecines douces ou la psychologie par exemple. Votre mutuelle peut prendre en charge plusieurs séances par an,
            de façon à ce que vous ne payiez rien (ou presque rien).
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudentMutuelleComparison 