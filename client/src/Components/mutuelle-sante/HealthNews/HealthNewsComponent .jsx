import React from 'react';
import{ healthNews} from "../../../assets/mutuelle-sante/Data/healthNews"
import { useNavigate } from "react-router-dom";

const HealthNewsComponent = () => {
 
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-blue-800 mb-6">Actualités santé</h1>
      
      <div className="space-y-6">
        {healthNews.map((news) => (
          <div key={news.id} className="border border-gray-200 rounded-md overflow-hidden shadow-sm">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="p-4 md:w-3/4">
              <h3 
                  className="text-xl font-semibold text-gray-900 mb-3 cursor-pointer hover:text-blue-600"
                  onClick={() => navigate(`/news/${news.id}`)} // 🔹 Redirection
                >
                  {news.title}
                </h3>
                <p className="text-sm text-blue-500 mb-2">{news.category}</p>
                <p className="text-gray-700 mb-4">{news.content}</p>
                <div className="flex text-sm text-gray-500">
                  <span>{news.date}</span>
                  <span className="mx-2">•</span>
                  <span>{news.author}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthNewsComponent;