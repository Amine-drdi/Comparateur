import React from 'react';
import myImage from '../../assets/mutuelle-entreprises/images/insurance.png';

export default function MutuelleEntrepriseBanner() {
  return (
    <div className="flex justify-between items-center bg-sky-200 p-6 rounded-lg">
      {/* Left Content */}
      <div className="flex flex-col gap-6 max-w-lg">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Mutuelle entreprise</h1>
          <p className="mt-4 text-lg text-slate-700">
            Protégez vos salariés en souscrivant la meilleure mutuelle d'entreprise !
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="text-sky-500">✓</div>
            <p>Des garanties sur-mesure</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sky-500">✓</div>
            <p>Un devis en quelques clics</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sky-500">✓</div>
            <p>Des articles pour tout comprendre</p>
          </div>
        </div>

        <a
         href="/Typeform"
         className="bg-red-400 hover:bg-red-500 text-white font-medium py-3 px-6 rounded-md text-center transition-colors"
>
  Comparer
</a>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCKczODzcHeZu8rPcgqNjDiJSnTHqbiad1Q&s" alt="Avis Vérifiés" className="w-6 h-6" />
            <span className="ml-1 text-sm font-medium">Avis Vérifiés</span>
          </div>
          <div className="flex">
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-gray-300">★</span>
          </div>
          <div className="text-sm">4,1</div>
          <div className="text-sm text-gray-600">9263 avis</div>
        </div>
      </div>

      {/* Right Content - Meerkat Character */}
      <div className="hidden md:block">
        <div className="relative w-64 h-64">
          <img 
            src= {myImage}
            alt="Mascotte meerkat en costume" 
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}