import React , {useState} from 'react'
import { ChevronDown, ChevronUp } from "lucide-react";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

const faqList: FaqItem[] = [
  {
    question: "Qu'est-ce que la mutuelle étudiante ?",
    answer: (
      <>
 <div className="max-w-3xl mx-auto p-6 text-gray-800 text-base space-y-6">
  <div className='mb-4'>
  Une mutuelle santé étudiante est un organisme chargé de couvrir les remboursements 
  spécifiques aux étudiants non pris en charge par la Sécurité sociale. Il s'agit 
  d'une complémentaire santé, à ne pas confondre avec ce que l'on appelait aussi les 
  « mutuelles étudiantes » jusqu'en septembre 2019,
   qui n'était autre que la Sécurité sociale étudiante, supprimée depuis.
  </div>
  <div className='mb-4'>
  Vous n'y comprenez pas grand-chose ? Ce sera peut-être plus clair comme ça :
  </div>
  <ol className="list-decimal list-inside marker:text-[#6495ED] text-gray-800">
    <li>   
        <strong>« Mutuelles étudiantes » au sens des organismes de Sécurité sociale pour les étudiants 
           </strong>
         : LMDE, SMEREP, Emevia, MGEN... Jusqu'en septembre 2019, les étudiants étaient obligés
          de s'inscrire dans l'une de ces mutuelles pour avoir une couverture sociale.
           Mais le régime étudiant a depuis été supprimé au profit du régime général.
            Ce terme n'est donc plus beaucoup employé dans ce sens aujourd'hui.</li>
    <li>
   <strong>« Mutuelles étudiantes » au sens des offres de complémentaires santé destinées aux étudiants</strong>:
     pour être mieux remboursé de ses frais de santé, il est recommandé de souscrire un contrat de
      complémentaire santé (aussi appelé « mutuelle santé ») qui agit comme une seconde couverture.
       Les assureurs proposent souvent des contrats adaptés à différents profils et une mutuelle 
       spéciale pour étudiants est recommandée. Depuis la rentrée universitaire 2019,
        c'est dans ce sens-là que nous employons le plus souvent l'expression « mutuelle étudiante ».
    </li>
    
  </ol>
</div>

      </>
    ),
  },
  {
    question: " Quelles sont les aides pour financer votre mutuelle santé étudiante ?",
    answer: (
        <div className="max-w-3xl mx-auto p-6 text-gray-800 text-base space-y-6">
          <div className='mb-4'>
          Plusieurs aides existent pour aider les étudiants à couvrir le coût de leur mutuelle :
          </div>
          <div className=' mb-4"'>
          <ul className="list-disc list-inside text-gray-800 text-base space-y-2">
           <li>
           <strong>La Complémentaire Santé Solidaire (C2S)</strong> : elle permet, sous conditions de ressources, d’avoir une mutuelle gratuite ou à moins d’1 € par jour.
           </li>
           <li>
           <strong>Certaines régions ou collectivités locales</strong>  proposent des aides financières pour les étudiants (par exemple, un remboursement partiel de la cotisation à une mutuelle santé).
           </li>
           <li>
           <strong>Certaines universités ou CROUS</strong>   peuvent aussi orienter les étudiants vers des dispositifs spécifiques ou des partenaires solidaires.
            </li>
           </ul>
          </div>
          <p>N’hésitez pas à vous renseigner auprès de votre CPAM, de votre établissement ou sur le site de votre région.</p>     
      </div>
    ),
  },
  {
    question: "La mutuelle étudiante est-elle obligatoire ?",
    answer: (
       <div className="max-w-3xl mx-auto p-6 text-gray-800 text-base space-y-6">
        <div className='mb-4'>
        Non, aucune loi n’impose aux étudiants de souscrire une mutuelle santé.
        </div>
        <div>
        Cependant, elle est fortement recommandée pour compléter les remboursements de la Sécurité 
        sociale et éviter de devoir 
        payer vous-même les frais non pris en charge (optique, dentaire, hospitalisation, etc.).   
        </div>
        </div>
    ),
  },
  {
    question: "La Sécurité sociale pour étudiant comment ça marche ?",
    answer: (
        <div className="max-w-3xl mx-auto p-6 text-gray-800 text-base space-y-6">
          <div className='mb-4'> 
          Depuis la rentrée 2019, les étudiants ne dépendent plus d’un régime spécial. Vous êtes désormais 
          rattachés directement au régime général de la Sécurité sociale, comme tous les autres assurés.
          </div>
          <div className='mb-4'>
          Concrètement :
          </div>
          <ul className="list-disc list-inside text-gray-800 text-base space-y-2">
  <li>
    Il n’est plus nécessaire de s’affilier à une « sécu étudiante » comme la LMDE ou la SMEREP/SMERRA.
  </li>
  <li>
    Les démarches sont simplifiées : les étudiants sont automatiquement affiliés à la CPAM de leur lieu de résidence.
  </li>
  <li>
    Les remboursements de base sont gérés par l’Assurance Maladie.
  </li>
</ul>
    <div>
    Seule la complémentaire santé reste à souscrire pour améliorer 
    votre couverture et réduire votre reste à charge.
    </div>
      </div>
    ),
  },

];
const FoireAuxQuestions = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    
    const toggle = (index: number) => {
      setActiveIndex(prev => (prev === index ? null : index));
    };
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto text-[#1c1c1c] text-xl">
    <h1 className="text-xl font-bold mb-4" >
    Foire aux questions </h1>
      <section className="w-full p-6">
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
                      <div className="p-4 text-lg text-gray-700 border-t border-gray-100">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              </section>
    </section>
  )
}

export default FoireAuxQuestions