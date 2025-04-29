import { ChevronDown } from 'lucide-react';
import { SetStateAction, useState } from 'react';
import mutuelleImage from "../../assets/expatries/images/expatries-assurance-mutuelle-sante.png"
import { Info } from "lucide-react"; // Icône informative, facultative
import lion from "../../assets/expatries/images/lion.png"; // Remplace par le bon chemin vers ton icône
import ExpatHealthInfo from './ExpatHealthInfo';
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
 // const [activeIndex, setActiveIndex] = useState(null);
 const [activeIndex, setActiveIndex] = useState<number | null>(null);


  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex text-sm mb-8 text-gray-600">
        <a href="#" className="hover:text-blue-600">Accueil</a>
        <span className="mx-2">›</span>
        <a href="#" className="hover:text-blue-600">Mutuelle sante/ Profil /Cas particulier</a>
        <span className="mx-2">›</span>
        <span className="text-gray-500">Assurance santé expatrié : comment bien se couvrir à l’étranger ?</span>
      </div>

      <h1 className="text-3xl font-bold text-teal-800 mb-6">Assurance santé expatrié : comment bien se couvrir à l’étranger ?</h1>

      <ExpatHealthInfo/>

      {/* Sommaire */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold text-teal-800 mb-4">Sommaire</h2>

        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <a href="#section1" className="text-blue-500 hover:underline">
            Une assurance santé expatrié en fonction de votre statut
            </a>
          </li>
          <li>
            <a href="#section2" className="text-blue-500 hover:underline">
            Qu'est-ce qu'un statut d'expatrié exactement ?
            </a>
          </li>
          {isExpanded && (
            <>
              <li>
                <a href="#section3" className="text-blue-500 hover:underline">
                Quelle mutuelle expatrié choisir ?
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
          <div className="max-w-5xl mx-auto px-6 py-10 space-y-10 text-gray-800">

      {/* Section 1 */}
      <section>
      <h2 className="text-2xl font-bold text-teal-700 mb-4">Une assurance santé expatrié en fonction de votre statut</h2>
      <div className="text-gray-700 text-sm space-y-4">
      <p>
        Les solutions de complémentaires santé pour expatriés diffèrent selon votre statut.
      </p>

      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Vous êtes travailleur détaché :</strong> vous conservez le statut de salarié de votre entreprise en France. Votre salaire est assuré par votre société, par laquelle vous restez affilié de fait à la Sécurité sociale française pendant votre mission hors du pays. Généralement, votre société vous proposera une solution pour couvrir vos frais de santé durant votre détachement à l’étranger. Cela peut se faire par la <span className="text-blue-600 hover:underline cursor-pointer">mutuelle santé</span> de l’entreprise déjà mise en place. Un contrat spécifique pour les salariés détachés peut aussi être instauré. Pour compléter cette couverture, vous pouvez souscrire une assurance santé complémentaire internationale.
        </li>

        <li>
          <strong>Vous êtes expatrié :</strong> vous n’êtes plus affilié à l’Assurance Maladie française. Avant de partir, vérifiez si votre nouveau pays de résidence a signé une convention particulière avec la Sécurité sociale française. Dans tous les cas, vous restez dépendant du système de Sécurité sociale du pays d’accueil. Attention : les régimes diffèrent souvent du système français. La couverture de certains frais (optiques, dentaires, hospitalisations...) peut être très faible. C’est pourquoi il est vivement conseillé de souscrire avant son départ une assurance santé expatrié. Vous pouvez aussi vous affilier individuellement et volontairement à la Caisse des Français de l’Étranger (CFE). Cet organisme d’assurance santé pour expatriés couvre les risques liés à la maladie, la maternité, l’invalidité, les accidents du travail et maladies professionnelles.
        </li>
      </ul>
    </div>
      </section>

      {/* Section 2 */}
      <section>
        <p className="mb-4">
          Le niveau de couverture dépend de la formule souscrite : vous pouvez choisir une assurance santé de base ou un contrat offrant des renforts optiques pour des remboursements plus élevés.
        </p>
        <p className="mb-4">
          Certaines mutuelles prennent également en charge des actes spécialisés comme la chirurgie réfractive ou des prothèses oculaires.
        </p>
        <p className="mb-4">
          Si vous avez besoin de garanties pour les soins optiques dans votre contrat de mutuelle santé, voici les garanties indispensables, utiles ou complémentaires à prendre en compte :
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="font-bold mb-2">Garanties indispensables</h3>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>100% Santé</li>
              <li>Consultation ophtalmologue et orthoptiste</li>
              <li>Montures + verres simples hors 100% Santé</li>
              <li>Montures + verres complexes hors 100% Santé</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="font-bold mb-2">Garanties utiles</h3>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Forfait lentilles</li>
              <li>Chirurgie réfractive</li>
              <li>Prothèse oculaire</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="font-bold mb-2">Garanties complémentaires</h3>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Dépassements d’honoraires des médecins spécialistes</li>
              <li>Actes d’imagerie et analyse médicales</li>
              <li>Hospitalisation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section>
        <h2 className="text-xl font-bold text-teal-900 mb-4">
          Que rembourse la Sécurité Sociale sur vos lunettes, vos lentilles ou sur la chirurgie réfractive ?
        </h2>
        <p className="mb-4">
          Pour le remboursement de vos lunettes, la Sécurité sociale ne fait plus de distinction entre les moins et plus de 18 ans, depuis l’entrée en vigueur de la réforme 100% santé le 1er janvier 2020.
        </p>

        <p className="mb-4 font-semibold">Les remboursements sont divisés selon deux options :</p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>
            <strong>Le panier 100% santé :</strong> il vous permet d’accéder à des équipements optiques sans reste à charge, incluant des montures standards et certains verres.
          </li>
          <li>
            <strong>Le secteur à prix libres :</strong> pour les équipements optiques hors panier 100% santé, les remboursements sont limités, la Sécurité sociale prend en charge uniquement 60% du tarif conventionnel, soit un remboursement de 0,03€ sur une base de 0,05€.
          </li>
        </ul>

        <p className="mb-4">
          Pour le <strong>remboursement de vos lentilles</strong>, la Sécurité sociale ne propose une prise en charge qu’en cas de pathologies spécifiques, à hauteur de 60% sur la base d’un forfait annuel de 39,48€ par œil appareillé.
        </p>
        <p className="mb-4">
          La chirurgie réfractive, quant à elle, n’est généralement pas remboursée par l’Assurance Maladie.
        </p>
      </section>

      {/* Section 4 */}
      <section>
        <h2 className="text-xl font-bold text-teal-900 mb-4">
          Est-ce que le 100% santé permet d’avoir une mutuelle optique pas chère ?
        </h2>
        <p className="mb-4">
          Le 100% santé permet d’obtenir des équipements optiques (monture et verres) sans reste à charge pour des modèles de montures standards et certains types de verres.
        </p>
        <p className="mb-4">
          Grâce à cette réforme, les lunettes sont intégralement remboursées par la Sécurité sociale et la mutuelle pour les personnes bénéficiant d’un contrat de complémentaire santé responsable.
        </p>
        <p className="mb-4">
          Tous les opticiens ont l’obligation de proposer un panier 100% santé, incluant au moins 17 montures en deux coloris différents pour les adultes et 10 pour les enfants, avec des montures ne dépassant pas 30€.
        </p>
        <p className="mb-4">
          Les verres doivent être amincis, anti-rayures, anti-reflets et adaptés aux troubles visuels courants (astigmatisme, myopie...). Le plafond de remboursement maximal pour les verres est fixé à 235€ en cas de corrections unifocales importantes, et à 340€ pour les verres progressifs.
        </p>
        <p>
          Ce dispositif <strong className="text-teal-600 underline">100% santé optique</strong> est particulièrement adapté aux profils cherchant à minimiser les dépenses tout en couvrant leurs besoins de base. Cependant, pour des équipements de qualité supérieure, il est conseillé de choisir une mutuelle offrant un bon rapport qualité-prix pour les équipements optiques.
        </p>
      </section>
    </div>
        </section>

        <section id="section2">
          <h2 className="text-2xl font-bold text-teal-700 mb-4">Qu'est-ce qu'un statut d'expatrié exactement ?</h2>
          <div className="text-gray-700 text-sm space-y-4">
      <p>
        La <span className="text-blue-600 hover:underline cursor-pointer">Sécurité sociale</span> française distingue plusieurs profils d’expatriés selon la durée du séjour à l’étranger et le statut de l’entreprise employeuse :
      </p>

      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Travailleur détaché :</strong> vous partez à l’étranger pour une durée limitée (jusqu’à 36 mois, renouvelable une fois), tout en restant affilié au régime français.
        </li>
        <li>
          <strong>Travailleur expatrié :</strong> vous êtes envoyé pour une durée indéterminée avec un contrat local. Vous accédez aux droits sociaux du pays hôte comme tout autre salarié.
        </li>
        <li>
          <strong>Embauche locale :</strong> si vous êtes recruté directement à l’étranger, vous relevez automatiquement du régime social local avec le statut d’expatrié.
        </li>
      </ul>
    </div>
        </section>

        <section id="section3">
          <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Section principale */}
      <section>
      <section className="text-gray-700 text-sm space-y-6">
      {/* Titre */}
      <h2 className="text-2xl font-bold text-teal-900">Quelle mutuelle expatrié choisir ?</h2>

      {/* Paragraphe intro */}
      <p>
        Faire appel à un <span className="text-blue-600 hover:underline cursor-pointer">comparateur de prix de mutuelle expatrié</span> reste la meilleure solution pour trouver la mutuelle adaptée à votre situation.
        Plusieurs critères sont à prendre en compte avant de faire votre choix :
      </p>

      {/* Liste des critères */}
      <ul className="list-disc pl-5 space-y-1 text-gray-800">
        <li>le tiers payant hospitalier mondial,</li>
        <li>l’accès ou non à un centre d’appel multilingue,</li>
        <li>la possibilité d’accompagnement dans les procédures médicales,</li>
        <li>le remboursement des frais médicaux dans la devise de votre choix,</li>
        <li>les garanties d’assistance rapatriement.</li>
      </ul>

      {/* Paragraphe complémentaire */}
      <p>
        Certaines mutuelles santé pour expatriés peuvent même vous proposer des formules dites « au premier euro ». Ce type d’assurance santé expatrié vous permettra d’être remboursé de chaque euro dépensé.
      </p>

      {/* Encadré conseil */}
      <div className="bg-blue-50 p-4 rounded-md border border-blue-100 flex items-start gap-4">
        <img 
        src={lion} 
        alt="François conseil" className="w-16 h-16 object-contain" />
        <div>
          <p className="font-bold text-blue-700">Le conseil de François !</p>
          <p>
            Avec la CFE, <span className="font-semibold text-blue-800">vous bénéficiez de remboursements calqués sur la Sécurité sociale française et vous réintégrez immédiatement le régime général à votre retour</span>.
            Seul bémol : la souscription à la CFE ne vous dispense pas du paiement des cotisations de l’assurance maladie du pays d’accueil.
          </p>
        </div>
      </div>
    </section>
      </section>

   
    </div>
        </section>

     

      </div>



    
    </div>
  );
}
