import React from "react";

export default function WhyMutuelleUnemployed2() {
  return (
    <section className="bg-white py-10 px-4 md:px-8 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
        Pourquoi choisir une mutuelle santé quand on est au chômage ?
      </h2>

      <div className="space-y-4 text-gray-700 text-base leading-relaxed">
        <p>
          La <span className="text-blue-600 font-medium">mutuelle santé pour demandeur d’emploi</span> est une couverture
          essentielle pour combler les frais non pris en charge par la Sécurité sociale. Elle vous permet d’obtenir des remboursements pour les consultations
          médicales, les soins spécialisés ou les traitements dentaires sans devoir reporter vos soins importants.
        </p>

        <p>
          Si vous venez de perdre votre emploi, vous pouvez bénéficier d’une portabilité de votre mutuelle d’entreprise pendant 12 mois.
          Cela vous offre une continuité de couverture santé sans frais, à condition de remplir certaines conditions :
        </p>

        <ul className="list-disc list-inside space-y-1">
          <li>Ne pas avoir été licencié pour faute lourde</li>
          <li>Percevoir l’indemnité chômage</li>
          <li>Avoir adhéré à la mutuelle d’entreprise avant la fin de contrat</li>
        </ul>

        <p>
          En période de chômage, les revenus diminuent alors que les dépenses peuvent rester élevées. Il est donc recommandé
          d’opter pour une mutuelle santé économique mais efficace. Elle vous protège en cas de souci de santé imprévu tout en allégeant votre budget.
        </p>
      </div>
    </section>
  );
}
