import React from "react";

export default function FacteursPrixMutuelle() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-gray-800 space-y-10">
      {/* Titre principal */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Prix des mutuelles : quels éléments influencent le coût ?
        </h2>
        <p>
          Le tarif d’une complémentaire santé dépend de nombreux critères liés à votre profil et aux garanties sélectionnées.
          Comprendre ces facteurs vous aide à mieux choisir votre mutuelle et à optimiser votre budget santé.
        </p>
      </section>

      {/* Facteurs */}
      <section>
        <h3 className="text-xl font-semibold mb-4">
          Les principaux critères qui influencent le tarif d’une mutuelle
        </h3>

        <ol className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-semibold">L’âge de l’assuré :</span> 
            Plus on avance en âge, plus les besoins médicaux augmentent, ce qui impacte directement les tarifs, notamment sur les postes comme les soins dentaires, optiques ou l’hospitalisation.
          </li>
          <li>
            <span className="font-semibold">Le profil et la situation professionnelle :</span> 
            Un étudiant paiera généralement moins qu’un salarié. Un travailleur indépendant peut bénéficier d’offres spécifiques. Les besoins varient aussi selon la profession, influençant le tarif.
          </li>
          <li>
            <span className="font-semibold">Le niveau de garanties choisi :</span> 
            Plus vous souhaitez un remboursement élevé, plus le prix augmente. Par exemple :
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-sm">
              <li>Une mutuelle basique propose un remboursement limité.</li>
              <li>Une couverture renforcée (optique, dentaire, hospitalisation) augmente le tarif.</li>
              <li>Les soins spécifiques (médecine douce, implant auditif) coûtent plus cher.</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">La zone géographique :</span> 
            Les tarifs peuvent varier selon votre département. Certaines zones sont plus chères en raison du niveau des honoraires pratiqués par les professionnels de santé.
          </li>
        </ol>
      </section>

      {/* Réduire le prix */}
      <section>
        <h3 className="text-xl font-semibold mb-4">
          Comment réduire le prix d’une mutuelle sans négliger la qualité ?
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">Adaptez vos garanties à vos besoins :</span> inutile de payer pour des options dont vous n’avez pas l’utilité (ex: couverture optique renforcée si vous ne portez pas de lunettes).
          </li>
          <li>
            <span className="font-semibold">Choisissez une mutuelle responsable :</span> ces contrats offrent un bon compromis entre prix et réglementation avantageuse.
          </li>
          <li>
            <span className="font-semibold">Optez pour les réseaux de soins :</span> certaines mutuelles négocient des tarifs avantageux avec des professionnels partenaires.
          </li>
          <li>
            <span className="font-semibold">Comparez plusieurs offres :</span> mettez en concurrence les assureurs pour trouver le meilleur rapport qualité/prix.
          </li>
        </ul>
      </section>

      {/* Avantages du comparateur */}
      <section>
        <h3 className="text-xl font-semibold mb-4">
          Pourquoi utiliser notre comparateur de mutuelles ?
        </h3>
        <p className="mb-2">Voici les avantages offerts par notre outil de simulation :</p>

        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">Gratuit et sans engagement :</span> comparez les offres librement, sans pression ni inscription obligatoire.
          </li>
          <li>
            <span className="font-semibold">Large choix de contrats :</span> accédez à une large sélection de mutuelles adaptées à différents profils.
          </li>
          <li>
            <span className="font-semibold">Des informations claires :</span> consultez facilement les garanties, tarifs et avis.
          </li>
          <li>
            <span className="font-semibold">Gain de temps :</span> tout se fait en ligne, sans avoir besoin de démarcher chaque assureur.
          </li>
          <li>
            <span className="font-semibold">Accompagnement personnalisé :</span> recevez des conseils pour sélectionner la meilleure couverture selon vos besoins.
          </li>
        </ul>
      </section>
    </div>
  );
}
