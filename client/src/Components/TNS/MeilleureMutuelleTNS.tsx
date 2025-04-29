import React from 'react';

export default function MeilleureMutuelleTNS() {
  return (
    <section className="bg-gray-50 py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
          Quelle est la meilleure mutuelle pour vous en tant que TNS ?
        </h2>
        <p className="text-gray-700 mb-4">
          Pour trouver la meilleure complémentaire santé pour les travailleurs non salariés, vous devez réaliser une comparaison de mutuelles.
          Le comparateur en ligne vous propose de comparer rapidement et à n'importe quel moment de la journée une trentaine de mutuelles partenaires.
          Ce service gratuit vous permet de trouver celle qui vous convient le mieux en fonction de votre profil et de vos besoins de santé.
        </p>
        <p className="text-gray-700 mb-6">
          Toutefois, la meilleure mutuelle n'est pas forcément la moins chère de toutes, mais celle qui va vous proposer les meilleures garanties au meilleur prix.
          Pour vous donner une idée des prix pratiqués voici les 10 mutuelles les moins chères parmi nos partenaires :
        </p>

        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full text-sm text-gray-700">
            <thead>
              <tr className="bg-gray-100 text-gray-800">
                <th className="px-6 py-4 text-left font-semibold">Partenaire</th>
                <th className="px-6 py-4 text-left font-semibold">Prix moyen en €/an</th>
                <th className="px-6 py-4 text-left font-semibold">Prix moyen le moins cher chez lesfurets en €/an</th>
              </tr>
            </thead>
            <tbody>
              {[
                { partenaire: 'Swisslife', prixMoyen: '111€', prixMoinsCher: '139€' },
                { partenaire: 'Mutuelle Ociane Matmut', prixMoyen: '117€', prixMoinsCher: '96€' },
                { partenaire: 'Direct Assurance', prixMoyen: '129€', prixMoinsCher: '107€' },
                { partenaire: 'Cocoon', prixMoyen: '124€', prixMoinsCher: '91€' },
                { partenaire: 'M comme Mutuelle', prixMoyen: '135€', prixMoinsCher: '121€' },
                { partenaire: 'Smatis', prixMoyen: '146€', prixMoinsCher: '130€' },
                { partenaire: 'Miltis', prixMoyen: '142€', prixMoinsCher: '120€' },
                { partenaire: 'MGC', prixMoyen: '149€', prixMoinsCher: '103€' },
                { partenaire: 'Alptis', prixMoyen: '152€', prixMoinsCher: '142€' },
                { partenaire: 'AcommeAssure', prixMoyen: '156€', prixMoinsCher: '86€' },
              ].map((item, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                  <td className="px-6 py-4 font-medium">{item.partenaire}</td>
                  <td className="px-6 py-4">{item.prixMoyen}</td>
                  <td className="px-6 py-4">{item.prixMoinsCher}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
