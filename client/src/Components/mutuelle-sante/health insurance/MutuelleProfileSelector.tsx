import React, { useState } from 'react';

const MutuelleProfileSelector = () => {
  const [openAccordion, setOpenAccordion] = useState('senior');

  const toggleAccordion = (id) => {
    if (openAccordion === id) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(id);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold text-blue-800">
        Pourquoi il est important de choisir une mutuelle adaptée à votre profil ?
      </h2>

      <div className="flex flex-col md:flex-row gap-6 mt-4">
        <div className="w-full md:w-2/3">
          {/* Accordéon Senior */}
          <div className="border rounded-lg mb-3 overflow-hidden">
            <div 
              className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
              onClick={() => toggleAccordion('senior')}
            >
              <h3 className="font-semibold text-lg">Senior/Retraité</h3>
              <span className="text-xl">{openAccordion === 'senior' ? '▼' : '▶'}</span>
            </div>
            {openAccordion === 'senior' && (
              <div className="p-4 bg-white">
                <p className="text-gray-700">
                En vieillissant, les frais de santé sont généralement plus importants, et notamment les frais de santé peu ou pas pris en charge par l’Assurance maladie : hospitalisation, implants dentaires, lunettes de vue ou aides auditives. C’est pourquoi il est important pour vous d’avoir une bonne complémentaire santé. Avec LNR Finace, vous pouvez comparer les offres d’une trentaine de mutuelles et d’assureurs afin de trouver une mutuelle senior complète qui vous remboursera bien sans vous coûter trop.
                </p>
              </div>
            )}
          </div>

          {/* Accordéon TNS */}
          <div className="border rounded-lg mb-3 overflow-hidden">
            <div 
              className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
              onClick={() => toggleAccordion('tns')}
            >
              <h3 className="font-semibold text-lg">Travailleur non salarié (TNS) - Indépendant</h3>
              <span className="text-xl">{openAccordion === 'tns' ? '▼' : '▶'}</span>
            </div>
            {openAccordion === 'tns' && (
              <div className="p-4 bg-white">
                <p className="text-gray-700">
                  Si vous êtes actif mais <a href="/sans-statut-salarie" className="text-blue-600 hover:underline">sans statut de salarié</a>, vous n'êtes donc pas couvert par un contrat de santé 
                  collectif. Pour que vos dépenses de santé non prises en charge par l'Assurance maladie soient 
                  remboursées, vous devez souscrire une complémentaire santé individuelle. Mais, nous le savons, ce 
                  n'est pas toujours facile de savoir quelles formules ou garanties choisir. Exprimez-nous vos besoins et 
                  nous sélectionnerons pour vous les offres de mutuelles les plus adaptées pour que vous soyez couvert 
                  au mieux, mais sans vous ruiner.
                </p>
              </div>
            )}
          </div>

          {/* Accordéon Demandeur d'emploi */}
          <div className="border rounded-lg mb-3 overflow-hidden">
            <div 
              className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
              onClick={() => toggleAccordion('emploi')}
            >
              <h3 className="font-semibold text-lg">Demandeur d'emploi</h3>
              <span className="text-xl">{openAccordion === 'emploi' ? '▼' : '▶'}</span>
            </div>
            {openAccordion === 'emploi' && (
              <div className="p-4 bg-white">
                <p className="text-gray-700">
                  Au chômage, vous ne bénéficiez pas ou plus d'une complémentaire santé d'entreprise. Et si vous ne 
                  souscrivez pas une complémentaire santé individuelle, vos dépenses de santé non remboursées par 
                  l'Assurance maladie seront à votre charge, et la facture peut vite grimper ! Pour que vous puissiez 
                  continuer de préserver votre santé, mais aussi votre budget, nous vous aidons à trouver le meilleur 
                  rapport qualité/prix pour votre nouvelle mutuelle santé.
                </p>
              </div>
            )}
          </div>

          {/* Accordéon Fonctionnaire */}
          <div className="border rounded-lg mb-3 overflow-hidden">
            <div 
              className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
              onClick={() => toggleAccordion('fonctionnaire')}
            >
              <h3 className="font-semibold text-lg">Fonctionnaire</h3>
              <span className="text-xl">{openAccordion === 'fonctionnaire' ? '▼' : '▶'}</span>
            </div>
            {openAccordion === 'fonctionnaire' && (
              <div className="p-4 bg-white">
                <p className="text-gray-700">
                  Si vous êtes fonctionnaire, vous devez faire les démarches individuelles de votre côté pour trouver une 
                  complémentaire santé. Cette assurance vous permet de vous faire rembourser vos frais de santé qui 
                  ne sont pas pris en charge par l'assurance maladie. Nous vous aidons à trouver l'offre de couverture la plus 
                  adaptée à vos besoins en fonction de votre âge, mais aussi en fonction de vos dépenses de santé 
                  (hospitalisation, <a href="/medecines-douces" className="text-blue-600 hover:underline">médecines douces</a>, lunettes ou lentilles...). Faites appel à notre comparateur.
                </p>
              </div>
            )}
          </div>

          {/* Accordéon Profession libérale */}
          <div className="border rounded-lg mb-3 overflow-hidden">
            <div 
              className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
              onClick={() => toggleAccordion('liberal')}
            >
              <h3 className="font-semibold text-lg">Profession libérale</h3>
              <span className="text-xl">{openAccordion === 'liberal' ? '▼' : '▶'}</span>
            </div>
            {openAccordion === 'liberal' && (
              <div className="p-4 bg-white">
                <p className="text-gray-700">
                  Architecte, avocat, médecin, infirmier libéral, dentiste... c'est à vous de faire les démarches pour 
                  souscrire une complémentaire santé qui couvrira vos soins de santé non remboursés par l'Assurance 
                  maladie. Mais vous ne savez pas vers quel organisme vous tourner ? Pour trouver l'offre la plus adaptée 
                  à vos dépenses de santé, mais aussi pour faire des économies, la comparaison reste la meilleure 
                  solution.
                </p>
              </div>
            )}
          </div>

          {/* Accordéon Auto-entrepreneur */}
          <div className="border rounded-lg mb-3 overflow-hidden">
            <div 
              className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
              onClick={() => toggleAccordion('autoentrepreneur')}
            >
              <h3 className="font-semibold text-lg">Auto-entrepreneur</h3>
              <span className="text-xl">{openAccordion === 'autoentrepreneur' ? '▼' : '▶'}</span>
            </div>
            {openAccordion === 'autoentrepreneur' && (
              <div className="p-4 bg-white">
                <p className="text-gray-700">
                  En étant à votre compte, vous ne bénéficiez pas de la couverture santé collective d'entreprise. Vous 
                  devez souscrire une complémentaire santé à titre individuel pour être mieux remboursé à l'issue d'une visite 
                  chez le médecin, si vous avez besoin de médicaments ou d'une hospitalisation, mais aussi si vous avez 
                  besoin de lunettes de vue ou d'implants dentaires. Pour trouver l'offre de complémentaire santé qui 
                  propose le meilleur rapport qualité/prix en fonction de vos besoins, comparez avec LNR Finace.
                </p>
              </div>
            )}
          </div>

          {/* Accordéon Étudiant */}
          <div className="border rounded-lg mb-3 overflow-hidden">
            <div 
              className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
              onClick={() => toggleAccordion('etudiant')}
            >
              <h3 className="font-semibold text-lg">Étudiant</h3>
              <span className="text-xl">{openAccordion === 'etudiant' ? '▼' : '▶'}</span>
            </div>
            {openAccordion === 'etudiant' && (
              <div className="p-4 bg-white">
                <p className="text-gray-700">
                  Vous le saviez ? L'Assurance maladie rembourse 70% des dépenses de santé. Pour ne pas avoir à payer 
                  les 30% restant de votre poche, il faut souscrire une complémentaire santé, aussi appelée « mutuelle 
                  ». Avant de commencer vos études, assurez-vous d'être couvert pour vos dépenses de santé : vérifiez 
                  que vous êtes bien affilié au régime obligatoire d'assurance maladie et souscrivez une complémentaire 
                  santé. Comparez les offres de nos partenaires sur LNR Finace.com, certains proposent des contrats 
                  adaptés aux besoins et aux budgets des étudiants.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Image à droite */}
        <div className="w-full md:w-1/3 flex justify-center items-start">
          <img 
            src="https://previews.123rf.com/images/olgachernyak/olgachernyak2204/olgachernyak220400121/187419474-vecteur-de-m%C3%A9decin-illustration-d-animaux-de-dessin-anim%C3%A9-lion-m%C3%A9decin-pour-enfants-avec.jpg" 
            alt="Senior avec des lunettes en pull rouge donnant un conseil"
            className="max-w-full" 
          />
        </div>
      </div>
    </div>
  );
};

export default MutuelleProfileSelector;