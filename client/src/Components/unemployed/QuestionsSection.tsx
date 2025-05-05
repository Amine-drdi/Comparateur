import { ChevronDown } from 'lucide-react';
import { SetStateAction, useState } from 'react';
import mutuelleImage from "../../assets/optique/images/mutuelle-optique.png"
import jobless from "../../assets/unemployed/images/jobless.png"
import { Info } from "lucide-react"; // Icône informative, facultative
import mutuelleIcon from "../../assets/optique/images/download.jpg"; // Remplace par le bon chemin vers ton icône
import CompareBanner from "../../Components/senior/CompareBanner"
import chomeur from "../../assets/unemployed/images/mutuelle-chomeur.png"
import WhyMutuelleUnemployed from './WhyMutuelleUnemployed';
import CheapMutuelleForUnemployed from './CheapMutuelleForUnemployed';
import GuaranteeComparison from './GuaranteeComparison';
import WhyMutuelleUnemployed2 from './WhyMutuelleUnemployed2';
import MutuelleChomage from './MutuelleChomage';
import MutuelleChomageIndividuelle from './MutuelleChomageIndividuelle';

const faqData = [
  {
    question: "Qu’est-ce que le 100% santé en optique ?",
    answer:
      "Le 100% santé est une réforme qui permet un remboursement intégral de certaines lunettes (montures et verres) sans reste à charge pour l’assuré. Cela concerne des équipements optiques basiques mais conformes aux normes de qualité.",
  },
  {
    question: "Quels sont les types de verres remboursés par les mutuelles ?",
    answer:
      "Les mutuelles peuvent rembourser différents types de verres, notamment les verres simples, progressifs ou complexes. Le montant du remboursement varie en fonction de la mutuelle et du contrat choisi.",
  },
  {
    question: "La chirurgie réfractive est-elle prise en charge par les mutuelles optiques ?",
    answer:
      "Oui, certaines mutuelles comme Cocoon proposent des forfaits spécifiques pour couvrir une partie des coûts de la chirurgie réfractive allant jusqu’à 1000€ par œil selon le contrat.",
  },
  {
    question: "Comment fonctionnent les remboursements pour les lentilles ?",
    answer:
      "Les lentilles de contact peuvent être partiellement prises en charge par la Sécurité sociale, mais le reste à charge est souvent élevé. Les mutuelles offrent des forfaits pouvant couvrir entre 150€ et 200€ par an pour les lentilles selon le contrat souscrit.",
  },
  {
    question: "Quelle mutuelle choisir pour une prise en charge rapide des frais optiques ?",
    answer:
      "Pour une prise en charge rapide, optez pour une mutuelle proposant le tiers payant, comme celles ayant des réseaux d’opticiens partenaires. Cela permet d’éviter l’avance de frais et d’accélérer le remboursement.",
  },
  {
    question: "Quelle est la différence entre verres simples et verres complexes ?",
    answer: (
      <div className="space-y-2">
        <p>
          Les verres simples et complexes répondent à différents besoins de correction visuelle, et leur remboursement varie en fonction des mutuelles. Comprendre cette distinction est important pour choisir une mutuelle adaptée à ses besoins optiques :
        </p>
        <p>
          <strong>Verres simples :</strong> <br />
          Les verres simples corrigent des troubles de la vision basiques tels que la myopie ou l’hypermétropie. Ils sont généralement moins coûteux et sont bien remboursés par la Sécurité sociale ainsi que par les mutuelles. Le remboursement des mutuelles pour les verres simples peut être complet, en particulier dans le cadre du 100 % santé.
        </p>
        <p>
          <strong>Verres complexes :</strong> <br />
          Les verres complexes sont destinés aux personnes ayant des troubles de la vision plus importants comme la presbycie ou nécessitant des verres progressifs. Ils sont souvent plus élevés en prix mais certaines mutuelles offrent des forfaits spécifiques pour ces équipements. Toutefois, la prise en charge de la Sécurité sociale se limite souvent à un maximum de 30 %.
        </p>
      </div>
    ),
  },
];

export default function QuestionsSection() {
  const [isExpanded, setIsExpanded] = useState(true);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  //const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  /*const toggle = (index: number | SetStateAction<null>) => {
    setActiveIndex(activeIndex === index ? null : index);
  };*/
  const toggle: (index: number) => void = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex text-sm mb-8 text-gray-600">
        <a href="#" className="hover:text-blue-600">Accueil</a>
        <span className="mx-2">›</span>
        <a href="#" className="hover:text-blue-600">Mutuelle sante</a>
        <span className="mx-2">›</span>
        <span className="text-gray-500">Profil - Mutuelle chômeur : quelle est la meilleure mutuelle pour les demandeurs d'emploi en 2025 ?</span>
      </div>

      <h1 className="text-3xl font-bold text-teal-800 mb-6">
      Mutuelle chômeur : quelle est la meilleure mutuelle pour les demandeurs d'emploi en 2025 ?
      </h1>

      <section className="mt-10 max-w-4xl mx-auto px-4">
      <p className="text-gray-700 mb-6 leading-relaxed">
      Pendant une période de chômage, les dépenses contraintes ne sont pas forcément la priorité
       dans votre budget. Néanmoins, souscrire une mutuelle santé vous permet de prendre en charge vos soins sans avoir besoin de les sacrifier au profit d’autres dépenses. Pour trouver la mutuelle chômage qui vous convient le mieux 
      à votre profil, lesfurets.com sont là pour vous accompagner dans votre démarche de comparaison.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 flex flex-col md:flex-row items-start gap-4">
        <img
      src={jobless}
          alt="Personnage informatif"
          className="w-20 h-20 object-contain"
        />
        <div>
          <h3 className="font-semibold text-blue-900 mb-2">Ce qu’il faut retenir :</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm leading-relaxed">
            <li>
            Après la perte de votre emploi, vous pouvez conserver votre mutuelle d'entreprise
             jusqu'à 12 mois grâce à la portabilité des droits, sous certaines conditions.
            </li>
            <li>
            En tant que demandeur d'emploi avec des ressources limitées, vous pouvez être éligible à la CSS
             (complémentaire santé solidaire), 
            qui vous permet de bénéficier d'une mutuelle gratuite ou à moins d'une 1€ et de couvrir vos soins.
            </li>
            <li>
            Souscrire une mutuelle santé vous permet de réduire tout ou partie de votre reste à charge. 
            En comparant les différentes offres 
            vous pouvez trouver celle qui correspond le mieux à vos besoins.
            </li>
          </ul>
        </div>
      </div>
    </section>

      {/* Sommaire */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold text-teal-800 mb-4">Sommaire</h2>

        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <a href="#section1" className="text-blue-500 hover:underline">
            Pourquoi souscrire une mutuelle quand on est demandeur d’emploi ?

            </a>
          </li>
          <li>
            <a href="#section2" className="text-blue-500 hover:underline">
            Mutuelle santé pas chère pour chômeur : une offre adaptée avec Devis mutuelle
            </a>
          </li>
          {isExpanded && (
            <>
              <li>
                <a href="#section3" className="text-blue-500 hover:underline">
                Comparez les garanties de votre mutuelle santé en un clin d'œil !
                </a>
              </li>
              <li>
                <a href="#section4" className="text-blue-500 hover:underline">
                Mutuelle et au chômage : 4 solutions pour être mieux remboursé de ses frais de santé lorsqu'on est sans emploi
                </a>
              </li>
              <li>
                <a href="#section5" className="text-blue-500 hover:underline">
                Un pari sur le long terme : souscrire votre propre mutuelle chômage individuelle
                </a>
              </li>
           
            </>
          )}
        </ol>

        <button 
          onClick={toggleExpand}
          className="flex items-center mt-6 text-blue-500 hover:text-blue-700"
        >
          <span>Afficher {isExpanded ? 'moins' : 'plus'}</span>
          <ChevronDown className={`ml-2 w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>
      <img
              src={chomeur} // remplace par l’URL correcte selon ton projet
              alt="Mutuelle entreprise"
              className="w-full h-auto object-cover"
            />
      {/* Sections détaillées */}
      <div className="space-y-10 text-gray-700">
        <section id="section1">
        <WhyMutuelleUnemployed/>
        </section>
        <CompareBanner/>
        <section id="section2">
      <CheapMutuelleForUnemployed/>
        </section>
       
        <CompareBanner/>
    
        <section id="section3">
        <GuaranteeComparison/>
        </section>
        <section id="section4">
     <MutuelleChomage/>
        </section>
        <section id="section5">
        <MutuelleChomageIndividuelle/>
        </section>
        <CompareBanner/>
    {/*<FaqMutuelleSenior/>*/}

         </div>
         </div>
  );
}
