import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200">
      <button 
        className="flex justify-between items-center w-full py-4 px-2 text-left font-medium text-blue-800 hover:text-blue-600 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <svg 
          className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="px-2 text-gray-700">{answer}</div>
      </div>
    </div>
  );
};

const MutuelleQuestionsNumerated = ({ questions }) => {
  return (
    <ol className="list-decimal list-inside space-y-2 pl-2 text-gray-700">
      {questions.map((question, index) => (
        <li key={index} className="text-sm">
          {question}
        </li>
      ))}
    </ol>
  );
};

const MutuelleHealth = () => {
  const questions = [
    "Quels sont mes besoins de santé et les principales dépenses associées ? Est-ce que je suis en général bien remboursé ?",
    "Est-ce que je peux ajouter des ayants-droits à la mutuelle ?",
    "Quelles sont les garanties à couvrir par ma mutuelle (hospitalisation, soins dentaires, optiques, médecines douces, médecins spécialistes etc.) ?",
    "Quelles sont les conditions générales du contrat ?",
    "Est-ce que le comparateur inclut-il tous les acteurs du marché ?",
    "Lors de ma comparaison, quelle est la prix moyen de la mutuelle ? est-ce que le montant de la cotisation correspond à mon budget ?",
    "Y a-t-il un délai de carence avant l'activation des garanties ?",
    "Y a-t-il des exclusions de garantie ? (des soins non couverts par la mutuelle)",
    "Les offres de mutuelles comparées proposent-elles des avantages ou bonus fidélité ou réduction à la souscription ?",
    "Est-ce que je souhaite être couvert par un assureur santé ou un organisme de mutuelle ?"
  ];
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Banner space at the top that is responsive */}
      <div className="w-full h-12 sm:h-16 md:h-20 lg:h-24 bg-blue-50 rounded-lg mb-8 flex items-center justify-center">
        <span className="text-blue-800 font-medium">Comparez les meilleures mutuelles santé</span>
      </div>
      
      <h1 className="text-2xl font-bold text-blue-800 mb-6">Mutuelle santé : toutes les réponses à vos questions</h1>
      
      <FaqItem 
        question="La mutuelle santé est-elle obligatoire ?"
        answer={
          <div className="space-y-2">
            <p>Si vous êtes salariés en entreprise, sachez que depuis 2016, votre employeur est dans l'obligation de vous proposer une mutuelle santé avec un panier de soins responsable. Cette mutuelle est prise en charge à 50% par votre employeur.</p>
            <p>Si vous êtes indépendants, une mutuelle santé n'est pas obligatoire mais fortement recommandée. Mais ne vous inquiétez pas pour la fiscalité vous pouvez déduire de votre bénéfice vos cotisations.</p>
          </div>
        }
      />
      
      <FaqItem 
        question="Comprendre le remboursement de votre mutuelle santé"
        answer={
          <p>La sécurité sociale couvre une partie dite de base des frais de santé. Ensuite la mutuelle prend le relais. Cette dernière rembourse vos frais de santé en fonction de la base de remboursement à laquelle vous avez souscrit. Ce taux de remboursement peut être compris entre 30% et 400%, ce qui permet de prendre en charge vos dépenses plus ou moins importantes.</p>
        }
      />
      
      <FaqItem 
        question="Les 10 questions à se poser pour bien comparer les mutuelles"
        answer={<MutuelleQuestionsNumerated questions={questions} />}
      />
      
      <FaqItem 
        question="Peut-on souscrire une mutuelle santé en ligne ?"
        answer={
          <p>Oui, vous pouvez facilement souscrire une mutuelle santé en ligne. Après avoir utilisé notre comparateur de mutuelle pour choisir une offre, il vous suffit de suivre les étapes de souscription sur le site de la mutuelle partenaire. La procédure est simple et rapide. En cas de question sur un devis, vous pouvez demander à être rappelé par la mutuelle partenaire.</p>
        }
      />
    </div>
  );
};

export default MutuelleHealth;