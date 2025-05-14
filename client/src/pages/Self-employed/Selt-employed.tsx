
import React  from 'react';
import MutuelleOfficialBanner from '../../Components/student/MutuelleOfficialBanner';
import QuestionsSection  from '../../Components/student/QuestionsSection'
import AssuranceBanner from '../../Components/official/AssuranceBanner';
//import  Footer from '../../Components/mutuelle-entreprises/Footer';
import InsuranceBrands from '../../Components/official/InsuranceBrands'
import Guides from '../../Components/student/Guide/Guides';
import AvisEtSujetsLiés from '../../Components/student/AvisEtSujetsLiés';
export default function SeltEmployed() {
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