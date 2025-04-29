import { ChevronDown } from 'lucide-react';
import { SetStateAction, useState } from 'react';
import mutuelleImage from "../../assets/optique/images/mutuelle-optique.png"
import TNS from "../../assets/TNS/images/TNS.png"
import ClassementMutuelleSenior from './ClassementMutuelleSenior';
import { Info } from "lucide-react"; // Icône informative, facultative
import mutuelleIcon from "../../assets/optique/images/download.jpg"; // Remplace par le bon chemin vers ton icône
import CompareBanner from "../../Components/TNS/CompareBanner"
import TNS2 from "../../assets/TNS/images/TNS2.png"
import GarantiesMutuelleSenior from "./GarantiesMutuelleSenior"
import MutuelleSeniorInfos from './MutuelleSeniorInfos';
import ComparatifMutuelleSenior from './ComparatifMutuelleSenior';
import TableauPrixMutuelleSenior from './TableauPrixMutuelleSenior';
import FaqMutuelleSenior from './FaqSection';
import MutuelleTNS from './MutuelleTNS';
import MeilleureMutuelleTNS from './MeilleureMutuelleTNS';
import PrixMutuelleIndependant from './PrixMutuelleIndependant';
import CompareMutuellesTNS from './CompareMutuellesTNS';
import ContratMadelinTNS from './ContratMadelinTNS';
import GarantiesTravailleurNonSalarie from './GarantiesTravailleurNonSalarie';
import CompareMutuelleTNS2 from './CompareMutuelleTNS2';
import FaqSection from './FaqSection';
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
        <span className="text-gray-500">Profil - Mutuelle TNS : comparez les mutuelles pour travailleur non salarié en 2025</span>
      </div>

      <h1 className="text-3xl font-bold text-teal-800 mb-6">
      Mutuelle senior : quelle est la meilleure mutuelle pour retraités en 2025 ?
      </h1>

      <section className="mt-10 max-w-4xl mx-auto px-4">
      <p className="text-gray-700 mb-6 leading-relaxed">
      En tant que travailleur non salarié (TNS) c'est à vous de faire les démarches pour souscrire
       une mutuelle santé adaptée à vos besoins de santé. les Devis mutuelle  vous donne tous les conseils
        pour trouver la mutuelle TNS 
      avec des garanties sur mesure qui vous correspondent.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 flex flex-col md:flex-row items-start gap-4">
        <img
      src={TNS}
          alt="Personnage informatif"
          className="w-20 h-20 object-contain"
        />
        <div>
          <h3 className="font-semibold text-blue-900 mb-2">Ce qu’il faut retenir :</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm leading-relaxed">
            <li>
            La mutuelle TNS est destinée aux travailleurs non-salariés comme les professions libérales,
             artisans et commerçants,
             pour couvrir les frais de santé non remboursés par l’Assurance Maladie.
            </li>
            <li>
            Comparer les offres avec les Devis mutuelle  vous permet de trouver une mutuelle adaptée à son budget
             et à ses besoins,
             notamment pour les soins dentaires, optiques et hospitaliers.
            </li>
            <li>
            Le contrat Madelin permet aux indépendants (hors autoentrepreneurs) de déduire leurs
             cotisations de leur revenu imposable, optimisant ainsi leur protection santé.
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
            Qu’est-ce qu’une mutuelle TNS ?

            </a>
          </li>
          <li>
            <a href="#section2" className="text-blue-500 hover:underline">
            Quelle est la meilleure mutuelle pour vous en tant que TNS ?
            </a>
          </li>
          {isExpanded && (
            <>
              <li>
                <a href="#section3" className="text-blue-500 hover:underline">
                Quel est le prix d'une mutuelle pour indépendant ?
                </a>
              </li>
              <li>
                <a href="#section4" className="text-blue-500 hover:underline">
                Comparez les mutuelles santé pour les travailleurs indépendants
                </a>
              </li>
              <li>
                <a href="#section5" className="text-blue-500 hover:underline">
                Mutuelle santé TNS : qu’est-ce que le contrat Madelin ?
                </a>
              </li>
              <li>
                <a href="#section6" className="text-blue-500 hover:underline">
                Quelles garanties souscrire si vous êtes un travailleur non salarié ?
                </a>
              </li>
              <li>
                <a href="#section7" className="text-blue-500 hover:underline">
                Pourquoi utiliser le comparateur de mutuelles TNS sur les Devis mutuelle  ?
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
              src={TNS2} // remplace par l’URL correcte selon ton projet
              alt="Mutuelle entreprise"
              className="w-full h-auto object-cover"
            />
      {/* Sections détaillées */}
      <div className="space-y-10 text-gray-700">
        <section id="section1">
        <MutuelleTNS/>
        </section>
        <CompareBanner/>
        <section id="section2">
    <MeilleureMutuelleTNS/>
        </section>
       
        <CompareBanner/>
    
        
        <section id="section3">
      <PrixMutuelleIndependant/>
        </section>
        <CompareBanner/>
        <section id="section4">
          <CompareMutuellesTNS/>
        </section>
        <CompareBanner/>
        <FaqMutuelleSenior/>
        <section id="section5">
        <ContratMadelinTNS/>
        </section>
        <CompareBanner/>
        <section id="section6" >
        <GarantiesTravailleurNonSalarie/>
        </section>
        <section id="section7" >
        <CompareMutuelleTNS2/>
        </section>
        <FaqSection/>
         </div>
         </div>
  );
}
