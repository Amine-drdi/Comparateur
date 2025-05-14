import React from "react";

const offers = [
  {
    logo: "/src/assets/student/images/ampli.png", // Remplace par le vrai chemin d'image
    provider: "AMPLI",
    price: "61 €/mois",
    annual: "Budget estimé : 912 €/an",
  },
  {
    logo: "/src/assets/student/images/smatis.png",
    provider: "Smatis",
    price: "51 €/mois",
    annual: "Budget estimé : 609 €/an",
  },
  {
    logo: "/src/assets/student/images/ociane.png",
    provider: "Matmut",
    price: "128 €/mois",
    annual: "Budget estimé : 1542 €/an",
  },
  {
    logo: "/src/assets/student/images/les-menages-prevoyants.png",
    provider: "LMDE",
    price: "134 €/mois",
    annual: "Budget estimé : 1609 €/an",
  },
];

const StudentMutuellePricing: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10 text-[#0f1f38]">
      <h2 className="text-2xl font-bold mb-4">
        Quel est le prix moyen d'une mutuelle étudiant ?
      </h2>

      <p className="text-sm mb-6">
        Le prix d'une mutuelle pour étudiant est généralement compris entre 10 et 30€ par mois. Le prix de votre contrat va dépendre du
        niveau de garanties dont vous avez besoin, mais aussi de votre lieu de résidence et votre âge. C’est à vous de construire votre
        contrat en indiquant quels sont vos besoins en matière de santé. Portez-vous des lunettes ? Avez-vous des soins dentaires importants ?
        Des rendez-vous chez des spécialistes ? Toutes ces questions sont importantes et doivent faire partie de votre réflexion lors
        d’une comparaison de mutuelles afin de trouver celle qui vous conviendra le mieux.
      </p>

      <p className="text-sm mb-8">
        Pour vous donner une idée du prix de votre prochaine mutuelle étudiante, voici les 4 dernières comparaisons réalisées sur lesfurets
        pour un profil similaire au vôtre :
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300 bg-white"
          >
            <div className="h-16 flex items-center justify-center mb-4">
              <img src={offer.logo} alt={offer.provider} className="max-h-20" />
            </div>
            <div className="space-y-1 mb-3 text-sm text-gray-800">
              <p><strong>Soins courants</strong></p>
              <p><strong>Hospitalisation</strong></p>
              <p><strong>Dentaire</strong></p>
              <p><strong>Optique</strong></p>
            </div>
            <p className="text-xl font-semibold text-blue-600 mb-1">{offer.price}</p>
            <p className="text-xs text-gray-600">{offer.annual}</p>
          </div>
        ))}
      </div>

      <div className="flex items-start bg-blue-50 border-l-4 border-blue-400 p-4 text-sm text-gray-700">
        
        <p>
          Une mutuelle étudiante pas chère est un bon moyen de rester bien couvert tout au long de vos études,
          sans dépasser votre budget. Elle vous permet de faire face aux frais de santé imprévus (optique, dentaire, hospitalisation…).
          Et peut s’avérer indispensable lors d’un stage ou d’un séjour à l’étranger. Pensez à souscrire dès votre entrée dans
          l’enseignement supérieur pour éviter les mauvaises surprises.
        </p>
      </div>
    </section>
  );
};

export default StudentMutuellePricing;
