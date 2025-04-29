import React from 'react';
import image from "../../assets/expatries/images/image.png"
const ExpatriateMutuelleBanner: React.FC = () => {


  const handleClick = () => {
    window.location.href = 'https://lp.april-international.com/fr/assurance-sante-internationale-lesfurets/?cmpid=ps_lm_aic_et_215fd83_nom5f154';
  };

  return (
    <section className="bg-sky-100 w-full py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Mutuelle santé expatriés</h2>
          <p className="text-sm md:text-base text-gray-700 mb-4 flex items-center gap-2">
            <span className="text-sky-500">✨</span>
            Choisissez la meilleure mutuelle pour vos frais de santé à l'étranger.
          </p>
          <button
            onClick={handleClick}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-md transition-colors"
          >
            Obtenir un devis personnalisé
          </button>
        </div>

        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={image}
            alt="Mascotte mutuelle"
            className="max-w-[160px] md:max-w-[200px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ExpatriateMutuelleBanner;
