import React from "react";

const CompareGarantiesFonctionnaires: React.FC = () => {
  const cards = [
    {
      nom: "Direct Assurance",
      soins: 2,
      hospitalisation: 2,
      dentaire: 2,
      optique: 2,
      prixMois: "46,46 €",
      prixAn: "557,52 €",
      logo: "/src/assets/official/images/direct-assurance.png", // Remplace par ton chemin d'image
    },
    {
      nom: "Julia",
      soins: 4,
      hospitalisation: 4,
      dentaire: 3,
      optique: 4,
      prixMois: "167,46 €",
      prixAn: "2009,52 €",
      logo: "/src/assets/official/images/julia-mutuelle.png",
    },
    {
      nom: "Lamie",
      soins: 3,
      hospitalisation: 3,
      dentaire: 3,
      optique: 3,
      prixMois: "122 €",
      prixAn: "1464 €",
      logo: "/src/assets/official/images/lamie-mutuelle.png",
    },
    {
      nom: "Mgefi",
      soins: 3,
      hospitalisation: 3,
      dentaire: 2,
      optique: 2,
      prixMois: "89,56 €",
      prixAn: "1074,72 €",
       logo: "/src/assets/official/images/mgefi.png",
    },
  ];

  const renderCircles = (count: number) =>
    Array.from({ length: 4 }, (_, i) => (
      <span
        key={i}
        className={`inline-block w-4 h-4 mx-0.5 rounded-full ${
          i < count ? "bg-blue-500" : "bg-gray-200"
        }`}
      />
    ));

  return (
    <section className="px-6 py-10 max-w-7xl mx-auto text-[#1c1c1c]">
      <h2 className="text-2xl md:text-3xl font-bold text-[#004c97] mb-6">
        Comparez les prix et les garanties de votre mutuelle fonctionnaire pour bien la choisir
      </h2>

      <p className="mb-4">
        Comme pour toute complémentaire santé, une mutuelle pour fonctionnaire couvre une partie des frais médicaux restants à charge 
        après le remboursement de l’Assurance Maladie (le fameux ticket modérateur).
      </p>

      <p className="mb-4">
        Elle peut aussi prendre en charge votre conjoint, vos enfants, et inclure des garanties optionnelles comme la protection juridique, 
        les cures thermales ou encore le <a className="text-blue-600 underline" href="#">transport médical</a>.
      </p>

      <p className="mb-4">
        Tous les contrats n’offrant pas le même niveau de couverture, il est essentiel de comparer les mutuelles avant de souscrire. 
        Le comparateur <span className="font-semibold">Devis Mutuelle</span> vous permet d’évaluer les garanties proposées par les différentes mutuelles selon vos besoins.
      </p>

      <p className="mb-4">
        En comparant, vous pourrez analyser :
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Les niveaux de remboursement et les plafonds</li>
        <li>Les exclusions de garantie</li>
        <li>Les délais de carence</li>
        <li>La présence ou non du tiers payant</li>
      </ul>

      <p className="mb-6">
        Tous ces critères ont un impact direct sur le <span className="font-semibold">prix de votre mutuelle fonctionnaire</span>. 
        Il est donc essentiel de bien identifier vos priorités de santé avant de faire votre choix.
      </p>

      <p className="mb-8">
        Voici 4 exemples de tarifs actuellement observés sur le site <span className="font-semibold">Devis Mutuelle</span> :
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="border rounded-lg shadow-sm p-4 text-center bg-white">
            <img src={card.logo} alt={card.nom} className="h-10 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">{card.nom}</h3>
            <div className="text-sm mb-2">
              <p className="font-medium">Soins courants</p>
              <div>{renderCircles(card.soins)}</div>
            </div>
            <div className="text-sm mb-2">
              <p className="font-medium">Hospitalisation</p>
              <div>{renderCircles(card.hospitalisation)}</div>
            </div>
            <div className="text-sm mb-2">
              <p className="font-medium">Dentaire</p>
              <div>{renderCircles(card.dentaire)}</div>
            </div>
            <div className="text-sm mb-4">
              <p className="font-medium">Optique</p>
              <div>{renderCircles(card.optique)}</div>
            </div>
            <p className="text-xl font-bold text-[#004c97] mb-1">{card.prixMois} /mois</p>
            <p className="text-sm text-gray-600">Budget estimé : {card.prixAn} /an</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompareGarantiesFonctionnaires;
