import React from "react";

const data = [
  { partenaire: "lamutuelle", prixMoyen: "985€", prixMoinsCher: "941€" },
  { partenaire: "Lourmel", prixMoyen: "1109€", prixMoinsCher: "952€" },
  { partenaire: "Smatis", prixMoyen: "1123€", prixMoinsCher: "994€" },
  { partenaire: "Direct Assurance", prixMoyen: "1242€", prixMoinsCher: "1056€" },
  { partenaire: "Mgen", prixMoyen: "1346€", prixMoinsCher: "914€" },
  { partenaire: "Julia mutuelle", prixMoyen: "1501€", prixMoinsCher: "1242€" },
  { partenaire: "Cocoon", prixMoyen: "1604€", prixMoinsCher: "1256€" },
  { partenaire: "Avenir Mutuelle", prixMoyen: "1642€", prixMoinsCher: "1503€" },
  { partenaire: "AcommeAssure", prixMoyen: "1666€", prixMoinsCher: "1311€" },
  { partenaire: "UniPH", prixMoyen: "1732€", prixMoinsCher: "1361€" },
];

const ComparatifMutuelleFonctionnaire: React.FC = () => {
  return (
    <section className="px-6 py-10 max-w-6xl mx-auto text-[#1c1c1c]">
      <h2 className="text-2xl md:text-3xl font-bold text-[#004c97] mb-6">
        Comparatif des mutuelles pour fonctionnaires : laquelle choisir en 2025 ?
      </h2>

      <p className="mb-4">
        Si vous ne bénéficiez pas encore de la prise en charge à 50 % par l'État, il peut être intéressant de comparer les offres afin de choisir la 
        <span className="font-semibold"> mutuelle santé la mieux adaptée</span> à vos besoins.
        Commencez par définir les garanties prioritaires selon votre profil, puis sélectionnez l’offre la plus avantageuse en fonction du prix et du niveau de couverture.
      </p>

      <p className="mb-6">
        Le comparateur <span className="font-semibold">Devis Mutuelle</span> vous aide à y voir clair en référençant les 10 mutuelles les plus accessibles pour les agents publics. 
        Voici un aperçu des prix moyens comparés à ceux trouvés sur <span className="font-semibold">Devis Mutuelle</span> :
      </p>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-[#e7f1fa] text-left text-gray-700 text-sm font-semibold">
              <th className="px-4 py-3 border-b">Partenaire</th>
              <th className="px-4 py-3 border-b">Prix moyen en €/an</th>
              <th className="px-4 py-3 border-b">Prix moyen le moins cher chez Devis Mutuelle en €/an</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {data.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="px-4 py-3 border-b">{row.partenaire}</td>
                <td className="px-4 py-3 border-b">{row.prixMoyen}</td>
                <td className="px-4 py-3 border-b">{row.prixMoinsCher}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparatifMutuelleFonctionnaire;
