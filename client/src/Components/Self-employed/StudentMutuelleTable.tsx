import React from "react";

const mutuelles = [
  { partenaire: "Mutuelle Ociane Matmut", prixMoyen: "389€", prixMoinsCher: "373€" },
  { partenaire: "Lourmel", prixMoyen: "526€", prixMoinsCher: "450€" },
  { partenaire: "M comme Mutuelle", prixMoyen: "541€", prixMoinsCher: "620€" },
  { partenaire: "MGC", prixMoyen: "592€", prixMoinsCher: "476€" },
  { partenaire: "AcommeAssure", prixMoyen: "740€", prixMoinsCher: "689€" },
  { partenaire: "CCMO Mutuelle", prixMoyen: "741€", prixMoinsCher: "802€" },
  { partenaire: "UNIMSF", prixMoyen: "742€", prixMoinsCher: "678€" },
  { partenaire: "acoris", prixMoyen: "754€", prixMoinsCher: "740€" },
  { partenaire: "Identités Mutuelle", prixMoyen: "764€", prixMoinsCher: "492€" },
  { partenaire: "AESIO Mutuelle", prixMoyen: "772€", prixMoinsCher: "259€" },
];

const StudentMutuelleTable: React.FC = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto text-[#0f1f38]">
      <h2 className="text-2xl font-bold mb-4">
        Quelle est la meilleure mutuelle pour étudiants ?
      </h2>

      <h3 className="text-lg font-semibold mb-2 text-[#0f1f38]">
        Les mutuelles étudiantes pour petits budgets
      </h3>

      <p className="text-sm mb-6">
        Si vous disposez d’un budget réduit pour votre assurance santé, sachez
        qu’il existe des{" "}
        <a href="#" className="text-blue-600 underline">mutuelles pas chères</a>, 
        avec un minimum de garanties, dont voici les dix mutuelles partenaires
        les moins chères chez lesfurets
      </p>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-300">
          <thead className="bg-gray-100 text-sm text-left">
            <tr>
              <th className="px-4 py-2 border">Partenaire</th>
              <th className="px-4 py-2 border">Prix moyen en €/an</th>
              <th className="px-4 py-2 border">Prix moyen le moins cher chez lesfurets en €/an</th>
            </tr>
          </thead>
          <tbody>
            {mutuelles.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                <td className="px-4 py-2 border">{item.partenaire}</td>
                <td className="px-4 py-2 border">{item.prixMoyen}</td>
                <td className="px-4 py-2 border">{item.prixMoinsCher}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs italic text-gray-600 mt-4">
        Mis à jour le 01/05/2025 à 01:00:00
      </p>

      <div className="text-sm mt-6 space-y-2">
        <p>
          D'autres complémentaires santé sont très bien pour rembourser les lunettes :
          il s’agit des <a href="#" className="text-blue-600 underline">mutuelles 100% santé optique</a>,
          qui prennent en charge à 100% certaines montures et verres.
        </p>
        <p>
          Enfin, il est aussi possible de souscrire une Complémentaire santé solidaire (CSS),
          gratuite ou à moins de 1€ par jour. Cette mutuelle est une aide de l’État
          dispensée sur conditions de ressources.
        </p>
      </div>
    </div>
  );
};

export default StudentMutuelleTable;
