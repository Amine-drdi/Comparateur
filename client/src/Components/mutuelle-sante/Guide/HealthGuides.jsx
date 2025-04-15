import { guides } from "../../../assets/mutuelle-sante/Data/guides";
import { useNavigate } from "react-router-dom";

export default function HealthGuides() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Les guides et actualités santé
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Retrouvez nos guides conseils ainsi que les dernières actualités du monde de la mutuelle santé.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <div 
              key={guide.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <img 
                src={guide.image}
                alt={guide.title}
                className="w-full h-48 object-cover"
              />
              
              {/* Content */}
              <div className="p-6">
                <h3 
                  className="text-xl font-semibold text-gray-900 mb-3 cursor-pointer hover:text-blue-600"
                  onClick={() => navigate(`/guide/${guide.id}`)} // 🔹 Redirection
                >
                  {guide.title}
                </h3>
                <p className="text-gray-600">
                  {guide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
