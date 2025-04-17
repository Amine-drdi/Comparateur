import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function FaqDentaires() {
  const [openIndex, setOpenIndex] = useState(0); // 0 = première question ouverte par défaut

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: "Comment changer de mutuelle dentaire ?",
      answer: (
        <>
          <p className="mb-2">
            Si vous souhaitez une <strong>complémentaire santé avec de meilleures garanties dentaires</strong>,
            vous pouvez changer de mutuelle. Pour cela, rien de plus simple :
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>
              Choisissez une meilleure mutuelle. Vous pouvez vous aider d’un comparateur d’assurances pour aller
              plus vite et faire des économies.
            </li>
            <li>
              <Link
                to="/resiliation"
                className="text-blue-600 hover:underline font-medium"
              >
                Résiliez votre ancienne mutuelle
              </Link>{" "}
              en envoyant un courrier recommandé avec accusé de réception 2 mois au moins avant la date
              d’anniversaire du contrat.
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "Comment calculer le remboursement de mes frais dentaires ?",
      answer: (
        <>
         <div className="max-w-3xl mx-auto text-gray-800 text-sm leading-relaxed space-y-4 p-4">
      <p>
        Quand vous allez chez le <strong>dentiste</strong>, la Sécurité sociale et la mutuelle prennent
        généralement des frais en charge. La consultation, par exemple, est remboursée à 60% du tarif
        conventionnel de 23€. Si le docteur ne pratique pas de dépassement d’honoraires, vous serez donc
        remboursé 13,80€ par la Sécu et 3,90€ par votre mutuelle si votre garantie prend en charge 100% du
        tarif conventionnel.
      </p>

      <p>
        Sauf si votre médecin pratique des dépassements d’honoraires, un détartrage sera facturé 28,92€ et
        remboursé 20,24€ par l’Assurance maladie, le traitement complexe d’une carie coûtera 53 € mais sera
        remboursé 37,10€ et la pose d’une couronne sera prise en charge à 60% du tarif conventionnel de
        107,50€, soit remboursée 75,25€.
      </p>

      <p>
        Ce qui n’est pas pris en charge par la Sécurité sociale peut l’être par votre mutuelle, même les
        dépassements d’honoraires ! Pour cela, il suffit de choisir une complémentaire santé avec de bonnes
        garanties dentaires. Vous pouvez vous aider d’un comparateur de mutuelles comme <a href="https://www.lesfurets.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">lesfurets</a> et vous ferez des économies !
      </p>

      <p className="text-gray-500 text-xs italic">
        Les tarifs ci-dessus concernent l’année 2023 et peuvent être amenés à évoluer au fil des ans. Pour en savoir plus, veuillez consulter Ameli.fr.
      </p>
    </div>
        </>
      ),
    },
    {
      question: "Mutuelle dentaire et délai de carence : pourquoi est-ce important ?",
      answer : (
        <div className="max-w-3xl mx-auto text-gray-800 text-sm leading-relaxed space-y-4 p-4">
        <p>
          <span className="text-blue-600 font-medium">Le délai de carence</span> est une période après la
          souscription durant laquelle certains remboursements ne sont pas encore effectifs. C’est une clause
          importante car :
        </p>
  
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Elle peut retarder le remboursement de soins coûteux comme les prothèses dentaires ou les implants.
          </li>
          <li>
            Elle protège les assureurs contre les souscriptions opportunistes juste avant des soins importants.
          </li>
        </ul>
  
        <p>
          Pour minimiser l’impact du délai de carence, comparez les mutuelles et privilégiez celles avec un
          délai réduit ou inexistant si vous avez des besoins immédiats en soins dentaires.
        </p>
      </div>
      )
    },
    {
      question: "Qui a le droit au 100% santé ?",
      answer :  (
        <div className="max-w-3xl mx-auto text-gray-800 text-sm leading-relaxed space-y-4 p-4">
        <p>
          Le dispositif <strong>100 % Santé Dentaire</strong> est accessible à tous les assurés disposant d’un
          contrat de mutuelle responsable. Ce dispositif couvre intégralement certains soins, sans reste à
          charge, tels que :
        </p>
  
        <ul className="list-disc pl-6 space-y-1">
          <li>Les couronnes et bridges en matériaux compatibles.</li>
          <li>
            Les dentiers (prothèses amovibles) dans les gammes économiques. Pour en bénéficier, il suffit de
            choisir des soins inclus dans le panier 100 % Santé et de consulter un professionnel conventionné.
          </li>
        </ul>
      </div>
      )
    },
    {
      question: "Qu'est-ce qu'une mutuelle dentaire sans plafond ?",
      answer : (
        <div className="max-w-3xl mx-auto text-gray-800 text-sm leading-relaxed space-y-4 p-4">
        <p>
          Une mutuelle dentaire sans plafond signifie qu’il n’y a pas de limite annuelle de remboursement pour
          les soins dentaires. Cela offre plusieurs avantages :
        </p>
  
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Une prise en charge totale ou partielle des soins coûteux comme les implants ou les orthodonties
            complexes.
          </li>
          <li>
            Une couverture optimale pour les patients ayant des besoins fréquents ou coûteux en soins dentaires.
          </li>
        </ul>
  
        <p>
          Cependant, ces mutuelles peuvent avoir des cotisations plus élevées. Il est donc important de comparer
          les offres et de vérifier si cette option correspond à vos besoins.
        </p>
      </div>
      )
    },
    {
      question: "Faut-il avancer des frais chez le dentiste ?",
      answer :(
        <div className="max-w-3xl mx-auto text-gray-800 text-sm leading-relaxed space-y-4 p-4">
      <p>Cela dépend des cas :</p>

      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <strong className="text-[#003E5F]">Avec le tiers payant :</strong> Si votre dentiste pratique le{" "}
          <a href="https://www.ameli.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            tiers payant
          </a>{" "}
          et que les soins sont bien pris en charge par l’Assurance Maladie et votre mutuelle, vous n’aurez pas
          à avancer les frais. C’est souvent le cas pour les consultations et certains soins courants.
        </li>
        <li>
          <strong className="text-[#003E5F]">Sans tiers payant :</strong> Vous devrez payer l’intégralité des
          soins au dentiste, puis demander le remboursement auprès de l’Assurance Maladie et de votre
          mutuelle.
        </li>
        <li>
          <strong className="text-[#003E5F]">Pour les actes spécifiques ou coûteux :</strong> Certains soins
          comme les implants ou prothèses peuvent nécessiter un devis préalable. Dans ce cas, il est
          recommandé de transmettre le devis à votre mutuelle pour vérifier le niveau de prise en charge et
          savoir si un reste à charge est à prévoir.
        </li>
      </ol>

      <p>
        Pour éviter l’avance de frais, renseignez-vous auprès de votre dentiste et de votre mutuelle pour
        savoir si le tiers payant s’applique dans votre situation.
      </p>
    </div>
      )
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-[#003E5F] mb-6">Foire aux questions</h2>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="border-b">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center py-4 text-left text-[#003E5F] font-semibold hover:opacity-90"
            >
              <span>{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="pb-4 text-sm text-gray-700">
                {item.answer || <p>Contenu de la réponse en cours de rédaction...</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
