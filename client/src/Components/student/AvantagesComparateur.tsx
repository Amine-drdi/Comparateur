import React from "react";

const AvantagesComparateur: React.FC = () => {
  const avantages = [
    {
      icon: "⏳",
      title: "Du temps gagné !",
      description:
        "Inutile de visiter des dizaines de sites pour trouver la meilleure complémentaire santé. Devis Mutuelle compare pour vous jusqu’à 30 offres sur une seule et même page.",
    },
    {
      icon: "🧠",
      title: "Tout devient plus clair !",
      description:
        "Devis Mutuelle vous explique simplement chaque garantie pour vous aider à faire le meilleur choix. Fini les décisions floues ou à l’aveugle !",
    },
    {
      icon: "💸",
      title: "Faites face à l’inflation !",
      description:
        "Choisissez une assurance santé moins chère avec des garanties équivalentes. Économisez sans compromettre votre niveau de protection.",
    },
  ];

  return (
    <section className="bg-[#f7fbff] px-6 py-10 max-w-6xl mx-auto text-[#1c1c1c]">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#004c97] mb-10">
        Pourquoi utiliser un comparateur de mutuelle fonctionnaire sur Devis Mutuelle ?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {avantages.map((item, index) => (
          <div key={index} className="text-center px-4">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AvantagesComparateur;
