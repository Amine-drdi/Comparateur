import React from "react";
import { brands } from "../../assets/unemployed/Data/brands";

const InsuranceBrands = () => {
  const repeatedBrands = [...brands, ...brands]; // double la liste pour effet continu

  return (
    <div className="mt-10 w-full flex flex-col items-center space-y-4 overflow-hidden">
      <div className="w-full max-w-full overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {repeatedBrands.map((brand, index) => (
            <img
              key={index}
              src={brand.src}
              alt={brand.alt}
              className="w-24 h-24 mx-4 object-contain inline-block"
            />
          ))}
        </div>
      </div>

      <a href="#brands" className="text-blue-600 hover:underline">
        Voir toutes nos marques →
      </a>
    </div>
  );
};

export default InsuranceBrands;
