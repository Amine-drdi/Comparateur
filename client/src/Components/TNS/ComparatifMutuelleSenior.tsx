import React from "react";

type Mutuelle = {
  logo: string;
  nom: string;
  prixMois: string;
  budgetAn: string;
  soins: number;
  hospi: number;
  dentaire: number;
  optique: number;
};

const mutuelles: Mutuelle[] = [
  {
    logo: "/src/assets/senior/images/cnp.png",
    nom: "CNP Assurances",
    prixMois: "43,31 €/mois",
    budgetAn: "476,4 €/an",
    soins: 3,
    hospi: 4,
    dentaire: 1,
    optique: 1,
  },
  {
    logo: "/src/assets/senior/images/smatis.png",
    nom: "Mutuelle Garance",
    prixMois: "57,67 €/mois",
    budgetAn: "634,37 €/an",
    soins: 4,
    hospi: 4,
    dentaire: 2,
    optique: 2,
  },
  {
    logo: "/src/assets/senior/images/acommeassure.png",
    nom: "Viasanté Mutuelle",
    prixMois: "57,12 €/mois",
    budgetAn: "685,44 €/an",
    soins: 4,
    hospi: 4,
    dentaire: 2,
    optique: 2,
  },
  {
    logo: "/src/assets/senior/images/malakoff-humanis.png",
    nom: "Lamie",
    prixMois: "88,78 €/mois",
    budgetAn: "1065,36 €/an",
    soins: 4,
    hospi: 4,
    dentaire: 3,
    optique: 3,
  },
];

export default function ComparatifMutuelleSenior() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 text-gray-800">
      <h2 className="text-2xl font-bold text-teal-900 mb-4">
        Comparer les prix et les garanties de votre mutuelle senior ?
      </h2>
      <p className="mb-4 leading-relaxed">
        Souscrire une mutuelle senior pas chère ne garantit pas toujours une couverture optimale.
        Pour bien choisir, comparez les garanties essentielles comme les soins courants, l'hospitalisation,
        le dentaire ou l’optique selon vos besoins et votre budget.
      </p>
      <p className="mb-8">
        Voici les 4 dernières mutuelles seniors comparées sur notre site :
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mutuelles.map((mutuelle, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm text-center min-h-[340px] flex flex-col justify-between"
          >
            <div>
              <img
                src={mutuelle.logo}
                alt={mutuelle.nom}
                className="h-10 w-auto mx-auto object-contain mb-4"
              />
              <h3 className="font-semibold text-gray-800 mb-4">{mutuelle.nom}</h3>

              <div className="space-y-3 text-sm text-gray-700 mb-6 ">
                <Garanties label="Soins courants" value={mutuelle.soins} />
                <Garanties  label="Hospital" value={mutuelle.hospi} />
                <Garanties label="Dentaire" value={mutuelle.dentaire} />
                <Garanties label="Optique" value={mutuelle.optique} />
              </div>
            </div>

            <div>
              <p className="text-lg font-bold text-blue-600 mb-1">{mutuelle.prixMois}</p>
              <p className="text-sm text-gray-500">Budget estimé : {mutuelle.budgetAn}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Garanties({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-left w-24">{label}</span>
      <div className="flex space-x-1">
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className={`w-3.5 h-3.5 rounded-full inline-block ${
              i < value ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
