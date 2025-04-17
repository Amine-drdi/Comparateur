import React from "react";
import { FaStar } from "react-icons/fa";
import {reviews} from "../../../assets/mutuelle-sante/Data/reviews"


const CustomerReviews = () => {
  return (
    <div className="bg-gray-100 p-10 mt-10 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        Les avis de nos clients sur notre comparateur de mutuelles pas chères
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic">"{review.text}"</p>
            <div className="flex justify-center mt-4 text-yellow-400">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-2">
              {review.date} • <span className="font-semibold">{review.name}</span>
            </p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-gray-700">
        À partir des 9249 avis de nos clients, nous obtenons la note de
        <span className="font-bold text-blue-900"> 4,1 sur 5 </span>
        sur la plateforme
      </p>
      <div className="mt-4 flex justify-center">
        <img src="/images/avis-verifies.png" alt="Avis Vérifiés" className="h-10" />
      </div>
      <a
        href="#more-reviews"
        className="mt-6 inline-block text-red-500 font-semibold hover:underline"
      >
        Voir plus d'avis clients →
      </a>
    </div>
  );
};

export default CustomerReviews;
