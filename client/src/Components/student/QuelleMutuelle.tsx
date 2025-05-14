import React , { act, useState } from 'react'
import { ChevronDown, ChevronUp } from "lucide-react";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

const faqList: FaqItem[] = [
  {
    question: "Choisir votre propre mutuelle ou reste sur la complémentaire de vos parents ?",
    answer: (
      <>
 <div className="max-w-3xl mx-auto p-6 text-gray-800 text-base space-y-6">
  <p>
    Jusqu’à l’âge de <strong className="font-semibold">18 ans</strong>, vous pouvez avoir été considéré comme 
    <strong className="font-semibold"> ayant-droit</strong> de l’un de vos parents pour la 
    <strong className="font-semibold"> Sécurité sociale</strong>.
  </p>

  <p>
    Mais une fois <strong className="font-semibold">majeur</strong>, vous bénéficiez de votre 
    <strong className="font-semibold"> propre affiliation</strong> à une couverture maladie.
  </p>

  <p>
    👪 Cependant, vous pouvez encore être rattaché à la 
    <strong className="font-semibold"> mutuelle santé de vos parents</strong> même après 18 ans.  
    Cela signifie que vous êtes leur <strong className="font-semibold">ayant-droit</strong> pour la complémentaire santé,  
    mais <span className="font-semibold">pas pour la Sécurité sociale</span>.  
    ⚠️ Ce sont deux choses bien différentes !
  </p>

  <p>
    🎓 Si vous êtes uniquement <strong className="font-semibold">étudiant</strong> et non salarié,  
    vous pouvez rester rattaché à la mutuelle de vos parents aussi longtemps que le permet leur contrat,  
    à condition de fournir un <strong className="font-semibold">certificat de scolarité</strong>.
  </p>

  <p>
    ⏳ En général, cela <strong className="font-semibold">cesse à partir de 26 ans</strong>.
  </p>

  <p>
    💡 Quoi qu’il en soit, une <strong className="font-semibold">mutuelle familiale</strong> n’est pas toujours adaptée aux étudiants :
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>les <strong className="font-semibold">garanties</strong> peuvent ne pas convenir à votre vie étudiante</li>
      <li>elle représente un <strong className="font-semibold">coût important</strong> pour vos parents</li>
    </ul>
  </p>

  <p>
    ✅ Pour avoir votre propre couverture santé, il suffit de :
    <ul className="list-decimal list-inside mt-2 space-y-1">
      <li>Souscrire une <strong className="font-semibold">mutuelle étudiante</strong> adaptée à vos besoins</li>
      <li>Résilier votre statut de <strong className="font-semibold">bénéficiaire</strong> du contrat familial</li>
    </ul>
  </p>
</div>

      </>
    ),
  },
  {
    question: "Quelle mutuelle choisir si vous êtes alternant ?",
    answer: (
        <div className="max-w-3xl mx-auto p-6 text-gray-800 text-base space-y-6">
        <p>
          👨‍🏫 En tant qu’<strong className="font-semibold">alternant</strong>, vous avez un statut hybride : 
          vous êtes à la fois <strong className="font-semibold">étudiant</strong> et <strong className="font-semibold">salarié</strong>.
        </p>
      
        <p>
          ✅ À ce titre, vous êtes généralement éligible à la <strong className="font-semibold">mutuelle d’entreprise</strong> proposée par votre employeur,  
          qui est en principe <strong className="font-semibold">obligatoire</strong>, même en alternance.
        </p>
      
        <p>
          💶 L’entreprise prend en charge <strong className="font-semibold">au moins 50%</strong> de la cotisation,  
          ce qui en fait souvent la solution la plus <strong className="font-semibold">avantageuse financièrement</strong>.
        </p>
      
        <p>
          ⚠️ Cependant, vous pouvez être <strong className="font-semibold">dispensé</strong> de cette mutuelle dans certains cas :
        </p>
      
        <ul className="list-disc list-inside space-y-1">
          <li>📄 <strong className="font-semibold">Contrat court</strong></li>
          <li>👪 <strong className="font-semibold">Couverture familiale déjà existante</strong></li>
          <li>🔎 Autres exceptions selon la convention collective</li>
        </ul>
      
        <p>
          Si vous êtes dispensé, ou si la couverture <strong className="font-semibold">ne suffit pas</strong>, vous pouvez :
        </p>
      
        <ul className="list-disc list-inside space-y-1">
          <li>🎓 Choisir une <strong className="font-semibold">mutuelle étudiante</strong> adaptée à vos besoins</li>
          <li>➕ Ajouter une <strong className="font-semibold">surcomplémentaire</strong> pour renforcer certaines garanties (dentaire, optique, hospitalisation)</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Job étudiant : quelle mutuelle choisir si vous êtes étudiant et salarié ?",
    answer: (
<div className="max-w-3xl mx-auto p-6 text-gray-800 text-base space-y-6">
  <p>
    👨‍🎓 Si vous êtes <strong className="font-semibold">étudiant avec un job à temps partiel</strong>,  
    vous conservez en général le <strong className="font-semibold">statut d’étudiant</strong>.
  </p>

  <p>
    ❌ Dans ce cas, vous <strong className="font-semibold">n’êtes pas obligé</strong> d’adhérer à la mutuelle de votre employeur,  
    surtout si :
  </p>

  <ul className="list-disc list-inside space-y-1">
    <li>🕒 Le <strong className="font-semibold">contrat est court</strong></li>
    <li>📅 Vous <strong className="font-semibold">travaillez ponctuellement</strong></li>
  </ul>

  <p>
    ✅ Vous avez donc plusieurs options :
  </p>

  <ul className="list-disc list-inside space-y-1">
    <li>
      🎓 Conserver votre <strong className="font-semibold">mutuelle étudiante</strong> (ou en souscrire une si vous n’en avez pas encore),  
      adaptée à votre <strong className="font-semibold">budget</strong> et vos <strong className="font-semibold">besoins</strong>.
    </li>
    <li>
      🏢 Si votre job étudiant propose une <strong className="font-semibold">mutuelle d’entreprise avantageuse</strong>,  
      vous pouvez y adhérer <strong className="font-semibold">volontairement</strong> (sous réserve d’acceptation) pour bénéficier d’un bon niveau de couverture.
    </li>
  </ul>

  <p>
    💡 Dans tous les cas, il est <strong className="font-semibold">recommandé</strong> d’avoir une complémentaire santé,  
    car la <strong className="font-semibold">Sécurité sociale</strong> ne rembourse pas tous les frais :
  </p>

  <ul className="list-disc list-inside space-y-1">
    <li>👓 Optique</li>
    <li>🦷 Dentaire</li>
    <li>💶 Dépassements d’honoraires</li>
  </ul>

  <p>
    📊 <strong className="font-semibold">Comparez les offres</strong> pour trouver la meilleure solution selon :
    <ul className="list-disc list-inside space-y-1 mt-1">
      <li>Votre <strong className="font-semibold">statut</strong></li>
      <li>Vos <strong className="font-semibold">revenus</strong></li>
      <li>Vos <strong className="font-semibold">besoins de santé</strong></li>
    </ul>
  </p>

  <p>
    📘 Pour en savoir plus sur la <strong className="font-semibold">dispense d’adhésion à la mutuelle d’entreprise</strong>,  
    consultez notre guide dédié.
  </p>
</div>
    ),
  },
  {
    question: "Année de césure : comment rester couvert par votre mutuelle étudiante ?",
    answer: (
        <div className="max-w-3xl mx-auto p-6 text-gray-800 text-base space-y-6">
        <p>
          Si vous décidez de prendre une <strong className="font-semibold">année de césure</strong> au cours de vos études, 
          vous devrez certainement adapter votre <strong className="font-semibold">couverture maladie</strong> en fonction de votre situation :
        </p>
      
        <ul className="space-y-4 list-disc list-inside">
          <li>
            <span className="font-semibold">🎓 Vous suivez une autre formation universitaire en France :</span><br />
            votre statut d’<strong className="font-semibold">étudiant</strong> ne change pas.  
            Vous pouvez donc garder votre <strong className="font-semibold">mutuelle</strong> ou souscrire une 
            <strong className="font-semibold"> complémentaire santé étudiante</strong> si vous n’en avez pas encore.
          </li>
      
          <li>
            <span className="font-semibold">👩‍💼 Vous exercez une activité salariée en France :</span><br />
            vous devez normalement <strong className="font-semibold">résilier votre mutuelle étudiante</strong> pour adhérer à la 
            <strong className="font-semibold"> complémentaire santé obligatoire</strong> de votre entreprise,  
            sauf si vous vous trouvez dans l’un des cas cités plus haut.
          </li>
      
          <li>
            <span className="font-semibold">🤝 Vous faites du bénévolat ou exercez une activité non-salariée en France :</span><br />
            si vous <strong className="font-semibold">n’êtes pas salarié</strong>, vous pouvez conserver votre 
            <strong className="font-semibold"> mutuelle actuelle</strong>.
          </li>
      
          <li>
            <span className="font-semibold">✈️ Vous partez à l’étranger</span> (voyage, VIE, formation, emploi salarié) :<br />
            il faut <strong className="font-semibold">contacter votre assureur ou mutualiste</strong> pour savoir s’il vous 
            <strong className="font-semibold"> couvre à l’étranger</strong> et dans quelles conditions.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Pouvez-vous garder votre mutuelle santé étudiant lors de votre Erasmus ?",
    answer: (
        <div className="max-w-3xl mx-auto p-6 text-gray-800 text-base space-y-6">
        <p>
          🌍 Partir <strong className="font-semibold">étudier à l’étranger</strong> vous attire ?  
          Sachez que dans le cadre du programme <strong className="font-semibold">Erasmus</strong>,  
          la <strong className="font-semibold">Sécurité sociale</strong> vous couvre à l’étranger.
        </p>
      
        <p>
          ✈️ Avant de partir vous installer quelques mois dans un autre pays européen,  
          vous devrez vous munir de votre <strong className="font-semibold">Carte européenne d’assurance maladie (CEAM)</strong>  
          au moins <strong className="font-semibold">15 jours avant votre départ</strong>.
        </p>
      
        <p>
          📄 Son obtention est <strong className="font-semibold">très simple</strong> :  
          il suffit de vous adresser à votre <strong className="font-semibold">caisse d’assurance maladie</strong>.
        </p>
      
        <p>
          🗓️ Valable pendant <strong className="font-semibold">deux ans</strong>,  
          la CEAM couvre vos <strong className="font-semibold">dépenses de santé</strong>  
          comme si vous étiez un assuré du pays où vous réalisez vos études.
        </p>
      
        <p>
          🛡️ Pour ce qui est de l’<strong className="font-semibold">assurance complémentaire</strong>,  
          vous devez <strong className="font-semibold">contacter votre mutuelle</strong> avant votre départ  
          pour connaître les <strong className="font-semibold">modalités de prise en charge en Erasmus</strong>.
        </p>
      </div>
    ),
  },
];
const QuelleMutuelle = () => {
      const [activeIndex, setActiveIndex] = useState<number | null>(null);
    
      const toggle = (index: number) => {
        setActiveIndex(prev => (prev === index ? null : index));
      };
  return (
    <div>
        <h2 className="text-xl font-bold mb-4">
        Quelle mutuelle choisir en fonction de votre situation étudiante ?
       </h2>
       <div   className="text-sm mb-6">
       En tant qu'étudiant, vous pouvez avoir besoin de soins spécifiques en optique 
       ou dentaire par exemple. Ces frais peuvent dépasser le budget que vous vous êtes fixé,
        souscrire une mutuelle étudiante vous permet alors de prendre du temps pour vous et de réaliser les soins dont vous avez besoin. La complémentaire santé est là pour prendre en charge ce que la Sécurité sociale ne vous rembourse pas. Lorsque vous allez commencer vos études pensez à souscrire une mutuelle pour étudiant vous allez certainement en avoir besoin également lorsque vous allez être en stage ou si vous souhaitez faire un semestre à l’étranger.
    </div>
          <section className="max-w-4xl mx-auto p-6">
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
        <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center"></h2>
      <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/Odl4a1BzS0Y"
          title="Présentation vidéo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
    </div>
  )
}

export default QuelleMutuelle