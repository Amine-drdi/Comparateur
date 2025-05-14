import { useState } from "react";

const solutions = [
  {
    title: "1 - Conserver votre mutuelle d’entreprise grâce à la portabilité",
    content: (
      <>
        <p>
          Si vous quittez votre emploi, vous pouvez garder votre mutuelle d’entreprise sans frais supplémentaires, sous certaines conditions :
        </p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Ne pas avoir été licencié pour faute grave</li>
          <li>Percevoir des allocations chômage</li>
          <li>Avoir souscrit à la mutuelle pendant votre emploi</li>
        </ul>
        <p className="mt-2">
          Cette portabilité dure au maximum 12 mois après la fin du contrat de travail, et cesse si vous retrouvez un emploi. Elle peut aussi bénéficier gratuitement à vos ayants droit.
        </p>
      </>
    )
  },
  {
    title: "2 - Être rattaché à la mutuelle de votre conjoint(e)",
    content: (
      <>
        <p>
          Si votre conjoint(e) a une mutuelle via son travail, vous pouvez y être affilié gratuitement ou à moindre coût. Il suffit qu’il ou elle demande à son employeur de vous ajouter comme ayant-droit.
        </p>
        <p className="mt-2">
          Cette solution est accessible dès lors que vous êtes mariés ou pacsés.
        </p>
      </>
    )
  },
  {
    title: "3 - Bénéficier de la Complémentaire santé solidaire (CSS)",
    content: (
      <>
        <p>
          La CSS est une mutuelle gratuite ou à moins de 1 € par jour, réservée aux personnes à faibles revenus. Pour y avoir droit, vous devez :
        </p>
        <ul className="list-decimal ml-5 mt-2 space-y-1">
          <li>Être affilié à la Sécurité sociale</li>
          <li>Avoir des revenus modestes</li>
          <li>Faire une demande spécifique (elle n’est pas automatique)</li>
        </ul>
        <p className="mt-2">
          Aucune obligation d’être inscrit à Pôle Emploi, mais il faut remplir les critères de ressources.
        </p>
      </>
    )
  },
  {
    title: "4 - Souscrire une mutuelle individuelle",
    content: (
      <>
        <p>
          Si vous ne pouvez pas conserver votre ancienne mutuelle, vous pouvez souscrire une mutuelle chômage individuelle adaptée à vos besoins :
        </p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Reprendre la même couverture que votre ancien contrat (si proposé)</li>
          <li>Comparer les offres sur le marché pour trouver une formule économique</li>
        </ul>
        <p className="mt-2">
          Certaines compagnies proposent des contrats spécifiques pour les demandeurs d’emploi à tarifs préférentiels.
        </p>
      </>
    )
  }
];

export default function MutuelleChomage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-teal-900 mb-6">
        Mutuelle et chômage : 4 solutions pour rester bien couvert en cas de perte d’emploi
      </h1>
      <p className="text-gray-700 mb-4">
        Être sans emploi ne signifie pas être sans protection ! Voici 4 moyens de continuer à vous faire rembourser vos frais de santé efficacement.
      </p>

      <div className="space-y-4">
        {solutions.map((item, index) => (
          <div key={index} className="border rounded-md">
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full text-left px-4 py-3 font-semibold bg-gray-100 hover:bg-gray-200"
            >
              {item.title}
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 text-sm text-gray-700 bg-white">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
