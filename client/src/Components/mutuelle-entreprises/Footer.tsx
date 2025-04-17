import {
    FaFacebookF,
    FaXTwitter,
    FaYoutube,
    FaLinkedinIn,
    FaInstagram,
    FaTiktok,
  } from "react-icons/fa6";
  
  export default function AssuranceFooter() {
    return (
      <footer className="bg-[#f8f8f8] text-[#002b45] px-6 py-10">
        <div className="flex items-center space-x-3 mb-6">
          <img src="/logo-lesfurets.svg" alt="Lesfurets" className="w-24" />
          <div className="flex items-center space-x-2 text-sm">
            <img src="/logo-avis-verifies.svg" alt="Avis Vérifiés" className="w-5 h-5" />
            <span className="font-bold">4,1</span>
            <div className="text-yellow-500">★★★★☆</div>
            <span className="text-gray-600">(9263 avis)</span>
          </div>
        </div>
  
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-sm text-gray-700">
          <a href="#">lesfurets</a>
          <a href="#">Qui sommes-nous ?</a>
          <a href="#">Fonctionnement de notre comparateur</a>
          <a href="#">Protection des données</a>
          <a href="#">Conditions d'utilisation</a>
          <a href="#">Politique des cookies</a>
          <a href="#">Service Presse</a>
          <a href="#">Nous rejoindre</a>
          <a href="#">Nous contacter</a>
        </div>
  
        <div className="flex space-x-4 mt-6 text-xl text-gray-700">
          <FaFacebookF className="hover:text-[#1877f2] cursor-pointer" />
          <FaXTwitter className="hover:text-black cursor-pointer" />
          <FaYoutube className="hover:text-[#ff0000] cursor-pointer" />
          <FaLinkedinIn className="hover:text-[#0077b5] cursor-pointer" />
          <FaInstagram className="hover:text-[#e1306c] cursor-pointer" />
          <FaTiktok className="hover:text-black cursor-pointer" />
        </div>
  
        <div className="text-xs text-right text-gray-400 pt-4">
          Activate Windows — Go to Settings to activate Windows.
        </div>
      </footer>
    );
  }
  