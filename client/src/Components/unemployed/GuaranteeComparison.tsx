import React from "react";

export default function GuaranteeComparison() {
  const rows = [
    {
      mutuelle: "Identités Mutuelles",
      prix: "32€",
      sante100: "NON",
      consultation: "100%",
      hospitalisation: "100%",
      dentaire: "NON",
      optique: "110€",
    },
    {
      mutuelle: "M comme Mutuelle",
      prix: "34€",
      sante100: "NON",
      consultation: "100 à 250€",
      hospitalisation: "100%",
      dentaire: "100%",
      optique: "110€",
    },
    {
      mutuelle: "LMP Mutuelle santé",
      prix: "35€",
      sante100: "OUI",
      consultation: "60 à 100%",
      hospitalisation: "100%",
      dentaire: "100%",
      optique: "110€",
    },
    {
      mutuelle: "Ociane Matmut",
      prix: "40€",
      sante100: "NON",
      consultation: "100%",
      hospitalisation: "100%",
      dentaire: "200 à 300€ par an",
      optique: "0,15€",
    },
    {
      mutuelle: "Mutuelle MGC",
      prix: "32€",
      sante100: "OUI",
      consultation: "100%",
      hospitalisation: "100%",
      dentaire: "100%",
      optique: "110€",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <h2 className="text-xl font-bold text-teal-900">
        Comparez les garanties de votre mutuelle santé en un coup d’œil !
      </h2>

      <p className="text-gray-700">
        Le prix ne fait pas tout ! Pour bien choisir votre mutuelle, il est important de comparer les garanties proposées par chaque contrat.
        Grâce à <strong>Devis Mutuelle</strong>, vous pouvez consulter facilement les offres les plus adaptées à vos besoins tout en gardant
        une excellente prise en charge de vos frais de santé.
      </p>

      <div className="overflow-auto border rounded-lg shadow-sm">
        <table className="min-w-full text-sm text-left text-gray-700 bg-white">
          <thead className="bg-blue-100 text-gray-900 font-semibold">
            <tr>
              <th className="px-4 py-2">Mutuelle</th>
              <th className="px-4 py-2">Prix/mois</th>
              <th className="px-4 py-2">100% santé</th>
              <th className="px-4 py-2">Consultation médicale</th>
              <th className="px-4 py-2">Frais de séjour hospitalisation</th>
              <th className="px-4 py-2">Implants dentaires</th>
              <th className="px-4 py-2">Monture & verres simples</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-t">
                <td className="px-4 py-2">{row.mutuelle}</td>
                <td className="px-4 py-2">{row.prix}</td>
                <td className="px-4 py-2">{row.sante100}</td>
                <td className="px-4 py-2">{row.consultation}</td>
                <td className="px-4 py-2">{row.hospitalisation}</td>
                <td className="px-4 py-2">{row.dentaire}</td>
                <td className="px-4 py-2">{row.optique}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-500">
        *Ce tableau présente les résultats d’une simulation effectuée sur <strong>Devis Mutuelle</strong> pour un profil fictif de 40 ans en recherche
        d’emploi. Les informations affichées sont données à titre indicatif et peuvent varier selon les assureurs. Données valables au 21/01/2025.
      </p>
    </section>
  );
}
