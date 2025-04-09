import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import logo from "/images/icons/logo.png"
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
    <div className=" bg-sky-800 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgMEw2MCAzMEwzMCA2MEwwIDMwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU2LDE4MiwyNDUsMC4xNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] text-white">
      <section className="container py-10">
        <div className="grid md:grid-cols-3 gap-8 py-5 px-36">
          {/* Company Details */}
          <div className="py-8 px-4">
            <a href="#" className="flex items-center whitespace-nowrap text-2xl font-black text-black">
        <span className="mr-2 text-4xl text-blue-500">
                   <img src={logo} alt="Company Logo" className="h-12 w-auto" />
        </span>
        MonCompare
      </a>
          

            <p className="text-sm">
              Nous offrons une expertise approfondie et vous accompagner dans la recherche du contrat le plus adapté à votre profil.
            </p>
            <br />
           
          </div>

          {/* Links + Contact Section */}
          <div className="grid grid-cols-2 col-span-2 gap-1">
            {/* Links */}
            <div className="py-8 px-4">
              <h2 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Liens utiles</h2>
              <ul className="flex flex-col gap-3">
                {LiensRapide.map((link) => (
                  <li
                    key={link.title}
                    className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-white"
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

        <div className="flex items-center justify-between w-full p-4 ">

  {/* Copyright */}
  <p className="text-white font-normal text-md flex-1 text-center">
    © 2025 LNR Finance. Tous droits réservés.
  </p>

  {/* Social Media */}
  <div className="flex items-center gap-2">
    <a href="/">
      <FaInstagram className="text-2xl hover:text-primary duration-300 " />
    </a>
    <a href="/">
      <FaFacebook className="text-2xl hover:text-primary duration-300 " />
    </a>
    <a href="/">
      <FaLinkedin className="text-2xl hover:text-primary duration-300" />
    </a>
  </div>
</div>


      </section>
    </div>
  );
};

export default Footer;
