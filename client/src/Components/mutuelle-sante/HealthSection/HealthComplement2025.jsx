import {healthSections} from "../../../assets/mutuelle-sante/Data/healthSections"
const HealthComplement2025 = () => {
    const profiles = [
      "Étudiant ou retraité",
      "personne âgée",
      "mère de famille",
      "fonctionnaire",
      "chef d'entreprise",
      "jeune couple",
      "famille nombreuse"
    ];
  
    return (
      <div className="max-w-3xl mx-auto p-4 bg-gray-50">
        <h1 className="text-2xl font-bold text-blue-800 mb-6">
          La complémentaire santé en 2025 :
          <a href="#en-savoir-plus" className="text-blue-600 text-base ml-2 underline hover:text-blue-800">
            en savoir plus
          </a>
        </h1>
  
        {healthSections.map((section) => (
          <div key={section.id} className="flex gap-4 bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="w-1/3">
              <img
                src={section.imageSrc}
                alt={section.imageAlt}
                className="w-full h-32 object-cover rounded-md"
              />
            </div>
            <div className="w-2/3">
              <a href={`healthSection/${section.id}`} className="text-lg font-semibold text-blue-600 hover:text-blue-800 mb-2 block">
                {section.title}
              </a>
              <p className="text-sm text-gray-600">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  
  };
  
  export default HealthComplement2025;