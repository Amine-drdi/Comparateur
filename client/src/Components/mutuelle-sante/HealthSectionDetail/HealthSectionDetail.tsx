import { useParams, useNavigate } from "react-router-dom";
import {healthSections} from "../../../assets/mutuelle-sante/Data/healthSections";

export default function healthSectionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Convert id to number and find the matching healthSection
  const healthSectionId = parseInt(id);
  const healthSection = healthSections.find(healthSection => healthSection.id === healthSectionId);
  
  // Handle case where healthSection is not found
  if (!healthSection) {
    return (
      <div className="bg-gray-50 min-h-screen py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">healthSection non trouvé</h1>
          <p className="text-xl text-gray-600 mb-8">
            Désolé, la La complémentaire santé en 2025 que vous recherchez n'existe pas.
          </p>
          <button
            onClick={() => navigate('/AllhealthSections')}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retourner La complémentaire santé en 2025
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <button
          onClick={() => navigate('/AllhealthSections')}
          className="flex items-center text-blue-600 mb-8 hover:text-blue-800 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Retour aux La complémentaire santé en 2025
        </button>

        {/* healthSection Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <img
            src={healthSection.imageSrc}
            alt={healthSection.title}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="p-6 md:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{healthSection.title}</h1>
            <p className="text-xl text-gray-600">{healthSection.description}</p>
          </div>
        </div>

        {/* healthSection Content - This would normally come from the healthSection data */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contenu du La complémentaire santé en 2025</h2>
          
          {/* This is placeholder content. In a real app, you would display the actual content of the healthSection */}
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Ce  complémentaire santé en 2025 vous fournit toutes les informations nécessaires concernant "{healthSection.title}". 
              Dans un contexte réel, cette section contiendrait le contenu complet de l'article ou du complémentaire santé en 2025.
            </p>
            <p className="mb-4">
              Les informations présentées ici vous aideront à mieux comprendre les options disponibles 
              et à prendre des décisions éclairées concernant votre mutuelle santé.
            </p>
            <p>
              Pour plus d'informations ou pour comparer les différentes offres de mutuelles, 
              n'hésitez pas à utiliser notre comparateur ou à contacter nos conseillers.
            </p>
          </div>
        </div>

        {/* Related healthSections */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">healthSections similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {healthSections
              .filter(item => item.id !== healthSectionId)
              .slice(0, 3)
              .map((relatedhealthSection) => (
                <div
                  key={relatedhealthSection.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={relatedhealthSection.imageSrc}
                    alt={relatedhealthSection.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3
                      className="text-xl font-semibold text-gray-900 mb-3 cursor-pointer hover:text-blue-600"
                      onClick={() => navigate(`/healthSection/${relatedhealthSection.id}`)}
                    >
                      {relatedhealthSection.title}
                    </h3>
                    <p className="text-gray-600">
                      {relatedhealthSection.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}


