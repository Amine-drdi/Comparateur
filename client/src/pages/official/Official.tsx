
import React  from 'react';
import MutuelleOfficialBanner from '../../Components/official/MutuelleOfficialBanner';
import QuestionsSection  from '../../Components/official/QuestionsSection'
import AssuranceBanner from '../../Components/official/AssuranceBanner';
//import  Footer from '../../Components/mutuelle-entreprises/Footer';
import InsuranceBrands from '../../Components/official/InsuranceBrands'
import Guides from '../../Components/official/Guide/Guides';
import AvisEtSujetsLiés from '../../Components/official/AvisEtSujetsLiés';
export default function Official() {
  return (
    <div className="min-h-screen bg-gray-100">
   {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Notre bannière de mutuelle entreprise */}
        <MutuelleOfficialBanner/>
        <InsuranceBrands/>
        <QuestionsSection/>
        <Guides/>
      </main>
      <AvisEtSujetsLiés/>
      <AssuranceBanner/>
    </div>
  );
}