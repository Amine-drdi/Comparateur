import { ChevronDown } from 'lucide-react';
import { SetStateAction, useState } from 'react';
import mutuelleImage from "../../assets/optique/images/mutuelle-optique.png"
import official from "../../assets/official/images/official.png"
import { Info } from "lucide-react"; // Icône informative, facultative
import mutuelleIcon from "../../assets/optique/images/download.jpg"; // Remplace par le bon chemin vers ton icône
import CompareBanner from "../../Components/official/CompareBanner"
import fonctionnaire from "../../assets/official/images/fonctionnaire.png"
import MutuelleFonctionnaire from "./MutuelleFonctionnaire"
import ComparatifMutuelleFonctionnaire from './ComparatifMutuelleFonctionnaire';
import CompareGarantiesFonctionnaires from './CompareGarantiesFonctionnaires';
import CriteresComparaison from './CriteresComparaison';
import TableauMutuellePrix from './TableauMutuellePrix';
import AvantagesComparateur from './AvantagesComparateur';

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
        <span className="text-gray-500">Profil - Mutuelle fonctionnaire : comparez les offres de mutuelles pour fonctionnaires</span>
      </div>

      <h1 className="text-3xl font-bold text-teal-800 mb-6">
      Mutuelle fonctionnaire : comparez les offres de mutuelles pour fonctionnaires
      </h1>

      <section className="mt-10 max-w-4xl mx-auto px-4">
      <p className="text-gray-700 mb-6 leading-relaxed">
      Tout comme les salariés du secteur privé, les fonctionnaires bénéficient désormais
       d’une participation de l’État à leur mutuelle santé.
       La souscription à une complémentaire santé devient progressivement obligatoire 
       dans le cadre de la réforme de la protection sociale complémentaire. Toutefois,
        cette obligation ne s’applique pas encore à l’ensemble des agents publics.
         Devis Mutuelle vous explique tout en détail !
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 flex flex-col md:flex-row items-start gap-4">
        <img
      src={official}
          alt="Personnage informatif"
          className="w-20 h-20 object-contain"
        />
        <div>
          <h3 className="font-semibold text-blue-900 mb-2">Ce qu’il faut retenir :</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm leading-relaxed">
            <li>
            Depuis 2025, l’État finance 50% du coût de la mutuelle des fonctionnaires, 
            alignant progressivement leur protection sociale sur celle du secteur privé.
             La fonction publique hospitalière bénéficiera de cette réforme à partir de 2026.
            </li>
            <li>
            Tous les agents publics peuvent souscrire une mutuelle référencée, mais la prise en 
            charge dépend du statut.
             Les contractuels et vacataires doivent vérifier leur éligibilité auprès de leur employeur.
            </li>
            <li>
            Choisir une mutuelle adaptée est essentiel pour bien couvrir les soins courants, l’optique, 
            le dentaire et l’hospitalisation.
             Comparer les offres permet d’optimiser son budget tout en bénéficiant des meilleures
              garanties.
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
            Mutuelle fonctionnaire et protection sociale complémentaire : ce qui change en 2025

            </a>
          </li>
          <li>
            <a href="#section2" className="text-blue-500 hover:underline">
            Comparatif des mutuelles fonctionnaire : quelle est la meilleure ?
            </a>
          </li>
          {isExpanded && (
            <>
              <li>
                <a href="#section3" className="text-blue-500 hover:underline">
                Comparez les prix et les garanties de votre mutuelle fonctionnaire pour bien la choisir
                </a>
              </li>
              <li>
                <a href="#section4" className="text-blue-500 hover:underline">
                Quels sont les critères à prendre en compte lors de votre comparaison ?
                </a>
              </li>
              <li>
                <a href="#section5" className="text-blue-500 hover:underline">
                Quel est le prix de votre mutuelle fonctionnaire ?
                </a>
              </li>
              <li>
                <a href="#section5" className="text-blue-500 hover:underline">
                Pourquoi utiliser un comparateur de mutuelle fonctionnaire sur Devis Mutuelle ?
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
              src={fonctionnaire} // remplace par l’URL correcte selon ton projet
              alt="Mutuelle entreprise"
              className="w-full h-auto object-cover"
            />
      {/* Sections détaillées */}
      <div className="space-y-10 text-gray-700">
        <section id="section1">
       <MutuelleFonctionnaire/>
        </section>
        <CompareBanner/>
        <section id="section2">
      <ComparatifMutuelleFonctionnaire/>
        </section>
       
        <CompareBanner/>
    
        <section id="section3">
        <CompareGarantiesFonctionnaires/>
        </section>
        <section id="section4">
        <CriteresComparaison/>
        </section>
        <section id="section5">
        <TableauMutuellePrix/>
        </section>
        <CompareBanner/>
       <AvantagesComparateur/>

         </div>
         </div>
  );
}
