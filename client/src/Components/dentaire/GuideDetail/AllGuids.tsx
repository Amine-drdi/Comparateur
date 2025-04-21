import { guides } from "../../../assets/dentaire/data/guides";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AllGuides() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Group guides by category
  const categories = {
    "Mutuelle santé": guides.filter(guide => guide.id <= 2),
    "Contrats et droits": guides.filter(guide => guide.id > 2 && guide.id <= 5),
    "Remboursements spécifiques": guides.filter(guide => guide.id > 5)
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle category filter change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  // Filter guides based on search term and active category
  let filteredGuides = [...guides];
  
  // Apply search filter
  if (searchTerm.trim() !== "") {
    filteredGuides = filteredGuides.filter(guide => 
      guide.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  // Apply category filter
  if (activeCategory !== "all") {
    filteredGuides = filteredGuides.filter(guide => {
      if (activeCategory === "Mutuelle santé") return guide.id <= 2;
      if (activeCategory === "Contrats et droits") return guide.id > 2 && guide.id <= 5;
      if (activeCategory === "Remboursements spécifiques") return guide.id > 5;
      return false;
    });
  }

  // Group filtered guides by category for display
  const filteredCategories = {};
  
  if (activeCategory === "all") {
    // When showing all categories, maintain category structure
    Object.keys(categories).forEach(category => {
      const categoryGuides = categories[category].filter(guide => 
        searchTerm.trim() === "" || guide.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      if (categoryGuides.length > 0) {
        filteredCategories[category] = categoryGuides;
      }
    });
  } else {
    // When a specific category is selected, only show that category
    filteredCategories[activeCategory] = filteredGuides;
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tous nos guides de santé
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une ressource complète d'informations sur les mutuelles de santé, les remboursements et vos droits.
          </p>
        </div>

        {/* Search bar */}
        <div className="mb-12 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher un guide..."
              className="w-full py-3 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="absolute right-3 top-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "all" 
                ? "bg-blue-600 text-white" 
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
            }`}
            onClick={() => handleCategoryChange("all")}
          >
            Tous les guides
          </button>
          {Object.keys(categories).map(category => (
            <button 
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? "bg-blue-600 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* No results message */}
        {filteredGuides.length === 0 && (
          <div className="text-center py-16">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Aucun résultat trouvé</h3>
            <p className="text-gray-500">
              {searchTerm.trim() !== "" 
                ? `Aucun guide ne correspond à votre recherche "${searchTerm}" ${activeCategory !== "all" ? `dans la catégorie "${activeCategory}"` : ""}.`
                : `Aucun guide disponible ${activeCategory !== "all" ? `dans la catégorie "${activeCategory}"` : ""}.`
              }
            </p>
          </div>
        )}

        {/* Display guides */}
        {Object.keys(filteredCategories).length > 0 && 
          Object.entries(filteredCategories).map(([categoryName, categoryGuides]) => (
            <div key={categoryName} className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 pl-4 border-l-4 border-blue-600">
                {categoryName}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryGuides.map((guide) => (
                  <div
                    key={guide.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-3 cursor-pointer hover:text-blue-600"
                        onClick={() => navigate(`/guide/${guide.id}`)}
                      >
                        {guide.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {guide.description}
                      </p>
                      <button
                        onClick={() => navigate(`/guide/${guide.id}`)}
                        className="text-blue-600 font-medium hover:text-blue-800 flex items-center"
                      >
                        Lire la suite
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        }

        {/* Newsletter signup */}
        <div className="bg-blue-600 text-white rounded-lg py-10 px-6 md:px-12 mt-16">
          <div className="md:flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Recevez nos nouveaux guides</h3>
              <p className="text-blue-100 mb-6 md:mb-0">
                Inscrivez-vous à notre newsletter pour recevoir nos derniers guides et conseils directement dans votre boîte mail.
              </p>
            </div>
            <div className="flex md:w-1/3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-grow py-3 px-4 rounded-l-md text-gray-900 focus:outline-none"
              />
              <button className="bg-blue-800 hover:bg-blue-900 py-3 px-6 rounded-r-md transition-colors">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}