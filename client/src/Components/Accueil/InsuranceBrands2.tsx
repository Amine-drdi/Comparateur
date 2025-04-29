import React from "react";
import {brands} from "../../assets/optique/Data/brands"
const InsuranceBrands = () => {


  return (
    <>
    <div className="mt-10 w-full flex flex-col items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 w-full max-w-5xl">
        {brands.map((brand, index) => (
          <img key={index} src={brand.src} alt={brand.alt} className="w-24 h-24" />
        ))}
      </div>
      <a href="#brands" className="text-blue-600 mt-4">Voir toutes nos marques →</a>
    </div>
     <section className="text-center px-4 py-8 max-w-4xl mx-auto">
     {/* Statistiques */}
     <div className="mb-6 space-x-4 text-lg sm:text-xl font-medium">
       <span className="text-sky-900 font-bold">420</span> <span>offres comparées</span>
       <span className="text-sky-900 font-bold">+175 000</span> <span>devis réalisés en 2024</span>
     </div>

     {/* Texte descriptif */}
     <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
       Visualisez en un clin d'œil les tarifs de nos partenaires avec notre 
       <strong className="font-semibold text-black"> comparateur mutuelle santé gratuit</strong>. 
       Obtenez des devis mutuelle santé clairs et transparents, comparez les prix mutuelle, 
       et choisissez le niveau de garanties 
       <strong className="font-semibold text-black"> adapté à votre profil</strong> et à vos besoins.
       Profitez aussi des promotions du mois pour économiser jusqu’à <strong className="font-semibold text-black">36%</strong> 
       en moyenne sur votre couverture santé !
     </p>
   </section>
   </>
  );
};

export default InsuranceBrands;