import React from 'react';

export default function MutuelleTNS() {
  return (
    <section className="bg-gray-50 py-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-6">
          Qu’est-ce qu’une mutuelle TNS ?
        </h2>
        <p className="text-gray-700 mb-6">
          La mutuelle TNS est une complémentaire santé réservée aux travailleurs non-salariés (TNS),
          c’est-à-dire à tous les actifs n’ayant pas le statut d’employé. Comme une autre{' '}
          <span className="text-blue-600 hover:underline cursor-pointer">mutuelle santé</span>,
          elle permet de rembourser tout ou partie de vos frais de santé, qui ne seraient pas pris en
          charge par l'Assurance Maladie.
        </p>
        <p className="text-gray-700 mb-4">Elle concerne :</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Les{' '}
            <span className="text-blue-600 hover:underline cursor-pointer">professions libérales</span>{' '}
            (médecins, avocats, etc...)
          </li>
          <li>Les commerçants</li>
          <li>Les restaurateurs</li>
          <li>Les artisans</li>
          <li>
            Et plus globalement tous les gérants majoritaires à condition qu'ils ne soient pas des
            salariés de leur entreprise.
          </li>
        </ul>
      </div>
    </section>
  );
}
