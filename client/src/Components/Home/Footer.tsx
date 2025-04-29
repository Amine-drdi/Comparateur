import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const LiensRapide = [
  { title: "Accueil", link: "/home" },
  { title: "Qui sommes-nous", link: "" },
  { title: "Assurances", link: "s" },
  { title: "Contact", link: "" },
  { title: "Mentions légales", link: "" },
];

const Footer = () => {
  return (
    <div className="bg-sky-800 text-white bg-[url('data:image/svg+xml;base64,...')]">
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        {/* Main grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <a href="#" className="flex items-center text-2xl font-black text-white mb-4">
            <img src="src/assets/Accueil/images/mutuelle2.png" alt="logo" className="w-10 h-10" />
          <span className="text-sm md:text-lg font-bold text-orange-600">
            Devis <span className="text-blue-600">mutuelle</span>
          </span>
            </a>
            <p className="text-sm leading-relaxed"> 
            
              Nous offrons une expertise approfondie et vous accompagnons dans la recherche du contrat le plus adapté à votre profil.
            </p>
          </div>

          {/* Liens utiles */}
          <div>
            <h2 className="text-xl font-bold mb-3">Liens utiles</h2>
            <ul className="space-y-2">
              {LiensRapide.map((link) => (
                <li key={link.title} className="hover:text-blue-300 transition">
                  <Link to={link.link}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordonnées */}
          <div>
            <h2 className="text-xl font-bold mb-3">Coordonnées</h2>
            <div className="flex items-center gap-2 mb-2">
              <FaPhone className="text-lg" />
              <p className="text-sm">+33 75666333</p>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-lg" />
              <p className="text-sm">exemple@gmail.com</p>
            </div>
          </div>
        </div>

        <hr className="border-white/20 mb-4" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center text-sm">
          <p className="flex-1">© 2025 Devis mutuelle  Tous droits réservés.</p>
          <div className="flex gap-4 justify-center">
            <a href="/" className="hover:text-blue-300">
              <FaInstagram className="text-xl" />
            </a>
            <a href="/" className="hover:text-blue-300">
              <FaFacebook className="text-xl" />
            </a>
            <a href="/" className="hover:text-blue-300">
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>
      </section> 
    </div>
  );
};

export default Footer;
