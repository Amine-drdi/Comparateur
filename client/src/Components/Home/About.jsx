//mport img1 from "../../assets/images/about.jpg";
import img1 from "../../assets/mutuelle-sante/images/about.jpg";

import { motion } from "framer-motion";
export default function About() {
    return (
        <section className="bg-gray-50 py-12 px-4 md:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <span className="bg-yellow-300 text-gray-800 px-3 py-1 rounded-md text-sm font-medium">
            Qui sommes-nous ?
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-12">
            Le Comparateur Assurance : Le plus large choix d'assureurs du marché
            </h2>

          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="flex flex-col gap-6 md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
                      <p className="text-gray-600 mt-2">
            <span className="text-blue-600">MonCompare.fr</span> a été créé pour répondre aux besoins des consommateurs en quête du contrat d’assurance idéal. <br/><br/>

            <strong>Un comparateur 100 % dédié à l'assurance </strong><br/>
             Notre mission : vous offrir une expertise approfondie et vous accompagner dans la recherche du contrat le plus adapté à votre profil, en toute simplicité. <br/><br/>

             <strong>Trouvez la meilleure offre au meilleur prix</strong><br/>
                Le Comparateur Assurance s'appuie sur un réseau de plus de 30 assureurs, courtiers et mutuelles pour vous proposer un large éventail de solutions. Que vous recherchiez une assurance auto, habitation, santé ou emprunteur, nous vous permettons de comparer des milliers de formules afin de faire le meilleur choix. Grâce à notre comparateur de prix, vous optimisez votre budget tout en bénéficiant d’une couverture optimale en cas de sinistre.
            </p>

        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={img1}
            alt="Notre mission"
            className="rounded-lg shadow-lg object-cover w-full max-w-md"
          />
        </motion.div>
      </div>

        </section>
      );
  }
  