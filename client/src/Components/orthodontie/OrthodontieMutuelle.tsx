export default function OrthodontieMutuelle() {
  return (
    <section className="bg-white py-14 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-8">
          Tout ce qu’il faut savoir sur la mutuelle santé dédiée aux soins orthodontiques
        </h2>

        <h3 className="text-xl font-semibold text-blue-900 mb-3">
          Ce que couvre la Sécurité sociale pour un appareil dentaire adulte ou enfant
        </h3>
        <p className="mb-4">
          Il est important de noter que les traitements orthodontiques (bagues, appareils dentaires, etc.) ne sont généralement pas remboursés par la Sécurité sociale pour les personnes âgées de plus de 16 ans.
        </p>
        <p className="mb-4">
          Pour les enfants de moins de 16 ans, l’Assurance Maladie applique un tarif conventionné, mais celui-ci ne prend pas en compte les dépassements d’honoraires souvent pratiqués par les spécialistes.
        </p>
        <p className="mb-4">
          Tandis que les enfants peuvent bénéficier d’une prise en charge allant jusqu’à 100 % de la <a href="#" className="text-blue-600 underline">BRSS</a>, les adultes ne profitent d’aucun remboursement pour ce type de soin.
        </p>
        <p className="mb-4">
          Puisque les orthodontistes fixent librement leurs honoraires (hors consultation initiale), <strong className="text-blue-800">les coûts peuvent rapidement devenir importants pour les familles</strong>.
        </p>
        <p className="mb-6">
          De plus, un traitement orthodontique ne se limite pas à l’appareil lui-même : <strong>il faut prévoir un suivi régulier sur plusieurs années</strong>, avec les dépenses supplémentaires que cela implique.
        </p>

        <h3 className="text-xl font-semibold text-blue-900 mt-10 mb-3">
          Comment est calculé le remboursement de l’orthodontie par la mutuelle et la Sécurité sociale ?
        </h3>
        <p className="mb-4">Voici un exemple concret pour un patient de moins de 16 ans.</p>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border text-sm text-left text-gray-700">
            <thead className="bg-blue-50 text-blue-900">
              <tr>
                <th className="px-4 py-3">&nbsp;</th>
                <th className="px-4 py-3">Traitement par semestre</th>
                <th className="px-4 py-3">Contention 1ère année</th>
                <th className="px-4 py-3">Contention 2ème année</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Coût total', '800€', '450€', '450€'],
                ['Base de remboursement Sécu', '193,50€', '161,50€', '107,50€'],
                ['Taux de remboursement Sécu', '100%', '100%', '70%'],
                ['Montant remboursé Sécu', '193,50€', '161,25€', '75,25€'],
                ['Part mutuelle', '483€', '288,75€', '374,75€'],
                ['Reste à charge', <strong>123,50€</strong>, <strong>0€</strong>, <strong>0€</strong>],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mb-4">Simulation pour un patient de plus de 16 ans :</p>

        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm text-left text-gray-700">
            <thead className="bg-blue-50 text-blue-900">
              <tr>
                <th className="px-4 py-3">&nbsp;</th>
                <th className="px-4 py-3">Traitement par semestre</th>
                <th className="px-4 py-3">Contention 1ère année</th>
                <th className="px-4 py-3">Contention 2ème année</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Coût total', '800€', '450€', '450€'],
                ['Base Sécu', '-', '-', '-'],
                ['Taux Sécu', '-', '-', '-'],
                ['Remboursement Sécu', 'Aucun', 'Aucun', 'Aucun'],
                ['Part mutuelle', '483€', '376€', '376€'],
                ['Reste à charge', <strong>317€</strong>, <strong>74€</strong>, <strong>74€</strong>],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-semibold text-blue-900">
            Exemple de remboursement orthodontique adulte avec mutuelle santé
          </h3>
          <p>
            Vous avez souscrit une complémentaire santé pour l’orthodontie adulte. Celle-ci couvre les frais réels, avec une franchise de 200€. Cela signifie que vous payez uniquement cette franchise.
          </p>
          <p>
            Un devis estimatif de 2500€ vous est remis pour un traitement complet. L’Assurance Maladie ne prenant rien en charge après 16 ans, votre mutuelle couvre jusqu’à 2300€.
          </p>
          <p>
            En résumé, seule la franchise de 200€ reste à votre charge, ce qui reste très avantageux.
          </p>

          <h4 className="text-lg font-semibold text-blue-900">
            Pourquoi faire une demande d’entente préalable ?
          </h4>
          <p>
            Pour les enfants de moins de 16 ans, obtenir le remboursement nécessite une demande d’accord préalable à envoyer à l’Assurance Maladie. Sans cet accord, la mutuelle ne versera pas sa part.
          </p>

          <h4 className="text-lg font-semibold text-blue-900">
            Où envoyer cette demande ?
          </h4>
          <p>
            Une fois le devis orthodontique accepté, votre praticien complète le formulaire d’entente préalable, que vous transmettez à votre caisse de Sécurité sociale.
          </p>
          <p>
            Sans réponse sous 15 jours, l’accord est considéré comme donné. Vous pouvez donc démarrer les soins sereinement.
          </p>
        </div>
      </div>
    </section>
  );
}
