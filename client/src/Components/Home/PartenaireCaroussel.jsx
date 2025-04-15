import React from 'react';

const PartenaireCaroussel = () => {
  // Tableau des logos partenaires (remplacez par vos propres images)
  const partners = [
    { id: 1, name: 'Néoliane', logo: '/images/Neo.webp' },
    { id: 2, name: 'April', logo: '/images/april.png' },
    { id: 3, name: 'Alptis', logo: '/images/alptis.png' },
    { id: 4, name: 'Apivia', logo: '/images/apivia.png' },
    { id: 5, name: 'Alliaz', logo: '/images/allianz.png' },
    { id: 6, name: 'Groupama', logo: '/images/groupama.png' },
    { id: 7, name: 'AXA', logo: '/images/AXA.png' },
    { id: 8, name: 'Swisslife', logo: '/images/swisslife.png' },
  ];

  // Dupliquer les partenaires pour un défilement infini fluide
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto  text-center">
            <span className="bg-yellow-300 text-gray-800 px-3 py-1 rounded-md text-sm font-medium">
              Nos partenaires
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-14">
            Plus de 30 assureurs comparés
            </h2>
            </div>
        
        <div className="relative w-full overflow-hidden">
          {/* Barre défilante */}
          <div className="flex animate-infinite-scroll hover:animation-paused">
            {duplicatedPartners.map((partner, index) => (
              <div 
                key={`${partner.id}-${index}`} 
                className="flex-shrink-0 mx-8 flex items-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  title={partner.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles CSS pour l'animation */}
      <style >{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 25s linear infinite;
          width: max-content;
        }
        .hover\:animation-paused:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default PartenaireCaroussel;