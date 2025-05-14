import React from "react";
import { brands } from "../../assets/optique/Data/brands";

const InsuranceBrands = () => {
  return (
    <div className="w-full overflow-hidden mt-10 bg-white py-4">
      <div className="relative w-full">
        <div className="flex animate-scroll whitespace-nowrap">
          {brands.concat(brands).map((brand, index) => (
            <img
              key={index}
              src={brand.src}
              alt={brand.alt}
              className="w-24 h-24 mx-4 inline-block"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsuranceBrands;
