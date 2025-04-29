import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question:
      "Est-ce qu'un indépendant a le droit à une mutuelle ? Est-elle obligatoire ?",
    answer: `Oui, un travailleur indépendant a le droit de souscrire une mutuelle santé, mais ce n’est pas obligatoire. Contrairement aux salariés, il n’a pas de mutuelle d’entreprise imposée, mais il peut choisir une complémentaire santé adaptée à ses besoins. Grâce à la loi Madelin, les cotisations d’une mutuelle pour TNS sont déductibles fiscalement.`,
  },
  {
    question:
      "Comment un dirigeant peut-il bénéficier de la mutuelle de son entreprise ?",
    answer: `Tout dépend de votre statut en tant que dirigeant :

- Un gérant majoritaire de SARL, un entrepreneur individuel ou un auto-entrepreneur est considéré comme TNS et ne peut pas adhérer à la mutuelle obligatoire de son entreprise.
- Un dirigeant assimilé salarié (ex. : président de SAS ou gérant minoritaire de SARL) peut bénéficier de la mutuelle collective de son entreprise, à condition qu’elle soit obligatoire pour tous les salariés.`,
  },
  {
    question:
      "À quelle assurance santé obligatoire sont rattachés les indépendants ?",
    answer: `Les travailleurs indépendants sont rattachés au régime général de l’Assurance Maladie, depuis la suppression du RSI en 2020. Ils cotisent donc à l’URSSAF et sont affiliés à la CPAM (Caisse Primaire d’Assurance Maladie) de leur lieu de résidence pour leurs remboursements de soins.

En ce qui concerne les travailleurs indépendants du secteur agricole (agriculteurs, exploitants) dépendent de la MSA (Mutualité Sociale Agricole), qui gère leur couverture santé obligatoire. Dans tous les cas, une complémentaire santé reste facultative mais recommandée pour couvrir les frais non pris en charge par l’Assurance Maladie.`,
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-6">
          Foire aux questions :
        </h2>
        <ul className="space-y-4">
          {faqData.map((item, index) => (
            <li
              key={index}
              className="border-b border-gray-300 pb-4"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left flex justify-between items-center text-blue-900 font-semibold text-base md:text-lg focus:outline-none"
              >
                {item.question}
                {openIndex === index ? (
                  <FaChevronUp className="ml-2 text-sm" />
                ) : (
                  <FaChevronDown className="ml-2 text-sm" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-4 text-gray-700 text-sm whitespace-pre-line">
                  {item.answer}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
