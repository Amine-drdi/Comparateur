import { ChevronDown } from 'lucide-react';
import { SetStateAction, useState } from 'react';
import mutuelleImage from "../../assets/optique/images/mutuelle-optique.png"
import oldMan from "../../assets/senior/images/oldMan.png"
import ClassementMutuelleSenior from './ClassementMutuelleSenior';
import { Info } from "lucide-react"; // Icône informative, facultative
import mutuelleIcon from "../../assets/optique/images/download.jpg"; // Remplace par le bon chemin vers ton icône
import CompareBanner from "../../Components/senior/CompareBanner"
import senior from "../../assets/senior/images/senior.png"
import GarantiesMutuelleSenior from "./GarantiesMutuelleSenior"
import MutuelleSeniorInfos from './MutuelleSeniorInfos';
import ComparatifMutuelleSenior from './ComparatifMutuelleSenior';
import TableauPrixMutuelleSenior from './TableauPrixMutuelleSenior';
import FaqMutuelleSenior from './FaqMutuelleSenior';
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
        <span className="text-gray-500">Profil - Mutuelle senior : quelle est la meilleure mutuelle pour retraités en 2025 ?</span>
      </div>

      <h1 className="text-3xl font-bold text-teal-800 mb-6">
      Mutuelle senior : quelle est la meilleure mutuelle pour retraités en 2025 ?
      </h1>

      <section className="mt-10 max-w-4xl mx-auto px-4">
      <p className="text-gray-700 mb-6 leading-relaxed">
        Quand vient l'heure de la retraite, vous devez trouver une mutuelle senior pour vous accompagner dans le remboursement de vos frais médicaux.
        À vous de trouver celle qui correspond le mieux à vos besoins de santé.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 flex flex-col md:flex-row items-start gap-4">
        <img
      src={oldMan}
          alt="Personnage informatif"
          className="w-20 h-20 object-contain"
        />
        <div>
          <h3 className="font-semibold text-blue-900 mb-2">Ce qu’il faut retenir :</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm leading-relaxed">
            <li>
              Les mutuelles santé pour seniors offrent des garanties renforcées sur des postes de dépenses spécifiques tels que le dentaire,
              l’optique, l’hospitalisation et les aides auditives, afin de répondre aux besoins accrus liés à l’âge.
            </li>
            <li>
              Il est recommandé de faire régulièrement le point sur vos besoins en matière de santé pour éviter de payer pour des garanties inutiles.
              Privilégiez un remboursement optimal pour les postes de dépenses les plus importants pour vous et limitez la prise en charge des frais de santé secondaires.
            </li>
            <li>
              Utiliser un comparateur de mutuelles en ligne, comme Devis Mutuelle, peut vous aider à trouver une offre adaptée à vos besoins et à votre budget,
              en comparant les garanties et les tarifs de différentes mutuelles seniors.
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
            Quelles sont les meilleures mutuelles pour les seniors ?

            </a>
          </li>
          <li>
            <a href="#section2" className="text-blue-500 hover:underline">
            Comment trouver votre mutuelle senior pas chère ?
            </a>
          </li>
          {isExpanded && (
            <>
              <li>
                <a href="#section3" className="text-blue-500 hover:underline">
                Comparer les prix et les garanties de votre mutuelle senior ?
                </a>
              </li>
              <li>
                <a href="#section5" className="text-blue-500 hover:underline">
                Quel est le prix d'une mutuelle senior ?
                </a>
              </li>
              <li>
                <a href="#section4" className="text-blue-500 hover:underline">
                Comment choisir votre mutuelle pour retraité ? Les garanties indispensables à la mutuelle senior
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
              src={senior} // remplace par l’URL correcte selon ton projet
              alt="Mutuelle entreprise"
              className="w-full h-auto object-cover"
            />
      {/* Sections détaillées */}
      <div className="space-y-10 text-gray-700">
        <section id="section1">
        <ClassementMutuelleSenior/>
        </section>
        <CompareBanner/>
        <section id="section2">
    <MutuelleSeniorInfos/>
        </section>
       
        <CompareBanner/>
    
        <section id="section5">
        <TableauPrixMutuelleSenior/>
        </section>
        <section id="section3">
      <ComparatifMutuelleSenior/>
        </section>
        <section id="section4">
          <GarantiesMutuelleSenior/>
        </section>
        <CompareBanner/>
        <FaqMutuelleSenior/>

         </div>
         </div>
  );
}
