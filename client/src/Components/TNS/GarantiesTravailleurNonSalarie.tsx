import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function GarantiesTravailleurNonSalarie() {
  return (
    <section className="bg-gray-50 py-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-6">
          Quelles garanties souscrire si vous êtes un travailleur non salarié ?
        </h2>

        <p className="text-gray-700 mb-6">
          En général, il vous est conseillé de souscrire une complémentaire santé TNS avec des garanties qui vous remboursent à hauteur du ticket modérateur minimum pour :
        </p>

        <ul className="space-y-3 mb-6">
          {['Vos consultations chez le généraliste ou des spécialistes', 'L’achat de médicaments', 'Vos soins dentaires', 'Vos frais d’optique', 'Vos frais d’hospitalisation', 'L’imagerie médicale'].map((item, idx) => (
            <li key={idx} className="flex items-center text-gray-700">
              <FaCheckCircle className="text-blue-500 mr-2" />
              {item}
            </li>
          ))}
        </ul>

        <p className="text-gray-700 mb-4">
          Lorsque vous êtes un travailleur non salarié toute la charge de votre activité vous concerne, comme c'est le cas pour les professions libérales ou les artisans.
          Mieux vaut anticiper toutes les situations au moment de choisir les garanties les plus adaptées à vos besoins, de l'arrêt de votre activité à votre décès en passant par l'invalidité.
        </p>

        <p className="text-gray-700">
          La meilleure façon de protéger au mieux votre famille, par exemple en souscrivant une garantie prévoyance individuelle.
        </p>
      </div>
    </section>
  );
}
