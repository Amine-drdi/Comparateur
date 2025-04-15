import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import mutuelleImage from "../../assets/mutuelle-entreprises/images/mutuelle.jpg"


export default function QuestionsSection() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex text-sm mb-8 text-gray-600">
        <a href="#" className="hover:text-blue-600">Accueil</a>
        <span className="mx-2">›</span>
        <a href="#" className="hover:text-blue-600">Assurance professionnelle</a>
        <span className="mx-2">›</span>
        <span className="text-gray-500">Mutuelle entreprise</span>
      </div>

      <h1 className="text-3xl font-bold text-teal-800 mb-6">Mutuelle entreprise</h1>

      <p className="mb-8 text-gray-700">
        Depuis le 1er janvier 2016, tous les employeurs sont dans l'obligation de faire bénéficier leurs salariés d'une mutuelle d'entreprise.
        Quelles sont les entreprises concernées ? Quelles sont les conditions de couverture des salariés ?
        Quels avantages pour votre structure ? On vous explique tout sur cette 
        <a href="#" className="text-blue-500 hover:underline"> assurance professionnelle</a>.
      </p>

      {/* Sommaire */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold text-teal-800 mb-4">Sommaire</h2>

        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <a href="#section1" className="text-blue-500 hover:underline">
              Qu'est-ce qu'une mutuelle pour entreprise ?
            </a>
          </li>
          <li>
            <a href="#section2" className="text-blue-500 hover:underline">
              La mutuelle d'entreprise est-elle obligatoire ou pas ?
            </a>
          </li>
          {isExpanded && (
            <>
              <li>
                <a href="#section3" className="text-blue-500 hover:underline">
                  Que couvre la mutuelle professionnelle ?
                </a>
              </li>
              <li>
                <a href="#section4" className="text-blue-500 hover:underline">
                  Quels sont les avantages ?
                </a>
              </li>
              <li>
                <a href="#section5" className="text-blue-500 hover:underline">
                  Quel est le prix d'une mutuelle collective ?
                </a>
              </li>
              <li>
                <a href="#section6" className="text-blue-500 hover:underline">
                  Quelles sont les personnes concernées ?
                </a>
              </li>
              <li>
                <a href="#section7" className="text-blue-500 hover:underline">
                  Pourquoi utiliser notre comparateur de mutuelle d'entreprise ?
                </a>
              </li>
              <li>
                <a href="#section8" className="text-blue-500 hover:underline">
                Les guides et actualités assurance professionnelle 
                </a>
              </li>
            </>
          )}
        </ol>

        <button 
          onClick={toggleExpand}
          className="flex items-center mt-6 text-blue-500 hover:text-blue-700"
        >
          <span>Afficher {isExpanded ? 'moins' : 'plus'}</span>
          <ChevronDown className={`ml-2 w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>
      <img
              src={mutuelleImage} // remplace par l’URL correcte selon ton projet
              alt="Mutuelle entreprise"
              className="w-full h-auto object-cover"
            />
      {/* Sections détaillées */}
      <div className="space-y-10 text-gray-700">
        <section id="section1">
          <h2 className="text-2xl font-bold text-teal-700 mb-4">Qu’est-ce qu’une mutuelle pour entreprise ?</h2>
          <p>
            Une mutuelle d’entreprise est une mutuelle souscrite par un employeur pour l’ensemble de ses salariés. 
            Cette mutuelle professionnelle permet de prendre en charge les soins non remboursés par la Sécurité sociale. 
            Les garanties s’appliquent au salarié et, bien souvent, aux membres de sa famille.
          </p>
        </section>

        <section id="section2">
          <h2 className="text-2xl font-bold text-teal-700 mb-4">La mutuelle d'entreprise est-elle obligatoire ou pas ?</h2>
          <p>
            Depuis la loi ANI, toutes les sociétés doivent proposer une mutuelle à leurs salariés, sans condition d'ancienneté. 
            Des dispenses sont possibles, notamment si le salarié est déjà couvert par une autre mutuelle collective, bénéficie de la CSS, 
            est en CDD de moins de 3 mois ou travaille à temps partiel avec une cotisation dépassant 10 % de son salaire.
          </p>
        </section>

        <section id="section3">
          <h2 className="text-2xl font-bold text-teal-700 mb-4">Que couvre la mutuelle professionnelle ?</h2>
          <p>
            Le panier minimal inclut le ticket modérateur, 100% du forfait hospitalier, 125% pour les frais dentaires, 
            et un forfait optique allant de 100€ à 200€, renouvelable tous les 2 ans (ou avant pour les enfants ou évolution de correction).
          </p>
        </section>

        <section id="section4">
          <h2 className="text-2xl font-bold text-teal-700 mb-4">Quels sont les avantages ?</h2>
          <p>
            Pour les salariés : cotisations réduites (prises en charge à 50% mini par l’employeur), 
            couverture familiale, déduction fiscale sur le revenu. Pour l’employeur : charges déductibles, 
            exonérations sociales, non-assujettissement au forfait social pour les TPE.
          </p>
        </section>

        <section id="section5">
          <h2 className="text-2xl font-bold text-teal-700 mb-4">Quel est le prix d’une mutuelle collective ?</h2>
          <p>
            Le tarif dépend de l'assureur, du nombre et profil des salariés, de la convention collective, 
            des garanties choisies et services annexes. Exemples :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Homme 40 ans seul : 33,63 €/mois</li>
            <li>Femme 30 ans avec conjoint et 3 enfants : 81,71 €/mois</li>
            <li>Homme 60 ans avec conjointe : 32,27 €/mois</li>
            <li>Femme 25 ans seule : 24,11 €/mois</li>
          </ul>
        </section>

        <section id="section6">
          <h2 className="text-2xl font-bold text-teal-700 mb-4">Quelles sont les personnes concernées ?</h2>
          <p>
            Elle concerne les salariés du privé, tous secteurs et tailles confondus. 
            Les travailleurs indépendants et le public ne sont pas concernés. 
            Les ayants droit (conjoint, enfants jusqu’à 26 ans, sans limite pour les enfants handicapés) peuvent être rattachés.
          </p>
        </section>

        <section id="section7">
          <h2 className="text-2xl font-bold text-teal-700 mb-4">Pourquoi utiliser notre comparateur de mutuelle d’entreprise ?</h2>
          <p>
          Il est très difficile de donner une moyenne de tarif d’une mutuelle de groupe obligatoire, tant les paramètres à prendre en compte sont nombreux.

Voilà pourquoi demander des devis sur un comparateur de mutuelle entreprise est une excellente idée. Le comparateur lesfurets vous permettra de voir, d’un coup d’œil, les meilleures offres du marché pour trouver la meilleure mutuelle entreprise.

Certains assureurs vous demandent de les contacter par téléphone, mail ou en vous rendant directement en agence, ce qui fait perdre du temps ! lesfurets vous propose un outil de devis en ligne simple, puissant et qui vous fera faire des économies.

Il suffit de répondre à un questionnaire unique, et vous obtenez en 2 minutes des devis de mutuelle entreprise.

Il est obligatoire, pour tout employeur, de souscrire une mutuelle entreprise pour chacun de ses salariés. En contrepartie, il bénéficie d’avantages fiscaux. Pour les employés, les bénéfices sont indéniables aussi : la mutuelle obligatoire est un moyen d’être bien couvert à petit prix.
          </p>
        </section>
        <section id="section8">
          <h2 className="text-2xl font-bold text-teal-700 mb-4">Les guides et actualités assurance professionnelle
          </h2>
          <p>
          Retrouvez nos guides conseils ainsi que les dernières actualités du monde de l'assurance professionnelle.
          </p>
        </section>
      </div>
{/* Sujets liés */}
{/* Sujets liés */}
<div className="bg-gray-50 py-10 px-6 rounded-lg shadow-md mt-16">
  <h2 className="text-2xl font-bold text-teal-800 mb-6">
    Mutuelle entreprise : <span className="text-teal-800">les sujets liés</span>
  </h2>
  <ul className="space-y-2 text-teal-800 text-base font-medium">
    <li className="flex items-start">
      <span className="text-teal-600 mr-2 mt-1">•</span>
      <a href="#" className="hover:underline hover:text-teal-600">
        Assurance multirisque professionnelle
      </a>
    </li>
    <li className="flex items-start">
      <span className="text-teal-600 mr-2 mt-1">•</span>
      <a href="#" className="hover:underline hover:text-teal-600">
        Assurance responsabilité civile professionnelle
      </a>
    </li>
    <li className="flex items-start">
      <span className="text-teal-600 mr-2 mt-1">•</span>
      <a href="#" className="hover:underline hover:text-teal-600">
        Garantie décennale
      </a>
    </li>
  </ul>
</div>


    
    </div>
  );
}
