import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import mutuelleImage from "../../assets/dentaire/images/mutuelle-dentaire-meilleurs-remboursements.png"
import { Info } from "lucide-react"; // Icône informative, facultative
import mutuelleIcon from "../../assets/optique/images/download.jpg"; // Remplace par le bon chemin vers ton icône

export default function QuestionsSection() {
  const [isExpanded, setIsExpanded] = useState(true);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const avantages = [
    {
      titre: "Réduire les frais à votre charge",
      description:
        "L’Assurance Maladie rembourse une partie des soins dentaires, mais cela reste souvent insuffisant, notamment pour les prothèses, implants ou orthodontie. Une mutuelle complète ces remboursements pour diminuer, voire supprimer le reste à charge.",
    },
    {
      titre: "Accéder à des soins onéreux",
      description:
        "Les soins spécifiques comme les couronnes, les bridges ou les implants peuvent être très coûteux. Une bonne mutuelle dentaire vous permet de les envisager en toute sérénité.",
    },
    {
      titre: "Anticiper les besoins de votre famille",
      description:
        "Avec une mutuelle dentaire adaptée, vous pouvez couvrir les soins des enfants (orthodontie), des adultes (prothèses) et des seniors (prothèses amovibles, implants).",
    },
    {
      titre: "Bénéficier du 100% Santé",
      description:
        "Avec une mutuelle responsable, vous accédez à des soins dentaires spécifiques sans reste à charge grâce au dispositif 100% Santé.",
    },
    {
      titre: "Prévenir des imprévus",
      description:
        "En cas de problème dentaire soudain (fracture dentaire, carie importante), votre mutuelle vous évite des dépenses imprévues.",
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex text-sm mb-8 text-gray-600">
        <a href="#" className="hover:text-blue-600">Accueil</a>
        <span className="mx-2">›</span>
        <a href="#" className="hover:text-blue-600">Assurance professionnelle</a>
        <span className="mx-2">›</span>
        <span className="text-gray-500">Mutuelle entreprise</span>
      </div>

      <h1 className="text-3xl font-bold text-teal-800 mb-6">

      Mutuelle dentaire : trouvez les meilleurs remboursements pour vos soins dentaires
      </h1>

      <p className="mb-8 text-gray-700">
      Les soins dentaires font partie des dépenses de santé les plus mal prises en charge par
       l’Assurance Maladie. Dans certains cas, ils peuvent même ne pas être remboursés du tout. C’est pourquoi souscrire 
       <a href="#" className="text-blue-500 hover:underline"> une mutuelle santé</a>,
     vous permet de réduire les coûts de vos rendez-vous chez le dentiste. 
    </p>

      {/* Sommaire */}
    
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

      <div className="bg-teal-50 p-4 rounded-md border border-teal-200">
          <p className="font-semibold mb-2">Ce qu'il faut retenir :</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
  <li>
    Les soins dentaires sont souvent mal remboursés par l'Assurance Maladie, à hauteur de 60%. Une mutuelle dentaire adaptée permet de réduire votre reste à charge pour ces soins notamment pour les prothèses, les implants ou l'orthodontie.
  </li>
  <li>
    Les prix des soins dentaires peuvent être très élevés, avec des prothèses allant jusqu'à 5000€. Une complémentaire santé adaptée est indispensable pour couvrir vos dépenses.
  </li>
  <li>
    Certaines prothèses et couronnes sont prises en charge intégralement grâce au dispositif du 100% Santé.
  </li>
  <li>
    Le choix d'une mutuelle dentaire doit se baser sur le niveau de remboursement proposé en tenant compte de vos besoins pour les soins dentaires.
  </li>
</ul>

        </div>
      <h2 className="text-2xl font-bold text-teal-700 mb-4">Quel est l'intérêt d'avoir une mutuelle dentaire ?</h2>

        <p className="mb-4">
        Souscrire une mutuelle dentaire permet de mieux gérer les
         coûts souvent élevés des soins
         dentaires et d'accéder 
        à des soins de qualité sans impacter votre budget. 
        Voici les principaux avantages :
        </p>
        <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <ol className="space-y-2">
        {avantages.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">{index + 1}.</span>
            <div>
              <span className="font-semibold text-[#00558C]">{item.titre}</span>
              <span className="text-gray-700"> : {item.description}</span>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-gray-700">
        Avec votre mutuelle dentaire, vous pouvez investir dans votre santé bucco-dentaire tout en maîtrisant votre budget, et assurer une prise en charge adaptée à vos besoins actuels et futurs.
      </p>
    </div>

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
      </section>
      </div>
      </section>
        </div>
      </div>
  );
}
