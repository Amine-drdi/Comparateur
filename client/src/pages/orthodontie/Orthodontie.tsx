
import React  from 'react';
import MutuelleOrthodontieBanner from '../../Components/orthodontie/MutuelleOrthodontieBanner';
import QuestionsSection  from '../../Components/orthodontie/QuestionsSection'
import AssuranceBanner from '../../Components/optique/AssuranceBanner';
//import  Footer from '../../Components/mutuelle-entreprises/Footer';
import InsuranceBrands from '../../Components/orthodontie/AssuranceBanner'
import Guides from '../../Components/orthodontie/Guide/Guides';
export default function Orthodontie() {
  return (
    <div className="min-h-screen bg-gray-100">
   {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-8"> 
        {/* Notre bannière de mutuelle entreprise */}
        <MutuelleOrthodontieBanner/>
        <InsuranceBrands/>
        <QuestionsSection/>
        <Guides/>
        {/* Section supplémentaire */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Trouvez les meilleurs remboursements pour l'orthodontie adulte</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-xl mb-2">🛡️</div>
              <h3 className="font-bold text-lg mb-2">Protection complète</h3>
              <p className="text-gray-600">Des garanties adaptées aux besoins spécifiques de votre entreprise et de vos employés.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-xl mb-2">💰</div>
              <h3 className="font-bold text-lg mb-2">Tarifs avantageux</h3>
              <p className="text-gray-600">Des offres compétitives avec un excellent rapport qualité-prix pour tous les budgets.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-xl mb-2">⚡</div>
              <h3 className="font-bold text-lg mb-2">Prise en charge rapide</h3>
              <p className="text-gray-600">Un traitement efficace des dossiers et un remboursement accéléré de vos frais de santé.</p>
            </div>
          </div>
        </section>
      </main>
      <AssuranceBanner/>
   
   {/*<Footer/>*/}
    </div>
  );
}