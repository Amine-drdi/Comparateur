
import React  from 'react';
import MutuelleUnemployedBanner from '../../Components/unemployed/MutuelleUnemployedBanner';
import QuestionsSection  from '../../Components/unemployed/QuestionsSection'
//import AssuranceBanner from '../../Components/senior/AssuranceBanner';
//import  Footer from '../../Components/mutuelle-entreprises/Footer';
import InsuranceBrands from '../../Components/unemployed/InsuranceBrands'
import Guides from '../../Components/unemployed/Guide/Guides';
import AvisEtSujetsLiés from '../../Components/unemployed/AvisEtSujetsLiés';
import AssuranceBanner from '../../Components/unemployed/AssuranceBanner';
export default function Unemployed() {
  return (
    <div className="min-h-screen bg-gray-100">
   {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Notre bannière de mutuelle entreprise */}
        <MutuelleUnemployedBanner/>
        <InsuranceBrands/>
        <QuestionsSection/>
        <Guides/>
      </main>
      <AvisEtSujetsLiés/>
      <AssuranceBanner/>
    </div>
  );
}