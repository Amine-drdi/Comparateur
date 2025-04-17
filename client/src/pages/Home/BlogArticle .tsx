import React from 'react';

const BlogArticle = () => {
  return (
    <div>
      {/* Espace supérieur responsive */}
      <div className="bg-blue-50 pt-20 pb-10 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-800 mb-4">
          Bienvenue sur notre Blog Santé
        </h2>
        <p className="text-lg md:text-xl text-blue-600">
          Informations et conseils sur les mutuelles santé, pour une meilleure couverture au quotidien.
        </p>
      </div>

      {/* Contenu de l'article */}
      <div className="bg-white text-gray-800 py-12 px-6 lg:px-40">
        {/* Image de couverture */}
        <div className="w-full h-72 mb-10 overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/images/mutuelle-sante-entreprise.jpg"
            alt="Mutuelle santé"
            className="w-full h-full object-cover"
          />
        </div>

        {/* En-tête */}
        <h1 className="text-4xl font-bold mb-4">
          Tout savoir sur la mutuelle santé en 2025
        </h1>
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-8">
          <span>Publié le 10 avril 2025</span>
          <span>•</span>
          <span>Par l’équipe Mutuelle+</span>
        </div>

        {/* Contenu */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            La mutuelle santé joue un rôle essentiel dans la prise en charge des frais médicaux qui ne sont pas couverts par la sécurité sociale...
          </p>
          <p>
            Souscrire à une mutuelle permet de mieux gérer les dépenses liées aux consultations, aux médicaments, à l’hospitalisation...
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
            "Une bonne mutuelle santé est celle qui s’adapte à votre mode de vie et à votre budget."
          </blockquote>
          <p>
            Pensez à vérifier les délais de carence, les niveaux de remboursement, ainsi que les services complémentaires proposés...
          </p>
        </div>

        {/* Autres articles */}
        <div className="mt-16 border-t pt-8">
          <h3 className="text-2xl font-semibold mb-6">Autres articles du blog</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-4 rounded-xl hover:shadow-md transition">
              <h4 className="text-xl font-bold mb-2">Comment choisir sa mutuelle en 2025 ?</h4>
              <p className="text-gray-600 text-sm">Comparatif des meilleures offres du marché...</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl hover:shadow-md transition">
              <h4 className="text-xl font-bold mb-2">Les remboursements expliqués simplement</h4>
              <p className="text-gray-600 text-sm">Ce que prend réellement en charge votre mutuelle...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
