import React from 'react';

export default function CompareMutuellesTNS() {
  const data = [
    { mutuelle: 'Mutuelle GSMC', prix: '33€', sante100: 'OUI', consultation: '100%', sejour: '600%', implants: '125%', montant: '130€ (50€ par verre)' },
    { mutuelle: 'M comme Mutuelle', prix: '33€', sante100: 'NON', consultation: '100%', sejour: '100%', implants: 'NON', montant: 'NON' },
    { mutuelle: 'Ociane Matmut', prix: '37€', sante100: 'OUI', consultation: '100%', sejour: '100%', implants: 'NON', montant: 'NON' },
    { mutuelle: 'Selfassurance', prix: '39€', sante100: 'OUI', consultation: '100%', sejour: '100%', implants: 'NON', montant: '100%' },
    { mutuelle: 'Direct Assurance', prix: '42€', sante100: 'OUI', consultation: '100%', sejour: '100%', implants: 'NON', montant: '100% (optique)' },
  ];

  return (
    <section className="bg-gray-50 py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-6">
          Comparez les mutuelles santé pour les travailleurs indépendants
        </h2>
        <p className="text-gray-700 mb-4">
          La comparaison de mutuelles vous permet de trouver celle qui est faite pour vous et qui sera la moins chère possible.
          C’est en comparant un ensemble de mutuelles que vous allez vous rendre compte de celle qui a le plus attractive pour vous,
          mais qui propose le plus de garanties possibles qui peuvent vous intéresser dans votre parcours de soins.
        </p>
        <p className="text-gray-700 mb-6">
          Voici ce que je te propose à la page de résultats :
        </p>

        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full text-sm text-gray-700">
            <thead>
              <tr className="bg-gray-100 text-gray-800">
                <th className="px-6 py-4 text-left font-semibold">Mutuelle</th>
                <th className="px-6 py-4 text-left font-semibold">Prix/mois</th>
                <th className="px-6 py-4 text-left font-semibold">100% Santé</th>
                <th className="px-6 py-4 text-left font-semibold">Consultation généraliste</th>
                <th className="px-6 py-4 text-left font-semibold">Frais de séjour hospitalisation (conventionnée)</th>
                <th className="px-6 py-4 text-left font-semibold">Implants dentaires</th>
                <th className="px-6 py-4 text-left font-semibold">Monture optique</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                  <td className="px-6 py-4 font-medium">{item.mutuelle}</td>
                  <td className="px-6 py-4">{item.prix}</td>
                  <td className="px-6 py-4">{item.sante100}</td>
                  <td className="px-6 py-4">{item.consultation}</td>
                  <td className="px-6 py-4">{item.sejour}</td>
                  <td className="px-6 py-4">{item.implants}</td>
                  <td className="px-6 py-4">{item.montant}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          Ce comparatif a été réalisé à partir des 5 premiers résultats d'une comparaison de mutuelles santé effectuée sur Devis Mutuelle le 11/03/2025.
          Le profil utilisé est celui d'un homme né en 1985, autoentrepreneur et habitant à Lille. Les données présentées dans ce tableau sont données à titre indicatif
          et ne sauraient constituer une obligation de la part des assureurs.
        </p>

        <div className="bg-blue-100 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            Est-ce que la mutuelle pour les TNS est obligatoire ?
          </h3>
          <p className="text-gray-700">
            Non, la mutuelle TNS n’est pas obligatoire pour les travailleurs indépendants. Contrairement aux salariés,
            ils ne bénéficient pas d'une mutuelle d’entreprise et doivent souscrire une complémentaire santé par eux-mêmes.
            Il est tout de même recommandé de souscrire un contrat de mutuelle pour couvrir les frais non remboursés par l'Assurance Maladie.
          </p>
        </div>
      </div>
    </section>
  );
}
