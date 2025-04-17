import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export default function BanniereDevis() {
  return (
    <div className="flex items-center justify-between bg-[#cceeff] border border-blue-400 rounded-lg p-4 md:p-6 w-full max-w-5xl mx-auto shadow-sm">
      <div className="flex items-center space-x-4">
        <div className="bg-green-500 text-white p-3 rounded-full shadow-md">
          <FaPlus className="w-5 h-5" />
        </div>
        <p className="text-[#003E5F] font-semibold text-sm md:text-base">
          Devis personnalisé. Couverture dentaire optimale. Souscription rapide.
        </p>
      </div>

      {/* Lien vers la page devis */}
      <Link
        to="/compare"
        className="bg-[#FF6134] hover:bg-[#e2542d] text-white font-semibold text-sm md:text-base px-6 py-3 rounded-md transition duration-200"
      >
        Obtenir un devis
      </Link>
    </div>
  );
}
