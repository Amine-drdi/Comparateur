
import React  from 'react';
import MutuelleTNSBanner from '../../Components/TNS/MutuelleTNSBanner';
import QuestionsSection  from '../../Components/TNS/QuestionsSection'
import AssuranceBanner from '../../Components/TNS/AssuranceBanner';
//import  Footer from '../../Components/mutuelle-entreprises/Footer';
import InsuranceBrands from '../../Components/TNS/InsuranceBrands'
import Guides from '../../Components/TNS/Guide/Guides';
import ProfilesAndReviewsSection from '../../Components/TNS/ProfilesAndReviewsSection';
import CompareBanner from '../../Components/TNS/CompareBanner';
export default function Optique() {
  return (
    <div className="min-h-screen bg-gray-100">
   {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Notre bannière de mutuelle entreprise */}
        <MutuelleTNSBanner/>
        <InsuranceBrands/>
        <QuestionsSection/>
        <Guides/>
        {/* Section supplémentaire */}
        <ProfilesAndReviewsSection/>
      </main>
      <CompareBanner/>
   
   {/*<Footer/>*/}
    </div>
  );
}