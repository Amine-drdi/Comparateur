import React from 'react';
import { FaWpforms, FaSearch, FaMousePointer } from 'react-icons/fa';

export default function EtapesEtComparatif() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
      {/* Titre principal */}
      <h2 className="text-xl sm:text-2xl font-bold mb-6">
        3 étapes pour trouver les meilleurs tarifs de mutuelle santé
      </h2>

      {/* Étapes texte */}
      <ol className="list-decimal ml-6 space-y-4 text-sm sm:text-base">
        <li>
          <span className="font-semibold text-blue-700">Complétez votre profil pour avoir des offres de mutuelles adaptées</span><br />
          Remplissez notre formulaire pour obtenir des <span className="font-semibold">devis mutuelle santé</span> adaptés à vos besoins, votre profil et à votre budget.
          Cette étape ne prend pas plus de <span className="font-semibold">2 minutes</span> et peut être modifiée à tout moment.
        </li>
        <li>
          <span className="font-semibold text-blue-700">Découvrez le comparatif de mutuelles 100% impartial</span><br />
          Notre <span className="font-semibold">comparateur mutuelle santé</span> analyse <span className="font-semibold">28 grands assureurs et courtiers</span> en temps réel.
          <br />
          Les <span className="font-semibold">garanties et prix mutuelle</span> sont clairs et lisibles, sans favorisation d’un assureur et toujours selon votre profil.
        </li>
        <li>
          <span className="font-semibold text-blue-700">Choisissez la meilleure offre et économisez jusqu’à 36 %</span><br />
          Une <span className="font-semibold">comparaison des offres</span> peut vous permettre de réaliser une économie significative sur votre mutuelle santé.
          Vous pouvez <span className="font-semibold">souscrire directement en ligne</span> ou contacter l’assureur pour finaliser votre contrat.
        </li>
      </ol>

      {/* Icônes des étapes */}
      <div className="flex flex-col sm:flex-row justify-center items-center mt-10 gap-6">
        {/* Étape 1 */}
        <div className="bg-blue-100 text-center p-6 rounded-full w-40 h-40 flex flex-col items-center justify-center shadow">
          <FaWpforms className="text-blue-600 text-3xl mb-2" />
          <p className="text-sm font-semibold">Etape 1</p>
          <p className="text-xs">Je remplis le formulaire avec mon profil</p>
        </div>

        {/* Étape 2 */}
        <div className="bg-blue-100 text-center p-6 rounded-full w-40 h-40 flex flex-col items-center justify-center shadow">
          <FaSearch className="text-blue-600 text-3xl mb-2" />
          <p className="text-sm font-semibold">Etape 2</p>
          <p className="text-xs text-center">J’accède aux offres classées par prix</p>
        </div>

        {/* Étape 3 */}
        <div className="bg-blue-100 text-center p-6 rounded-full w-40 h-40 flex flex-col items-center justify-center shadow">
          <FaMousePointer className="text-blue-600 text-3xl mb-2" />
          <p className="text-sm font-semibold">Etape 3</p>
          <p className="text-xs text-center">Je demande mes devis en un clic</p>
        </div>
      </div>

      {/* Pourquoi comparer */}
      <div className="mt-12">
        <h3 className="text-lg sm:text-xl font-bold mb-4">
          Pourquoi comparer les devis de mutuelle santé ?
        </h3>
        <p className="text-sm sm:text-base mb-4">
          Comparer les devis de mutuelle santé est essentiel pour trouver la meilleure complémentaire santé qui répond à vos besoins et à votre budget.
          En effet, les mutuelles santé proposent des contrats avec des garanties et des tarifs très différents.
        </p>
        <ul className="list-disc pl-6 text-sm sm:text-base space-y-2">
          <li><span className="font-medium">Trouver rapidement</span> la meilleure complémentaire santé adaptée à votre profil et au meilleur tarif.</li>
          <li><span className="font-medium">Économiser jusqu’à 36%</span> en moyenne en choisissant la mutuelle qui vous correspond.</li>
          <li><span className="font-medium">Bénéficier de garanties supplémentaires</span> qui ne sont pas disponibles dans les offres de base.</li>
          <li><span className="font-medium">Améliorer votre couverture santé</span> pour mieux rembourser vos soins médicaux.</li>
          <li><span className="font-medium">Gagner du temps</span> en accédant en quelques minutes aux meilleures offres du marché.</li>
        </ul>
        <p className="text-sm sm:text-base mt-4">
          Nos résultats ne sont influencés par aucun assureur. Nous vous garantissons une comparaison impartiale.
        </p>
      </div>
    </section>
  );
}
