import React from "react";

const data = [
  {
    mutuelle: "Smatis",
    sante100: "OUI",
    consultation: "110 à 130%",
    frais: "Frais réels",
    implants: "NON",
    lunettes: "110€",
    aides: "100€ + 150€",
    prix: "79€",
  },
  {
    mutuelle: "A comme Assure",
    sante100: "OUI",
    consultation: "100 à 120%",
    frais: "100% Frais réels",
    implants: "120%",
    lunettes: "150€",
    aides: "100€ + 50€",
    prix: "81€",
  },
  {
    mutuelle: "Direct Assurance",
    sante100: "OUI",
    consultation: "100 à 120%",
    frais: "100%",
    implants: "NON",
    lunettes: "100€",
    aides: "500€ pendant 4 ans",
    prix: "86€",
  },
  {
    mutuelle: "Lamie Mutuelle",
    sante100: "OUI",
    consultation: "150%",
    frais: "100%",
    implants: "200€ par implant, max 2 par an",
    lunettes: "60% + 150€",
    aides: "100€ + 300€",
    prix: "86€",
  },
  {
    mutuelle: "Ociane Matmut",
    sante100: "OUI",
    consultation: "105 à 125%",
    frais: "100%",
    implants: "300 à 400€ par an",
    lunettes: "125€",
    aides: "1500€ par oreille et pendant 4 ans",
    prix: "88€",
  },
];

export default function TableauPrixMutuelleSenior() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 text-gray-800">
      <h2 className="text-2xl font-bold text-teal-700 mb-4">
  Quel est le prix d’une mutuelle senior ?
</h2>
      <p className="mb-6 leading-relaxed">
        Pour vous donner une idée des garanties auxquelles vous pouvez prétendre en fonction du prix de votre mutuelle,
        nous avons établi pour vous un comparatif des 5 premiers résultats de notre page de comparaison pour un profil senior :
      </p>

      <div className="overflow-auto rounded-md border border-gray-200">
        <table className="min-w-[900px] w-full text-sm text-left text-gray-700">
          <thead className="bg-blue-100 text-gray-900">
            <tr>
              <th className="px-4 py-3 font-medium border-r border-gray-200">Mutuelle</th>
              <th className="px-4 py-3 font-medium border-r border-gray-200">100% santé</th>
              <th className="px-4 py-3 font-medium border-r border-gray-200">Consultation généraliste</th>
              <th className="px-4 py-3 font-medium border-r border-gray-200">Frais de séjour hospitalisation</th>
              <th className="px-4 py-3 font-medium border-r border-gray-200">Implants dentaires</th>
              <th className="px-4 py-3 font-medium border-r border-gray-200">Lunettes</th>
              <th className="px-4 py-3 font-medium border-r border-gray-200">Aides auditives</th>
              <th className="px-4 py-3 font-medium">Prix/mois</th>
            </tr>
          </thead>
          <tbody>
            {data.map((mutuelle, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
              >
                <td className="px-4 py-3 border-r border-gray-100 font-semibold">{mutuelle.mutuelle}</td>
                <td className="px-4 py-3 border-r border-gray-100">{mutuelle.sante100}</td>
                <td className="px-4 py-3 border-r border-gray-100">{mutuelle.consultation}</td>
                <td className="px-4 py-3 border-r border-gray-100">{mutuelle.frais}</td>
                <td className="px-4 py-3 border-r border-gray-100">{mutuelle.implants}</td>
                <td className="px-4 py-3 border-r border-gray-100">{mutuelle.lunettes}</td>
                <td className="px-4 py-3 border-r border-gray-100">{mutuelle.aides}</td>
                <td className="px-4 py-3 font-bold text-blue-600">{mutuelle.prix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
