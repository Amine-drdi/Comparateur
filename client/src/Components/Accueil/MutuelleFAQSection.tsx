import React, { useState } from "react";

interface Question {
  question: string;
  answer: React.ReactNode;
}

const faqData: Question[] = [
  {
    question: "Quelles mutuelles offrent les meilleurs remboursements ?",
    answer: (
      <>
        Certaines mutuelles comme Aésio, MGC ou CNP proposent des niveaux de remboursement élevés. Toutefois, chaque situation est unique.
        Une simulation personnalisée est le meilleur moyen d’identifier la couverture la plus adaptée à vos besoins.
      </>
    ),
  },
  {
    question: "Quel est le tarif moyen d’une mutuelle par mois ?",
    answer: (
      <>
        Le prix dépend de votre âge, lieu de résidence, et niveau de couverture. 
        Un jeune actif peut payer entre 30 € et 50 €, tandis qu’un senior peut atteindre 150 €/mois. 
        Un devis personnalisé permet d'obtenir un tarif précis.
      </>
    ),
  },
  {
    question: "Quelle est la mutuelle la moins chère ?",
    answer: (
      <>
        Les mutuelles comme Identités Mutuelle ou Direct Assurance sont souvent compétitives. 
        Selon vos revenus, vous pouvez aussi bénéficier de la Complémentaire Santé Solidaire.
      </>
    ),
  },
  {
    question: "Comment obtenir un devis mutuelle santé gratuit ?",
    answer: (
      <>
        En utilisant notre simulateur, vous obtenez un devis en moins de 2 minutes sans engagement.
        <br />
        <em className="text-sm text-gray-600">
          Exemple : en juillet 2024, un couple de retraités de 65 ans a économisé 36 % en comparant les offres de notre panel.
        </em>
      </>
    ),
  },
  {
    question: "Peut-on souscrire sans questionnaire médical ?",
    answer: (
      <>
        Oui, la plupart des mutuelles n’exigent aucun questionnaire médical. Vous pouvez souscrire librement, quelle que soit votre santé.
      </>
    ),
  },
  {
    question: "Changer de mutuelle, c’est facile ?",
    answer: (
      <>
        Grâce à la résiliation infra-annuelle, vous pouvez changer de mutuelle après 12 mois de contrat, sans justificatif.
        Le nouvel assureur s’occupe des démarches.
      </>
    ),
  },
  {
    question: "Une complémentaire santé est-elle obligatoire ?",
    answer: (
      <>
        <strong>Salariés du privé :</strong> la mutuelle d’entreprise est obligatoire.
        <br />
        <strong>Indépendants, étudiants, retraités :</strong> ce n’est pas obligatoire, mais fortement recommandé.
      </>
    ),
  },
  {
    question: "Existe-t-il un délai de carence ?",
    answer: (
      <>
        Certaines mutuelles appliquent un délai avant le remboursement de certains soins.
        Vérifiez bien ce point avant de souscrire.
      </>
    ),
  },
  {
    question: "Quels sont les différents types de mutuelles ?",
    answer: (
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li><strong>Individuelle :</strong> pour les indépendants ou étudiants</li>
        <li><strong>Familiale :</strong> pour couvrir conjoint et enfants</li>
        <li><strong>Collective :</strong> proposée par l’entreprise</li>
        <li><strong>Sénior :</strong> renforce les postes dentaires, optiques, hospitaliers</li>
      </ul>
    ),
  },
  {
    question: "Qu’est-ce qu’une mutuelle santé ?",
    answer: (
      <>
        Une mutuelle est un organisme à but non lucratif qui rembourse les frais de santé non pris en charge par la Sécurité Sociale. 
        Elle propose des contrats adaptés selon votre profil et vos besoins.
      </>
    ),
  },
  {
    question: "Comment fonctionne une mutuelle ?",
    answer: (
      <>
        Elle intervient en complément de la Sécurité Sociale pour vous rembourser :
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li>Consultations médicales</li>
          <li>Soins dentaires</li>
          <li>Optique</li>
          <li>Hospitalisation</li>
          <li>Appareillage auditif</li>
        </ul>
      </>
    ),
  },
  {
    question: "Pourquoi souscrire une complémentaire santé ?",
    answer: (
      <>
        Elle vous protège contre les frais non remboursés par la Sécurité Sociale, comme les dépassements d’honoraires ou certains soins dentaires/optique.
        Elle peut prendre en charge jusqu’à 100 % des dépenses selon le contrat choisi.
      </>
    ),
  },
  {
    question: "Le tiers payant, qu’est-ce que c’est ?",
    answer: (
      <>
        Le tiers payant vous permet de ne pas avancer les frais médicaux. La mutuelle règle directement le professionnel de santé.
      </>
    ),
  },
  {
    question: "Comment bien choisir ses garanties ?",
    answer: (
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Si vous portez des lunettes, privilégiez une mutuelle avec bonne couverture optique</li>
        <li>Problèmes dentaires ? Choisissez un contrat avec un bon remboursement en dentaire</li>
        <li>Pour les familles : assurez-vous de la prise en charge des enfants</li>
        <li>Comparez les offres selon vos priorités pour équilibrer prix et garanties</li>
      </ul>
    ),
  },
  {
    question: "Comment fonctionne le remboursement ?",
    answer: (
      <>
        Le remboursement se fait en deux étapes :
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li><strong>Sécurité Sociale :</strong> prend en charge selon un tarif de base</li>
          <li><strong>Mutuelle :</strong> complète ou couvre le reste (ticket modérateur, dépassements d’honoraires…)</li>
        </ul>
      </>
    ),
  },
  {
    question: "Comment obtenir un devis mutuelle ?",
    answer: (
      <>
        Avec notre simulateur, plus besoin de vous déplacer. En un clic, comparez plusieurs offres adaptées à vos besoins.
        <br />
        <span className="text-blue-600 font-medium">Économisez en moyenne 36 % sur votre contrat avec notre outil gratuit !</span>
      </>
    ),
  },
];

export default function MutuelleFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-orange-600 mb-8 text-center">
        Vos questions sur la mutuelle santé
      </h2>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border rounded-md shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-semibold hover:bg-gray-50"
            >
              {item.question}
              <span className="text-orange-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-sm text-gray-700">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
