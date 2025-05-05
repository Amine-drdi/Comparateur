import React from "react";

const data = [
  {
    mutuelle: "Julia",
    sante100: "OUI",
    consultation: "100 à 130%",
    hospitalisation: "Frais réels",
    implants: "NON",
    lunettes: "110€",
    prixMois: "41€",
  },
  {
    mutuelle: "Direct Assurance",
    sante100: "OUI",
    consultation: "100 à 120%",
    hospitalisation: "120%",
    implants: "NON",
    lunettes: "100€",
    prixMois: "41€",
  },
  {
    mutuelle: "A comme Assure",
    sante100: "OUI",
    consultation: "100 à 120%",
    hospitalisation: "100% Frais réels",
    implants: "120%",
    lunettes: "100€",
    prixMois: "46€",
  },
  {
    mutuelle: "Lourmel",
    sante100: "OUI",
    consultation: "100 à 125%",
    hospitalisation: "Frais réels",
    implants: "NON",
    lunettes: "100% + 125€",
    prixMois: "51€",
  },
  {
    mutuelle: "Selfassurance",
    sante100: "OUI",
    consultation: "100 à 125%",
    hospitalisation: "Frais réels",
    implants: "NON",
    lunettes: "125€",
    prixMois: "52€",
  },
];

const TableauMutuellePrix: React.FC = () => {
  return (
    <section className="px-6 py-10 max-w-7xl mx-auto text-[#1c1c1c]">
      <h2 className="text-2xl md:text-3xl font-bold text-[#004c97] mb-4">
        Quel est le prix de votre mutuelle fonctionnaire ?
      </h2>
      <p className="mb-6">
        Souscrire une mutuelle santé pour fonctionnaire vous permet de bénéficier de remboursements sur vos frais médicaux 
        lorsque vous en avez besoin. Grâce au comparateur <span className="font-semibold">Devis Mutuelle</span>, 
        vous pouvez visualiser les offres selon vos garanties et votre budget mensuel.
      </p>

      <div className="overflow-x-auto border border-gray-200 rounded-md">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-[#e7f1fa] text-gray-700 font-semibold">
            <tr>
              <th className="px-4 py-3 whitespace-nowrap">Mutuelle</th>
              <th className="px-4 py-3 whitespace-nowrap">100% santé</th>
              <th className="px-4 py-3 whitespace-nowrap">Consultation généraliste</th>
              <th className="px-4 py-3 whitespace-nowrap">Frais de séjour hospitalisation</th>
              <th className="px-4 py-3 whitespace-nowrap">Implants dentaires</th>
              <th className="px-4 py-3 whitespace-nowrap">Lunettes (monture + verres simples)</th>
              <th className="px-4 py-3 whitespace-nowrap">Prix /mois</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {data.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-3 font-medium">{row.mutuelle}</td>
                <td className="px-4 py-3">{row.sante100}</td>
                <td className="px-4 py-3">{row.consultation}</td>
                <td className="px-4 py-3">{row.hospitalisation}</td>
                <td className="px-4 py-3">{row.implants}</td>
                <td className="px-4 py-3">{row.lunettes}</td>
                <td className="px-4 py-3 font-semibold">{row.prixMois}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableauMutuellePrix;
