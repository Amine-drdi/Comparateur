import { useState } from 'react';

export default function FAQOrthodontie() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Comment est calculé le remboursement des soins d’orthodontie ?",
      answer: (
        <>
          <p className="mb-2">
            Pour les enfants de moins de 16 ans, la Sécurité sociale prend en charge 70 % du tarif conventionné pour une consultation, soit environ 16,10 € hors dépassement d’honoraires.
          </p>
          <p className="mb-2">
            Les appareils dentaires sont également couverts à hauteur de 70 %, le reste étant à votre charge, notamment les dépassements.
          </p>
          <p className="mb-2">
            Par exemple, un traitement complet en résine pour un enfant coûte environ 182,75 €. La Sécu rembourse 70 % de la base, soit 127,93 €, ce qui laisse un reste à charge de 54,82 € sans mutuelle.
          </p>
          <p>
            Une complémentaire santé peut couvrir ce reste à charge. Si vous n’en avez pas encore, un comparateur comme lesfurets peut vous guider.
          </p>
        </>
      ),
    },
    {
      question: "Jusqu’à quel âge l’orthodontie est-elle remboursée par la Sécurité sociale ?",
      answer: (
        <>
          <p className="mb-2">
            Le remboursement est accordé uniquement si le traitement débute avant l’âge de 16 ans et qu’une demande d’accord préalable a été validée.
          </p>
          <p>
            Une exception est possible entre 16 et 18 ans en cas d’intervention chirurgicale spécifique sur les maxillaires, mais elle reste exceptionnelle et non renouvelable.
          </p>
        </>
      ),
    },
    {
      question: "Quelle mutuelle santé choisir pour l’orthodontie adulte ?",
      answer: (
        <>
          <p className="mb-2">
            Pour les adultes, la Sécurité sociale ne rembourse pas les soins orthodontiques. Une mutuelle spécialisée est donc essentielle.
          </p>
          <p>
            Il est recommandé de choisir une complémentaire couvrant bien les frais réels. Vous pouvez comparer les formules avec un outil dédié pour choisir celle qui correspond le mieux à vos besoins.
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-8">Foire aux questions</h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left text-blue-900 font-semibold text-lg flex justify-between items-center"
              >
                {item.question}
                <span>{openIndex === index ? '▲' : '▼'}</span>
              </button>
              {openIndex === index && (
                <div className="mt-3 text-gray-700 text-sm space-y-2">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
