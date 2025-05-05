import React from "react";

const CriteresComparaison: React.FC = () => {
  return (
    <section className="px-6 py-10 max-w-5xl mx-auto text-[#1c1c1c]">
      <h2 className="text-2xl md:text-3xl font-bold text-[#004c97] mb-6">
        Quels critères prendre en compte pour bien comparer sa mutuelle fonctionnaire ?
      </h2>

      <p className="mb-4">
        Si vous travaillez dans la fonction publique, plusieurs cas de figure sont possibles :
      </p>

      <ul className="list-decimal list-inside mb-4 space-y-2">
        <li>
          <span className="font-semibold">Votre employeur a mis en place une complémentaire santé collective.</span> 
          Il prend alors en charge jusqu’à <span className="font-semibold">50 % de la cotisation</span>. 
          Vous êtes libre d’y adhérer ou non.
        </li>
        <li>
          <span className="font-semibold">Aucune couverture n’est proposée.</span> Dans ce cas, il est possible de souscrire une mutuelle individuelle, 
          généraliste ou spécialisée, pour bénéficier d’une bonne protection.
        </li>
      </ul>

      <p className="mb-4">
        Pour identifier la meilleure offre, il est recommandé d’utiliser un comparateur fiable comme <span className="font-semibold">Devis Mutuelle</span>. 
        Cet outil vous permet d’évaluer les contrats disponibles selon votre profil et vos besoins.
      </p>

      <p className="mb-4">
        Lors de votre choix, veillez à ce que votre mutuelle santé fonctionnaire couvre bien les postes suivants :
      </p>

      <ul className="list-disc list-inside text-blue-700 font-medium space-y-1">
        <li>Les soins dentaires (prothèses, implants, orthodontie)</li>
        <li>Les soins d’optique (lunettes – verres et monture – et lentilles)</li>
        <li>Les frais d’hospitalisation (chambre, anesthésie, forfait journalier...)</li>
        <li>La médecine de ville (consultations généralistes/spécialistes, médicaments, dépassements d’honoraires...)</li>
      </ul>
    </section>
  );
};

export default CriteresComparaison;
