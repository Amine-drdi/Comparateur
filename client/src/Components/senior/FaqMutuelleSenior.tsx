import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

const faqList: FaqItem[] = [
  {
    question: "Pourquoi le prix de votre mutuelle augmente avec l’âge ?",
    answer: (
      <>
        Le prix de votre mutuelle augmente avec l’âge, car les besoins en santé évoluent. En effet, avec l’âge, les consultations sont plus fréquentes,
        il peut y avoir des soins spécifiques (optiques, dentaires, hospitalisation) et le risque de dépenses est plus important.
        <br />
        Les mutuelles ajustent leurs tarifs en fonction du profil et des dépenses moyennes des assurés.
      </>
    ),
  },
  {
    question: "Vous partez à la retraite : devez-vous garder votre mutuelle d’entreprise ou en souscrire une nouvelle ?",
    answer: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Demander la portabilité de votre mutuelle d’entreprise si vous êtes éligible.</li>
        <li>Comparer les garanties et les tarifs avec une nouvelle mutuelle senior, souvent mieux adaptée.</li>
        <li>Changer de mutuelle peut s’avérer plus économique si vous n’avez plus les mêmes besoins qu’en activité.</li>
      </ul>
    ),
  },
  {
    question: "Votre complémentaire peut-elle résilier votre contrat car vous êtes trop âgé ?",
    answer: (
      <>
        Non. Une mutuelle ne peut pas résilier un contrat en raison de l’âge de l’assuré. Toutefois, elle peut ajuster ses tarifs.
      </>
    ),
  },
  {
    question: "Comment savoir si votre mutuelle rembourse bien ?",
    answer: (
      <>
        Pour le savoir, lisez le tableau de garanties dans votre contrat. Comparez les niveaux de remboursement pour :
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Les consultations (médecin généraliste, spécialiste)</li>
          <li>L’hospitalisation (frais de séjour, forfait journalier)</li>
          <li>Les soins dentaires et optiques</li>
        </ul>
      </>
    ),
  },
  {
    question: "Quelle est la différence entre une mutuelle senior et une retraite ?",
    answer: (
      <>
        La mutuelle senior couvre les frais de santé après 55 ans, alors que la retraite concerne le revenu après la fin de carrière.
        Ce sont deux choses distinctes, mais souvent liées au moment du départ à la retraite.
      </>
    ),
  },
];

export default function FaqMutuelleSenior() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-teal-700 mb-6">Foire aux questions :</h2>
      <div className="space-y-4">
        {faqList.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-md">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition"
            >
              <span>{item.question}</span>
              {activeIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {activeIndex === index && (
              <div className="p-4 text-sm text-gray-700 border-t border-gray-100">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
