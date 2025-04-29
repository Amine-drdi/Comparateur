import React from "react";
import {partenaires }from "../../assets/senior/Data/partenaires"
export default function ClassementMutuelleSenior() {
    type Mutuelle = {
        partenaire: string;
        prixMoyen: string;
        prixDevisMutuelle: string;
      };
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 text-gray-700">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-teal-900">Comparatif des mutuelles seniors</h2>
      <p className="mb-4 leading-relaxed">
        Vous souhaitez souscrire une <span className="text-blue-600 font-semibold">mutuelle santé</span> adaptée à vos besoins médicaux ? 
        Un classement peut vous aider à identifier les options les plus abordables. 
        Toutefois, ne vous limitez pas uniquement au prix : la meilleure mutuelle senior est celle qui offre une couverture optimale pour vos soins médicaux et un bon rapport qualité/prix.
      </p>
      <p className="mb-4 leading-relaxed">
        Pour vous orienter, voici une sélection des <strong>10 mutuelles seniors les moins chères</strong> selon <span className="text-blue-600 font-semibold">Devis mutuelle</span> pour l’année 2025.
      </p>

      <div className="overflow-x-auto bg-white rounded-lg shadow-md mt-6">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-blue-100 text-left">
              <th className="p-4 border border-gray-200 font-semibold">Partenaire</th>
              <th className="p-4 border border-gray-200 font-semibold">Prix moyen en €/an</th>
              <th className="p-4 border border-gray-200 font-semibold">Prix chez Devis mutuelle en €/an</th>
            </tr>
          </thead>
          <tbody>
          {partenaires.map((mutuelle: Mutuelle, idx: number) => (
  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-blue-50"}>
    <td className="p-4 border border-gray-200">{mutuelle.partenaire}</td>
    <td className="p-4 border border-gray-200">{mutuelle.prixMoyen}</td>
    <td className="p-4 border border-gray-200">{mutuelle.prixDevisMutuelle}</td>
  </tr>
))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
