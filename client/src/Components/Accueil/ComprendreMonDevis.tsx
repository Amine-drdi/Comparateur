import React from "react";
import { FaFileContract, FaMoneyBillWave, FaInfoCircle, FaGavel } from "react-icons/fa";

export default function ComprendreMonDevis() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-gray-800 space-y-10">
      {/* Titre principal */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Que contient un devis de mutuelle&nbsp;?</h2>
        <p className="mb-4">
          Avant de souscrire une complémentaire santé, il est vivement recommandé de comparer plusieurs offres. 
          Obtenir un devis est <span className="font-semibold">gratuit</span>, rapide, et surtout <span className="font-semibold">sans aucun engagement</span>.
        </p>
        <p className="mb-6">Un devis de mutuelle contient généralement les éléments suivants :</p>

        {/* Icônes et blocs d'information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 border rounded-lg shadow hover:shadow-md">
            <FaFileContract className="text-3xl mx-auto mb-2 text-blue-600" />
            <p className="font-semibold">Tableau des garanties</p>
          </div>
          <div className="p-4 border rounded-lg shadow hover:shadow-md">
            <FaMoneyBillWave className="text-3xl mx-auto mb-2 text-green-600" />
            <p className="font-semibold">Montant des cotisations</p>
          </div>
          <div className="p-4 border rounded-lg shadow hover:shadow-md">
            <FaInfoCircle className="text-3xl mx-auto mb-2 text-orange-600" />
            <p className="font-semibold">Notice d'information</p>
          </div>
          <div className="p-4 border rounded-lg shadow hover:shadow-md">
            <FaGavel className="text-3xl mx-auto mb-2 text-purple-600" />
            <p className="font-semibold">Mentions légales</p>
          </div>
        </div>
      </section>

      {/* Détails et explication */}
      <section className="space-y-4 text-sm md:text-base">
        <p>
          <span className="font-semibold">Le tableau des garanties</span> détaille l’ensemble des remboursements poste par poste (consultations, pharmacie, soins dentaires, hospitalisation, etc.).
        </p>
        <p>
          <span className="font-semibold">La notice d’information</span> décrit les conditions d’adhésion, les garanties, exclusions, et modalités du contrat.
        </p>
        <p>
          <span className="font-semibold">Les coordonnées de l’assureur</span> sont également incluses pour toute prise de contact.
        </p>
        <p>
          <span className="font-semibold">La cotisation mensuelle</span> est affichée, incluant ou non les frais annexes.
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-bold text-red-600">Important :</span> Les tarifs indiqués sont les mêmes que ceux proposés par les assureurs en direct. Comparez et économisez jusqu’à 36% avec notre outil de simulation en ligne !
        </p>
      </section>

      {/* Informations profil */}
      <section>
        <h3 className="text-xl font-semibold mb-4">
          Pourquoi vos informations sont importantes pour le comparatif&nbsp;?
        </h3>
        <p className="mb-4">
          Lorsque vous effectuez une demande de tarif pour une mutuelle santé, certaines données sont utilisées pour vous proposer un{" "}
          <span className="font-semibold">comparatif sur mesure</span>. Ces informations permettent aux compagnies d’assurance d’établir un tarif adapté à votre profil.
        </p>

        <ul className="list-disc list-inside space-y-1 mb-4">
          <li><span className="font-semibold">Nombre d’assurés :</span> individuel, en couple ou avec enfants.</li>
          <li><span className="font-semibold">Âge :</span> les tarifs varient selon votre tranche d’âge.</li>
          <li><span className="font-semibold">Département :</span> selon les régions, les tarifs peuvent différer.</li>
          <li><span className="font-semibold">Régime social :</span> salarié, indépendant, fonctionnaire, etc.</li>
        </ul>

        <p className="text-sm">
          Nous proposons un comparatif <span className="font-semibold">100% objectif</span>, sans discrimination, sans question sur votre état de santé, et sans partage de vos informations médicales.
        </p>
      </section>

      {/* Coordonnées */}
      <section>
        <h4 className="text-lg font-semibold mt-6 mb-2">Pourquoi demandons-nous vos coordonnées ?</h4>
        <p className="text-sm md:text-base">
          Vos coordonnées (nom, prénom, téléphone, email) sont essentielles pour vous envoyer votre devis personnalisé. 
          Sans ces informations, nous ne pourrons pas vous proposer des offres parfaitement adaptées à vos besoins.
        </p>
      </section>
    </div>
  );
}
