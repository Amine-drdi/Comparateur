import { ChevronDown } from 'lucide-react';
import { SetStateAction, useState } from 'react';
import mutuelleImage from "../../assets/orthodontie/images/mutuelle-orthodontie.png"
import { Info } from "lucide-react"; // Icône informative, facultative
import mutuelleIcon from "../../assets/optique/images/download.jpg"; 
import {TableauMutuelleOrthodontie} from "../../assets/orthodontie/data/TableauMutuelleOrthodontie"
import FAQOrthodontie from './FAQOrthodontie';
import OrthodontieMutuelle from './OrthodontieMutuelle';
const faqData = [
  {
    question: "Pourquoi devez-vous souscrire une mutuelle orthodontie ?",
    answer:
      "Si vous avez besoin de soins orthodontiques mais que votre budget ne vous le permet pas, la mutuelle santé peut indemiser tout ou partie du tarif que vous avez à payer. En effet, souscrire une mutuelle orthodontie vous permet de prendre en charge les frais que ne paie pas la Sécurtié Sociale. Cette complémentaire santé prend alors en charge le ticket modérateur, c'est-à-dire la tarif de convention qui reste à votre charge une fois que le remboursement de l'Assurance Maladie a eu lieu.",
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);


  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };


  const toggle = (index: number) => {
    setActiveIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex text-sm mb-8 text-gray-600">
        <a href="#" className="hover:text-blue-600">Accueil</a>
        <span className="mx-2">›</span>
        <a href="#" className="hover:text-blue-600">Mutuelle santé </a>
        <span className="mx-2">›</span>
        <span className="text-gray-500">Les garanties principales  : Dentaire </span>
        Mutuelle orthodontie adulte : trouvez une mutuelle pas chère qui rembourse bien
      </div>

      <h1 className="text-3xl font-bold text-teal-800 mb-6">
      Mutuelle orthodontie adulte : trouvez une mutuelle pas chère qui rembourse bien
        </h1>

      <p className="mb-8 text-gray-700">
    
      
      À partir de 16 ans les soins orthodontiques ne sont plus pris en charge par
       l'Assurance Maladie. Si vous avez besoin d'un appareil dentaire, 
       <a href="#" className="text-blue-500 hover:underline">une mutuelle santé </a>
        peut prendre en charge tout
       ou partie de vos soins si vous avez souscrit un contrat qui
        prend en charge ces dépenses.


        
      </p>

      {/* Sommaire */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold text-teal-800 mb-4">Sommaire</h2>

        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <a href="#section1" className="text-blue-500 hover:underline">
            Pourquoi devez-vous souscrire une mutuelle orthodontie ?
            </a>
          </li>
          <li>
            <a href="#section2" className="text-blue-500 hover:underline">
            Quels sont les remboursements de l'orthodontie pour les soins d'un adulte ou d'un enfant ?
            </a>
          </li>
          {isExpanded && (
            <>
              <li>
                <a href="#section3" className="text-blue-500 hover:underline">
                Comment choisir la meilleure mutuelle orthodontie pour un adulte ou un enfant ?
                </a>
              </li>
              <li>
                <a href="#section4" className="text-blue-500 hover:underline">
                Bien comparer les offres de mutuelles pour orthodontie
                </a>
              </li>
              <li>
                <a href="#section5" className="text-blue-500 hover:underline">
                Comparatif de mutuelles orthodontie:
                </a>
              </li>
              <li>
                <a href="#section6" className="text-blue-500 hover:underline">
                Qu'est-ce que l'orthodontie ?
                </a>
              </li>
              <li>
                <a href="#section7" className="text-blue-500 hover:underline">
                Tout savoir sur la mutuelle santé pour les soins d'orthodontie
                </a>
              </li>
              <li>
                <a href="#section8" className="text-blue-500 hover:underline">
                Foire aux questions
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
              src={mutuelleImage} // remplace par l’URL correcte selon ton projet
              alt="Mutuelle entreprise"
              className="w-full h-auto object-cover"
            />
      {/* Sections détaillées */}
      <div className="space-y-10 text-gray-700">
        <section id="section1">
        <section className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h2 className="text-xl md:text-2xl font-bold text-teal-900 mb-4">
        Pourquoi devez-vous souscrire une mutuelle orthodontie ?
      </h2>

      <p className="mb-4">
        Si vous avez besoin de soins orthodontiques mais que votre budget ne vous le permet pas, la mutuelle santé peut indemniser tout ou partie du tarif que vous avez à payer.
      </p>

      <p>
        En effet, souscrire une mutuelle orthodontie vous permet de prendre en charge les frais que ne paie pas la Sécurité Sociale.
        Cette complémentaire santé prend alors en charge le ticket modérateur, c’est-à-dire le tarif de convention qui reste à votre charge
        une fois que le remboursement de l’Assurance Maladie a eu lieu.
      </p>
    </section>
        </section>

        <section id="section2" className="max-w-5xl mx-auto px-4 py-8 text-gray-800">
      <h2 className="text-xl md:text-2xl font-bold text-teal-900 mb-4">
        Quels sont les remboursements de l'orthodontie pour les soins d'un adulte ou d'un enfant ?
      </h2>

      <p className="mb-4">
        Vous avez tout intérêt à profiter des remboursements d'une mutuelle orthodontie adulte si vous avez besoin d’un traitement orthodontique.
        Cette complémentaire santé vous indemnisera sur les mêmes bases qu'une mutuelle pour l'orthodontie enfant.
        C’est-à-dire qu’elle prend en charge le tarif de convention que la Sécurité Sociale ne rembourse plus après vos 16 ans.
      </p>

      <p>
        Grâce à la mutuelle orthodontie adulte, vous pourrez fortement alléger votre reste à charge sans avoir à renoncer à une partie de vos soins en orthodontie.
        Vous pourrez compter sur un remboursement conséquent par votre mutuelle, de l'ordre de plusieurs centaines d'euros pour un traitement,
        même si la Sécurité Sociale ne prend rien en charge.
      </p>
    </section>

        <section id="section3">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-10 space-y-6 text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-teal-900">
        Comment choisir la meilleure mutuelle orthodontie pour un adulte ou un enfant ?
      </h1>

      <p>
        Plus longs et plus chers que pour les enfants, les soins orthodontie adulte ne sont pas du tout pris en charge par l’Assurance Maladie.
        Pour bénéficier de la meilleure couverture possible, vous devez être particulièrement vigilant quand aux taux de remboursements
        que propose votre mutuelle pour les actes non pris en charge par l’Assurance Maladie.
      </p>

      <p>
        Pour trouver la meilleure mutuelle orthodontie, n’hésitez pas à utiliser un comparateur de mutuelles santé comme Lesfurets !
        Vous mettrez facilement en concurrence :
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>Les tarifs</li>
        <li>Les délais de carence</li>
        <li>Les taux de remboursement</li>
        <li>Les plafonds</li>
        <li>Les franchises</li>
        <li>Les options</li>
        <li>Les exclusions de garantie.</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-900 p-4 rounded-md">
        <p>
          Si vos enfants ont besoin de porter un appareil dentaire, nous vous conseillons de souscrire une mutuelle santé avec des taux
          de remboursement compris entre <strong>200 et 300%</strong> pour l'orthodontie (moins de 16 ans).
        </p>
      </div>

      <p>
        Pour trouver la mutuelle orthodontie la plus adaptée aux besoins de votre famille et au meilleur prix,
        la solution la plus efficace reste donc de comparer les offres des différents assureurs avant de souscrire !
      </p>

      <p>
        Et pour vous donner une première idée des prix de votre prochaine mutuelle dentaire, voici les 10 mutuelles santé les moins chères
        parmi nos partenaires sur le poste de soins dentaire :
      </p>
    </div>
        </section>

        <section id="section4">
        <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-gray-800">
        <h2 className="text-3xl font-bold text-teal-900 mb-6">
          Bien comparer les offres de mutuelles pour orthodontie
        </h2>

        <p className="mb-4">
          L’orthodontie étant en général très chère, il convient de trouver une mutuelle orthodontie pour adulte ou pour enfant
          qui vous proposera les garanties les plus complètes et les meilleurs remboursements au tarif le moins cher.
        </p>

        <p className="mb-4">
          En effet, les remboursements de vos soins d’orthodontie peuvent varier considérablement d’une mutuelle à l’autre.
          La comparaison vous aide donc à faire le bon choix.
        </p>

        <p className="mb-4">
          Le comparateur de mutuelles orthodontie <strong>lesfurets</strong> vous sera d’une grande aide, puisqu’il est :
        </p>

        <ul className="list-decimal list-inside space-y-1 pl-2 mb-6 text-gray-700 font-medium">
          <li>Rapide</li>
          <li>Gratuit</li>
          <li>100% indépendant</li>
          <li>Sans engagement</li>
          <li>Accessible 24h/24, 7j/7</li>
        </ul>

        <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl shadow-sm text-blue-900 text-sm md:text-base">
          Grâce au comparateur en ligne lesfurets, trouvez en 5 minutes, la complémentaire santé qui rembourse les soins
          dentaires et les frais d’orthodontie, pour répondre au mieux à vos besoins de prise en charge.
        </div>
      </div>
    </section>
        </section>

        <section id="section5">
        <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-6">
          Comparatif de mutuelles orthodontie
        </h2>

        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="min-w-full text-sm md:text-base text-left text-gray-700">
            <thead className="bg-blue-50 text-blue-900 font-semibold">
              <tr>
                <th className="px-4 py-3">Mutuelle</th>
                <th className="px-4 py-3">Orthodontie remboursée</th>
                <th className="px-4 py-3">Orthodontie (non conventionnée)</th>
                <th className="px-4 py-3">Prothèses remboursées</th>
                <th className="px-4 py-3">Prothèses (non conventionnées)</th>
                <th className="px-4 py-3">Implants</th>
              </tr>
            </thead>
            <tbody>
              {TableauMutuelleOrthodontie.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                  <td className="px-4 py-3 font-medium">{row.mutuelle}</td>
                  <td className="px-4 py-3">{row.ortho}</td>
                  <td className="px-4 py-3">{row.orthoNonConv}</td>
                  <td className="px-4 py-3">{row.protheses}</td>
                  <td className="px-4 py-3">{row.prothesesNonConv}</td>
                  <td className="px-4 py-3">{row.implants}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-600 mt-4 italic">
          Ce comparatif a été réalisé à partir des 6 premiers résultats d'une comparaison de mutuelles santé effectuée sur lesfurets le 21/11/2023.
          Le profil utilisé est celui d'une femme née en 1980, de profession libérale, habitant à Lunéville et demandant un remboursement minimum
          dans les soins courants, l'hospitalisation et l'optique ainsi qu'un remboursement maximal des soins dentaires.
          Les données sont données à titre indicatif et ne constituent pas une obligation.
        </p>
      </div>
    </section>
        </section>

        <section id="section6">
        <section className="bg-white py-14 px-4">
      <div className="max-w-5xl mx-auto text-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-6">
          Qu’est-ce que l’orthodontie ?
        </h2>

        <p className="mb-4">
          Si vous ne savez pas à quoi correspond exactement l’orthodontie voici quelques réponses à vos questions.
        </p>

        <p className="mb-4">
          L’orthodontie est un ensemble de soins qui permettent de contraindre la mâchoire et les dents à se mettre bien en place.
          Elle effectue une pression importante via un appareillage spécifique, amovible ou fixe, qu’il s’agisse 
          <strong> d’appareils dentaires 
res</strong> ou de <strong>bagues</strong>.
        </p>

        <p className="mb-4">
          Vous pouvez avoir besoin d’un traitement d’orthodontie si vous rencontrez des soucis au niveau de la disposition de votre dentition.
          Autrefois réservée uniquement aux enfants et aux adolescents, <strong className="text-blue-800">l’orthodontie s’adresse de plus en plus aux adultes pour des raisons de confort ou d’esthétisme</strong>.
        </p>

        <p className="mb-3">Les traitements d’orthodontie se divisent en 3 catégories :</p>

        <ul className="list-disc list-inside space-y-2 text-blue-800 font-medium">
          <li>
            <span className="text-gray-700 font-normal">
              <strong>Les traitements préventifs</strong> : à destination des enfants à partir de 7 ans en cas d’anomalie de la mâchoire ou de déformation du palais
            </span>
          </li>
          <li>
            <span className="text-gray-700 font-normal">
              <strong>Les traitements de denture permanente</strong> : à partir de 11 ans, c’est-à-dire après la naissance des dents définitives
            </span>
          </li>
          <li>
            <span className="text-gray-700 font-normal">
              <strong>Les traitements orthodontiques de l’adulte</strong> : réalisés pour des raisons esthétiques (
              <span className="text-blue-600 underline">appareils dentaires adultes</span>) ou en raison de problèmes aux gencives.
            </span>
          </li>
        </ul>
      </div>
    </section>
        </section>

        <section id="section7">
        <OrthodontieMutuelle/>
        </section>
        <section id="section8">
          
        <FAQOrthodontie/>
        </section>
      </div>
{/* Sujets liés */}
{/* Sujets liés */}
<div className="bg-gray-50 py-10 px-6 rounded-lg shadow-md mt-16">
  <h2 className="text-2xl font-bold text-teal-800 mb-6">
    Mutuelle entreprise : <span className="text-teal-800">les sujets liés</span>
  </h2>
  <ul className="space-y-2 text-teal-800 text-base font-medium">
    <li className="flex items-start">
      <span className="text-teal-600 mr-2 mt-1">•</span>
      <a href="#" className="hover:underline hover:text-teal-600">
        Assurance multirisque professionnelle
      </a>
    </li>
    <li className="flex items-start">
      <span className="text-teal-600 mr-2 mt-1">•</span>
      <a href="#" className="hover:underline hover:text-teal-600">
        Assurance responsabilité civile professionnelle
      </a>
    </li>
    <li className="flex items-start">
      <span className="text-teal-600 mr-2 mt-1">•</span>
      <a href="#" className="hover:underline hover:text-teal-600">
        Garantie décennale
      </a>
    </li>
  </ul>
</div>


    
    </div>
  );
}
