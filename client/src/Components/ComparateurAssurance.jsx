export default function ComparateurAssurance() {
    return (
        <section className="bg-gray-50 py-12 px-4 md:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <span className="bg-yellow-300 text-gray-800 px-3 py-1 rounded-md text-sm font-medium">
              Comment ça marche ?
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-4">
              Comment comparer avec Le Comparateur Assurance ?
            </h2>
            <p className="text-gray-600 mt-2">
              <strong>Comparer les assurances</strong> vous permet de trouver les contrats d'assurance offrant le <strong>meilleur rapport qualité/prix</strong>.
              Quelques minutes suffisent pour économiser des centaines d'euros par an.
            </p>
          </div>
    
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Étape 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 shadow-lg rounded-xl">
                <span className="text-4xl"> 📝</span>
              </div>
              <h3 className="font-semibold text-lg mt-4">1. Décrivez votre besoin</h3>
              <p className="text-gray-600 text-sm text-center">
                Complétez le formulaire en quelques minutes.
              </p>
            </div>
    
            {/* Flèche SVG */}
            <svg className="hidden md:block w-16 h-16 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
    
            {/* Étape 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 shadow-lg rounded-xl">
                <span className="text-4xl"> 💰 </span>
              </div>
              <h3 className="font-semibold text-lg mt-4">2. Comparez des milliers d'offres</h3>
              <p className="text-gray-600 text-sm text-center">
                Examinez les meilleurs tarifs d'un panel de +120 assureurs.
              </p>
            </div>
    
            {/* Flèche SVG */}
            <svg className="hidden md:block w-16 h-16 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
    
            {/* Étape 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 shadow-lg rounded-xl">
                <span className="text-4xl">📉</span>
              </div>
              <h3 className="font-semibold text-lg mt-4">3. Économisez sur votre contrat</h3>
              <p className="text-gray-600 text-sm text-center">
                Obtenez un devis gratuit et souscrivez directement chez l'assureur.
              </p>
            </div>
          </div>
        </section>
      );
  }
  