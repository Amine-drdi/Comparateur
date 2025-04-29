import React from 'react';

const MutuelleFAQSection = () => {
  const faqs = [
    {
      question: 'Quelles mutuelles offrent les meilleurs remboursements?',
      answer: 'Certaines mutuelles comme Aésio, MGC ou CNP proposent des niveaux de remboursement élevés. Toutefois, chaque situation est unique.Une simulation personnalisée est le meilleur moyen d’identifier la couverture la plus adaptée à vos besoins.',
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
  }
  ];

  return (
    <section className="py-2 bg-[#f5f6ff] sm:py-8 lg:py-12">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
        <span className="bg-yellow-300 text-gray-800 px-3 py-1 rounded-md text-sm font-medium">
        Questions fréquemment posées
            </span>
        <h2 className="text-3xl font-bold text-gray-900 mt-4">
              Questions & Réponses
            </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
          Explorez les questions et réponses courantes sur notre comparateur 
          </p>
        </div>

        <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
          {faqs.map((faq, index) => (
            <div key={index} className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-gray-700">{faq.question}</p>
                <p className="mt-4 text-base text-gray-500">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-12 md:mt-20">
          <div className="px-8 py-4 text-center bg-gray-800 rounded-full">
            <p className="text-gray-50">
            Vous n’avez pas trouvé la réponse que vous cherchez ?{' '}
              <a
                href="#"
                title="Contact support"
                className="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline"
              >
                Contactez notre support
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MutuelleFAQSection;
