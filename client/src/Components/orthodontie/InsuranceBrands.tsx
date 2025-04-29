import React from "react";
import {brands} from "../../assets/optique/Data/brands"
const InsuranceBrands = () => {


  return (
    <div className="mt-10 w-full flex flex-col items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 w-full max-w-5xl">
        {brands.map((brand, index) => (
          <img key={index} src={brand.src} alt={brand.alt} className="w-24 h-24" />
        ))}
      </div>
      <a href="#brands" className="text-blue-600 mt-4">Voir toutes nos marques →</a>
    </div>
  );
};

export default InsuranceBrands;