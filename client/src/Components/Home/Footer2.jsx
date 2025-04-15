import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
const LiensRapide = [
  {
    title: "Accueil",
    link: "/home",
  },
  {
    title: "Qui sommes-nous",
    link: "",
  },
  {
    title: "Assurances",
    link: "s",
  },
  {
    title: "Contact",
    link: "",
  },
  {
    title: "Mentions légales",
    link: "",
  },
];

const Footer = () => {
  return (
    <div className="bg-sky-900 text-white">
      <section className="container py-10">
        <div className="grid md:grid-cols-3 gap-8 py-5 px-36">
          {/* Company Details */}
          <div className="py-8 px-4">
            <a href="#" className="flex items-center whitespace-nowrap text-2xl font-black text-black">
        <span className="mr-2 text-4xl text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm1.65-2.65L11.5 12.2V9h1v2.79l1.85 1.85l-.7.71z"/>
          </svg>
        </span>
        MonCompare
      </a>
          

            <p className="text-sm">
              Nous offrons une expertise approfondie et vous accompagner dans la recherche du contrat le plus adapté à votre profil.
            </p>
            <br />
           
          </div>

          {/* Links + Contact Section */}
          <div className="grid grid-cols-2 col-span-2 gap-8">
            {/* Links */}
            <div className="py-8 px-4">
              <h2 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Liens utiles</h2>
              <ul className="flex flex-col gap-3">
                {LiensRapide.map((link) => (
                  <li
                    key={link.title}
                    className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400"
                  >
                    <Link to={link.link}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="py-8 px-4">
  <h2 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Coordonnées</h2>
  
  {/* Téléphone */}
  <div className="flex items-center gap-2">
    <FaPhone className="text-lg" /> {/* Taille de l'icône ajustée si nécessaire */}
    <p className="text-sm">+33 75666333</p>
  </div>

  {/* Email */}
  <div className="flex items-center gap-2 mt-2">
    <MdEmail className="text-lg" /> {/* Taille de l'icône ajustée si nécessaire */}
    <p className="text-sm">exemple@gmail.com</p>
  </div>
   
</div>

          </div>
        </div>
<hr/>
        {/* Copyright Section */}
        <div>
        <p className="text-white font-semibold text-center text-md">
          © {new Date().getFullYear()} LNR Finance. Tous droits réservés.
        </p>

        {/* Social Handle */}
   <div className="flex items-end justify-end gap-4 mt-6">
              <a href="#">
                <FaInstagram className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-2xl hover:text-primary duration-300" />
              </a>
            </div>
            </div>
      </section>
    </div>
  );
};

export default Footer;
