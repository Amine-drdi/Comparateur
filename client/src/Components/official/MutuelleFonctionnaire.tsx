import React from "react";

 const MutuelleFonctionnaire: React.FC = () => {
  return (
    <section className="px-6 py-10 max-w-5xl mx-auto text-[#1c1c1c]">
      <h1 className="text-2xl md:text-3xl font-bold text-[#004c97] mb-6">
        Fonctionnaires et mutuelle santé : ce qui évolue en 2025
      </h1>

      <p className="mb-4">
        Depuis le 1er janvier 2025, les agents de la fonction publique bénéficient d’une prise en charge par l’État de{" "}
        <span className="font-semibold">50 % du coût de leur mutuelle santé</span>. Cette avancée les rapproche du régime appliqué aux salariés du secteur privé, 
        qui disposent déjà d’une complémentaire santé obligatoire depuis la{" "}
        <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000031732944" target="_blank" className="text-blue-600 underline">loi ANI de 2016</a>. 
        Seules les mutuelles référencées par l’administration peuvent bénéficier de ce financement, avec pour objectif de{" "}
        <span className="font-semibold">réduire le reste à charge</span> des agents publics.
      </p>

      <p className="mb-4">
        Cependant, cette réforme ne s’applique pas encore à tous les fonctionnaires. Par exemple, pour la{" "}
        <span className="font-semibold">fonction publique hospitalière</span>, l’intégration au dispositif est prévue pour 2026. 
        Du côté de la <span className="font-semibold">fonction publique territoriale</span>, la participation reste à la discrétion des employeurs, 
        basée sur une adhésion volontaire à une mutuelle référencée ou labellisée.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3 text-[#004c97]">
        À qui s’adresse la Protection Sociale Complémentaire (PSC) ?
      </h2>

      <p className="mb-4">
        La PSC concerne l’ensemble des agents de la fonction publique, qu’ils soient titulaires ou contractuels. Voici les principales catégories concernées :
      </p>

      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>
          <span className="font-semibold">Fonction publique d’État (FPE)</span> : agents des ministères, rectorats, services de police, militaires, enseignants, ou encore des finances publiques.
        </li>
        <li>
          <span className="font-semibold">Fonction publique hospitalière (FPH)</span> : personnels des hôpitaux, maisons de retraite publiques, centres médico-sociaux. Attention, les{" "}
          <span className="italic">médecins hospitaliers</span> sont exclus du dispositif.
        </li>
        <li>
          <span className="font-semibold">Fonction publique territoriale (FPT)</span> : agents des mairies, départements, régions, intercommunalités, offices HLM, etc.
        </li>
      </ul>

      <p className="mb-4">
        Les agents non titulaires (vacataires, contractuels, aides temporaires…) peuvent également souscrire une mutuelle fonction publique, bien que{" "}
        <span className="font-semibold">la prise en charge financière varie selon leur contrat et leur employeur</span>.
      </p>

      <p className="mt-6">
        Cette réforme représente une avancée majeure pour les agents publics. Sa généralisation se fera progressivement jusqu’en 2026, 
        afin de garantir à chaque agent un <span className="font-semibold">accès équitable à une couverture santé complémentaire</span> adaptée à son statut.
      </p>
    </section>
  );
};

export default MutuelleFonctionnaire;
