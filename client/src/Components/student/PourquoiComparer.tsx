import React from 'react'
import AvisEtSujetsLiés from '../../Components/student/AvisEtSujetsLiés';

const mutuelles = [
    {
      nom: "Minimum",
      prix: "850€",
      PrixMoyen : "446€",
    },
    {
      nom: "Moyen",
      prix: "1465€",
      PrixMoyen : "981€",
    },
    {
      nom: "Fort",
      prix: "2100€",
      PrixMoyen : "1417€",
    },
    {
      nom: "Maximum",
      prix: "2395€",
      PrixMoyen : "2107€",
    },
  ];
const PourquoiComparer = () => {
  return (
    <div>

<h2 className="text-xl font-bold mb-4">
Pourquoi comparer les mutuelles pour étudiants avec Devis Mutuelle ?
      </h2>
    <div   className="text-sm mb-6">
En souscrivant à une mutuelle étudiante vous êtes sûr d’être couvert si vous avez besoin de soins. Vous serez remboursé de la partie que la Sécurité Sociale ne prend pas en charge lorsque vous allez chez le médecin ou que vous allez acheter des médicaments.

Une comparaison avec lesfurets vous permet d’évaluer les différentes offres de mutuelles pour étudiants selon vos critères pour trouver celle qui vous convient le mieux. Cela peut impacter sur votre budget mais vous pouvez choisir un niveau de couverture qui correspond à vos finances mais aussi à vos besoins.

Un devis sera alors créé à partir de vos informations et de ce que vous avez sélectionné.
    </div>
     <div className="overflow-x-auto">
     <table className="w-full border border-gray-300 text-sm text-left">
       <thead className="bg-gray-100">
         <tr>
           <th className="px-4 py-2 border">Besoins</th>
           <th className="px-4 py-2 border">Prix moyen en €/an</th>
           <th className="px-4 py-2 border">Prix moyen le moins cher chez lesfurets en €/an</th>
         </tr>
       </thead>
       <tbody>
         {mutuelles.map((item, index) => (
           <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}>
             <td className="px-4 py-2 border">{item.nom}</td>
             <td className="px-4 py-2 border">{item.prix}</td>
             <td className="px-4 py-2 border">{item.PrixMoyen}</td>
           </tr>
         ))}
       </tbody>
     </table>
   </div>
   <AvisEtSujetsLiés/>
   </div>
  )
}

export default PourquoiComparer