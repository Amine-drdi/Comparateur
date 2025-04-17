import React from 'react';

export default function QuestionsChoixMutuelle() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      {/* Titre principal */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#003E5F] mb-4">
        Quelles sont les questions à vous poser au moment de choisir votre mutuelle santé dentaire ?
      </h2>

      {/* Paragraphe d’introduction */}
      <p className="mb-4">
        Au moment de choisir votre mutuelle santé dentaire, vous devez faire un point sur vos besoins :
      </p>

      {/* Liste 1 */}
      <ul className="list-disc pl-6 space-y-1 text-gray-800 text-[15px]">
        <li>
          <span className="text-gray-800">
            <strong>Avez-vous des dents fragiles ?</strong> Avez-vous besoin de soins dentaires réguliers ?
          </span>
        </li>
        <li>
          <span className="text-gray-800">
            <strong>Qu’en est-il de vos enfants ?</strong> Ont-ils ou auront-ils besoin d’un appareil dentaire ?
          </span>
        </li>
      </ul>

      {/* Paragraphe central */}
      <p className="mt-4 mb-2">
        Prenez le temps de vérifier les taux de remboursement de l’Assurance Maladie et la fréquence des{" "}
        <a href="#" className="text-blue-600 font-medium hover:underline">
          dépassements d’honoraires
        </a>{" "}
        pour :
      </p>

      {/* Liste 2 */}
      <ul className="list-disc pl-6 space-y-1 text-gray-800 text-[15px]">
        <li>Les principaux soins dentaires : détartrage, dévitalisation, couronnes, caries…</li>
        <li>
          Mais aussi pour les soins hors nomenclature comme la parodontologie (le soin des gencives) ou
          l’orthodontie pour adultes
        </li>
      </ul>

      {/* Conclusion */}
      <p className="mt-4 text-[15px]">
        Une fois ces deux étapes complétées, vous pouvez passer à la comparaison. En effet, n’oubliez pas que la{" "}
        <a href="#" className="text-blue-600 font-medium hover:underline">
          meilleure mutuelle dentaire
        </a>{" "}
        doit avant tout répondre à vos besoins, et ce, au meilleur prix.
      </p>
    </div>
  );
}
