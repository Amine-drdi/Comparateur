import React from 'react';
import{ healthNews} from "../../assets/Data/healthNews"
const HealthNewsComponent = () => {
 

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
                <h2 className="text-xl font-semibold text-blue-700 mb-2">{news.title}</h2>
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