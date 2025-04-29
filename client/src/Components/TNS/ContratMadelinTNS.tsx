import React from 'react';

export default function ContratMadelinTNS() {
  return (
    <section className="bg-gray-50 py-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-6">
          Mutuelle santé TNS : qu’est-ce que le contrat Madelin ?
        </h2>

        <div className="bg-blue-100 p-4 rounded-md text-blue-800 mb-6">
          <p>
            <strong>La loi Madelin de 1994</strong> a pour but de combattre la précarité sanitaire des travailleurs indépendants
            en leur permettant de déduire de leurs impôts leurs cotisations de complémentaire santé TNS.
          </p>
        </div>

        <p className="text-gray-700 mb-4">
          Notez aussi que pour les autoentrepreneurs, soumis à un régime de micro-fiscalité, les cotisations versées dans le cadre
          d'un contrat via la Loi Madelin ne peuvent être déduites des impôts.
        </p>

        <p className="text-gray-700 mb-4">
          Enfin, les contrats Madelin et leur protection santé sont particulièrement avantageux pour les familles nombreuses,
          le montant de la prime restant le même quel que soit le nombre d’ayants droits.
        </p>

        <p className="text-gray-700">
          À noter, si votre conjoint est salarié, il bénéficie d'une mutuelle d'entreprise prise en charge à 50% par son employeur.
          Si vous le souhaitez vous pouvez y souscrire en tant qu'ayant droit et profiter des mêmes garanties que lui dans le cas
          où vos besoins de santé correspondent aux garanties du contrat.
        </p>
      </div>
    </section>
  );
}
