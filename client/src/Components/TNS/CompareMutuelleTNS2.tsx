import React from 'react';

export default function CompareMutuelleTNS2() {
  return (
    <section className="bg-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-4">
            Pourquoi utiliser le comparateur de mutuelles TNS sur Devis mutuelle ?
          </h2>
          <h3 className="text-xl font-semibold text-blue-900 mb-6">
            Comparer avec Devis mutuelle, c'est gratuit
          </h3>

          {/* Bloc Explication */}
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-2">
              0 commission ou frais cachés
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Le comparateur n’applique aucun frais supplémentaires aux tarifs affichés. 
              Le prix que vous voyez affiché, c’est celui que vous paierez à la fin. 
              Aucun partenaire n’est mis en avant. L’offre qui apparaît en premier dans 
              les résultats est toujours la moins chère.
            </p>
          </div>

          {/* Bloc Fonctionnement */}
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-2">
              Comment le comparateur se rémunère ?
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Le comparateur ne prend aucune commission, ni frais cachés. 
              Ce sont les partenaires qui rémunèrent le service lorsqu’un 
              contrat est souscrit, sans aucun impact sur votre budget.
            </p>

            <a href="#" className="text-blue-600 hover:underline text-sm inline-block mt-2">
              Voir le fonctionnement en détails
            </a>
          </div>

          {/* Button */}
          <a href="/compare" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md">
            Comparer les mutuelles
          </a>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/src/assets/TNS/images/TNS3.png" // <-- à remplacer avec ton image du personnage
            alt="Devis mutuelle comparateur"
            className="w-64 md:w-80"
          />
        </div>
      </div>
    </section>
  );
}
