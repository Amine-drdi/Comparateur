import { Star } from "lucide-react";

export default function MutuelleSeniorInfos() {
  const avis = [
    { nom: "Mélodie D.", date: "19/10/2024", texte: "J’ai trouvé la meilleure offre correspondant à mes besoins en 2 min !" },
    { nom: "Isabelle C.", date: "27/10/2024", texte: "Super 46 euros de gagnés en augmentant mes garanties. Soit 552 euros annuellement !" },
    { nom: "Monique V.", date: "11/10/2024", texte: "Les offres proposées sont diverses et adaptées à ma situation." },
  ];

  return (
    <section className="max-w-6xl mx-auto p-6 text-gray-800 space-y-12">
      {/* Titre principal */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-teal-900">
          Comment trouver une mutuelle senior au meilleur prix ?
        </h2>
        <p className="mb-4 leading-relaxed">
          Dès 55 ans, les mutuelles santé pour seniors proposent de nombreux avantages. Mais un inconvénient majeur persiste : leur prix.
          Renforcer les garanties ou faire face à l’augmentation des risques avec l’âge fait grimper les cotisations.
        </p>
        <p className="mb-4 leading-relaxed">
          À la retraite, le pouvoir d’achat diminue souvent. Il est donc essentiel de choisir une mutuelle adaptée à ses besoins réels,
          sans surpayer pour des couvertures inutiles. Privilégiez les postes de soins essentiels et comparez les offres !
        </p>
        <p className="mb-4 leading-relaxed">
          Grâce à un comparateur comme <span className="font-semibold text-blue-600">Devis Mutuelle</span>, il est possible d’évaluer rapidement les meilleures formules disponibles.
          Vous évitez les mauvaises surprises et gagnez en clarté tout en réalisant des économies.
        </p>
      </div>

      {/* Pourquoi utiliser un comparateur */}
      <div>
        <h3 className="text-xl font-bold mb-6 text-gray-900">
          Pourquoi comparer les mutuelles seniors avec Devis Mutuelle ?
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-gray-800 mb-2">⏱ Du temps de gagné !</h4>
            <p className="text-sm leading-relaxed">
              Inutile de parcourir des dizaines de sites. Devis Mutuelle compare pour vous jusqu’à 30 offres en quelques clics.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-gray-800 mb-2">✅ Plus de clarté</h4>
            <p className="text-sm leading-relaxed">
              Toutes les garanties sont expliquées clairement. Plus besoin de déchiffrer des tableaux compliqués : vous décidez en toute confiance.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-gray-800 mb-2">📉 Protégez-vous de l’inflation</h4>
            <p className="text-sm leading-relaxed">
              Grâce aux offres actualisées, vous bénéficiez d’une mutuelle optimisée sans sacrifier votre budget.
            </p>
          </div>
        </div>
      </div>

      {/* Témoignages */}
      <div>
        <h3 className="text-xl font-bold mb-6 text-gray-900">
          Ce que disent nos utilisateurs :
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {avis.map((a, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <p className="italic mb-4">"{a.texte}"</p>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center text-orange-500 space-x-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={14} fill="orange" />
                  ))}
                </div>
                <span className="text-right">{a.date} - <strong>{a.nom}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
