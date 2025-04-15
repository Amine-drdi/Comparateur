import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import mutuelleImage from "../../assets/optique/images/mutuelle-optique.png"
import { Info } from "lucide-react"; // Icône informative, facultative
import mutuelleIcon from "../../assets/optique/images/download.jpg"; // Remplace par le bon chemin vers ton icône
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
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex text-sm mb-8 text-gray-600">
        <a href="#" className="hover:text-blue-600">Accueil</a>
        <span className="mx-2">›</span>
        <a href="#" className="hover:text-blue-600">Assurance professionnelle</a>
        <span className="mx-2">›</span>
        <span className="text-gray-500">Mutuelle entreprise</span>
      </div>

      <h1 className="text-3xl font-bold text-teal-800 mb-6">Comparaison de mutuelles optiques</h1>

      <p className="mb-8 text-gray-700">
      La couverture des soins optiques est un critère important dans le choix de 
      <a href="#" className="text-blue-500 hover:underline"> votre mutuelle santé</a>,
       surtout si vous portez des lunettes ou des lentilles. Les frais liés aux équipements optiques 
       peuvent, en effet, vite augmenter et les garanties proposées varient considérablement 
       d’une mutuelle à l’autre. Alors quelle mutuelle choisir pour un remboursement optimal
        de vos frais d’optique ? lesfurets vous accompagnent dans la comparaison des offres 
        afin de trouver la couverture la mieux adaptée à vos besoins optiques.


        
      </p>

      {/* Sommaire */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold text-teal-800 mb-4">Sommaire</h2>

        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <a href="#section1" className="text-blue-500 hover:underline">
            Qu’est-ce qui est couvert par la garantie optique d’une mutuelle ?
            </a>
          </li>
          <li>
            <a href="#section2" className="text-blue-500 hover:underline">
            Comparaison des meilleures mutuelles optiques en 2024
            </a>
          </li>
          {isExpanded && (
            <>
              <li>
                <a href="#section3" className="text-blue-500 hover:underline">
                Comment comparer les mutuelles optiques ?
                </a>
              </li>
              <li>
                <a href="#section4" className="text-blue-500 hover:underline">
                Trouver votre mutuelle optique avec LNR Finance
                </a>
              </li>
              <li>
                <a href="#section5" className="text-blue-500 hover:underline">
                Foire aux questions sur les garanties optiques :
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
      <h2 className="text-2xl font-bold text-teal-700 mb-4">Qu’est-ce qui est couvert par la garantie optique d’une mutuelle ?</h2>

        <p className="mb-4">
          Les mutuelles santé incluent une garantie optique qui couvre le plus souvent les frais de lunettes (monture + verres), les lentilles de contact, et les consultations ophtalmologiques.
        </p>
        <p className="mb-4">
          Concernant la prise en charge, elles proposent des remboursements sous forme de montants forfaitaires pour :
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li>La monture (jusqu’à 100€ pour un contrat responsable)</li>
          <li>Les verres, qu’ils soient simples ou complexes</li>
          <li>Les lentilles de contact</li>
        </ul>

        <div className="bg-teal-50 p-4 rounded-md border border-teal-200">
          <p className="font-semibold mb-2">Bon à savoir :</p>
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li>Le montant pris en charge par une mutuelle pour lunettes se divise toujours entre la monture et les verres</li>
            <li>Le montant de remboursement des lunettes se calcule verre par verre</li>
            <li>Concernant les lentilles, les assurances privilégient un forfait global à l’année</li>
          </ol>
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
          <h2 className="text-2xl font-bold text-teal-700 mb-4">Comparaison des meilleures mutuelles optiques en 2024</h2>
          <p>
          En 2024, les besoins en santé visuelle restent au cœur des préoccupations des assurés. 
          Face à la hausse des frais optiques, il devient essentiel de choisir une mutuelle offrant 
          un bon niveau de remboursement pour les lunettes, lentilles ou encore la chirurgie réfractive.
           Parmi les meilleures offres du marché, certaines mutuelles comme Apivia, Alan ou Harmonie Mutuelle
            se distinguent par des forfaits généreux, une prise en charge rapide et des services digitaux 
            simplifiés. Chez LRN Finance, nous comparons ces formules de façon transparente afin de vous 
            aider à choisir celle qui vous correspond vraiment,
           selon vos besoins, votre budget et votre fréquence de renouvellement optique.
          </p>
        </section>

        <section id="section3">
          <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Section principale */}
      <section>
      <h2 className="text-2xl font-bold text-teal-700 mb-4">Comment comparer les mutuelles optiques ?</h2>

        <p className="text-gray-700 mb-4">
          Pour choisir la couverture la plus adaptée à vos besoins, il est nécessaire de bien définir vos attentes et de comparer les garanties optiques proposées par différentes complémentaires santé.
        </p>

        <p className="text-gray-800 font-semibold mb-2">Voici les principaux critères à prendre en compte :</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <span className="font-semibold text-teal-800">Couverture des équipements hors 100% santé :</span> si vous choisissez des lunettes hors 100% santé, vérifiez que votre mutuelle santé propose des forfaits adaptés.
          </li>
          <li>
            <span className="font-semibold text-teal-800">Prise en charge des lentilles :</span> assurez-vous d’avoir un forfait pour les lentilles non couvertes par l’Assurance Maladie. Les forfaits lentilles varient souvent de 100€ à 200€ par an.
          </li>
          <li>
            <span className="font-semibold text-teal-800">Chirurgie réfractive :</span> certaines complémentaires incluent un forfait pour les interventions liées à la myopie, à la presbytie, ou à d’autres problèmes oculaires.
          </li>
          <li>
            <span className="font-semibold text-teal-800">Périodicité de renouvellement des équipements :</span> prenez en compte la fréquence de renouvellement des équipements pour vous et vos enfants.
          </li>
          <li>
            <span className="font-semibold text-teal-800">Réseau de soins optiques partenaires :</span> certaines mutuelles offrent des remises supplémentaires si vous choisissez des opticiens partenaires, comme Kalixia optique.
          </li>
          <li>
            <span className="font-semibold text-teal-800">Tiers payant :</span> privilégiez une mutuelle avec tiers payant pour éviter l’avance de frais.
          </li>
          <li>
            <span className="font-semibold text-teal-800">Le délai de carence :</span> optez pour une mutuelle santé sans délai de carence si vous avez besoin rapidement d’équipements optiques.
          </li>
        </ul>
      </section>

      {/* Bon à savoir */}
      <aside className="bg-teal-50 border border-teal-200 rounded-lg p-4 flex items-start space-x-4">
        <div className="text-teal-600 mt-1">
          <Info className="w-6 h-6" />
        </div>
        <div>
          <p className="font-semibold text-teal-800 mb-1">Bon à savoir :</p>
          <p className="text-gray-700">
            Si vous avez besoin de lunettes, de lentilles ou d’une opération de chirurgie réfractive, votre ophtalmo ou votre opticien doit vous proposer un devis et adresser une demande de prise en charge à votre mutuelle pour que vous sachiez exactement combien vos équipements ou votre opération vont vous coûter.
          </p>
        </div>
      </aside>
    </div>
        </section>

        <section id="section4">
          <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Titre */}
      <h2 className="text-2xl font-bold text-teal-900">
        Trouver votre mutuelle optique avec LNR Finance
      </h2>

      {/* Paragraphe d'introduction */}
      <p className="text-gray-700">
        Pour optimiser votre couverture de soins optiques, la souscription à une mutuelle santé est indispensable. 
        Pour trouver les{" "}
        <a href="#" className="text-teal-600 underline hover:text-teal-800">
          meilleures garanties optiques
        </a>
        , vous pouvez comparer les mutuelles en ligne avec lesfurets.com. Simple, rapide et efficace, notre comparateur analyse pour vous les offres du marché et vous propose uniquement des formules de mutuelle optique adaptées à vos besoins et à votre budget, pour une couverture santé à la fois abordable et complète.
      </p>

      {/* Bloc call-to-action */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-blue-100 border border-blue-300 rounded-lg p-4 md:p-6 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          {/* Icône */}
          <img src={mutuelleIcon} alt="Icône mutuelle" className="w-10 h-10" />

          {/* Texte */}
          <p className="text-blue-900 font-semibold">
            Je trouve la meilleure complémentaire santé selon mes besoins et mon budget
          </p>
        </div>

        {/* Bouton */}
        <a href='/compare' className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-md transition-colors">
          Je compare
        </a>
      </div>
    </div>
        </section>

        <section id="section5">
          <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-teal-900 mb-6">
        Foire aux questions sur les garanties optiques :
      </h2>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-gray-300 rounded-md">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-4 py-3 font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none flex justify-between items-center"
            >
              {item.question}
              <span className="text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-4 pb-4 text-gray-700">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
        </section>

        <section id="section6">
          <h2 className="text-2xl font-bold text-teal-700 mb-4">Quelles sont les personnes concernées ?</h2>
          <p>
            Elle concerne les salariés du privé, tous secteurs et tailles confondus. 
            Les travailleurs indépendants et le public ne sont pas concernés. 
            Les ayants droit (conjoint, enfants jusqu’à 26 ans, sans limite pour les enfants handicapés) peuvent être rattachés.
          </p>
        </section>

        <section id="section7">
          <h2 className="text-2xl font-bold text-teal-700 mb-4">Pourquoi utiliser notre comparateur de mutuelle d’entreprise ?</h2>
          <p>
          Il est très difficile de donner une moyenne de tarif d’une mutuelle de groupe obligatoire, tant les paramètres à prendre en compte sont nombreux.

Voilà pourquoi demander des devis sur un comparateur de mutuelle entreprise est une excellente idée. Le comparateur lesfurets vous permettra de voir, d’un coup d’œil, les meilleures offres du marché pour trouver la meilleure mutuelle entreprise.

Certains assureurs vous demandent de les contacter par téléphone, mail ou en vous rendant directement en agence, ce qui fait perdre du temps ! lesfurets vous propose un outil de devis en ligne simple, puissant et qui vous fera faire des économies.

Il suffit de répondre à un questionnaire unique, et vous obtenez en 2 minutes des devis de mutuelle entreprise.

Il est obligatoire, pour tout employeur, de souscrire une mutuelle entreprise pour chacun de ses salariés. En contrepartie, il bénéficie d’avantages fiscaux. Pour les employés, les bénéfices sont indéniables aussi : la mutuelle obligatoire est un moyen d’être bien couvert à petit prix.
          </p>
        </section>
        <section id="section8">
          <h2 className="text-2xl font-bold text-teal-700 mb-4">Les guides et actualités assurance professionnelle
          </h2>
          <p>
          Retrouvez nos guides conseils ainsi que les dernières actualités du monde de l'assurance professionnelle.
          </p>
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
