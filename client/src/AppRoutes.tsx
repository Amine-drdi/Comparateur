import React from "react";
import { Route, Routes,Navigate } from "react-router-dom";
import LoadingSpinner from "./Components/mutuelle-sante/health insurance/LoadingSpinner";
import Official from "./pages/official/Official";



const Home = React.lazy(() => import("./pages/Home/Home"));
const CompareMutuelleSante= React.lazy(() => import("./pages/Compare/CompareMutuelleSante"));
const InsuranceComponent = React.lazy(() => import("./Components/Accueil/InsuranceAndMutualHealth"));
const InsuranceComparison = React.lazy(() => import("./pages/mutuelle-sante/health insurance/HealthInsurance"));
const MutuelleArticles = React.lazy(()  => import("./Components/mutuelle-sante/health insurance/MutuelleArticles"));
const GuideDetail = React.lazy(()  => import("./Components/mutuelle-sante/GuideDetail/GuideDetail"));
const AllGuides  = React.lazy(()  => import("./Components/mutuelle-sante/GuideDetail/AllGuids"));
const HealthSectionDetail = React.lazy(()  => import("./Components/mutuelle-sante/HealthSectionDetail/HealthSectionDetail"));
const AllHealthSection = React.lazy(()  => import("./Components/mutuelle-sante/HealthSectionDetail/AllHealthSection"));
const HealthNewsDetails = React.lazy(()  => import("./Components/mutuelle-sante/HealthNewsDetails/HealthNewsDetails"));
const AllHealthNews = React.lazy(()  => import("./Components/mutuelle-sante/HealthNewsDetails/AllHealthNews"));
const MutuelleEntreprise = React.lazy(()  => import("./pages/mutuelle-entreprises/MutuelleEntreprise"));
const BlogArticle = React.lazy(()  => import("./pages/Home/BlogArticle "));
const Typeform = React.lazy(()  => import("./pages/Compare/CompareMutuelleEntreprise"));
const Optique = React.lazy(()=> import("./pages/optique/Optique") )
const AuthPage  = React.lazy(()  => import("./pages/user/AuthPage"));
const VerifyCodePage  = React.lazy(()  => import("./pages/user/VerifyCodePage"));
const Dashboard  = React.lazy(()  => import("./pages/user/DashboardPage"));
const GuideDetailOptique = React.lazy(()  => import("./Components/optique/GuideDetail/GuideDetail"));
const GuideDetailDentaire = React.lazy(()  => import("./Components/dentaire/GuideDetail/GuideDetail"));
const GuideDetailOrthodontie = React.lazy(()  => import("./Components/orthodontie/GuideDetail/GuideDetail"));
const GuideDetailSenior = React.lazy(()  => import("./Components/senior/GuideDetail/GuideDetail"));
const GuideDetailEtudiant = React.lazy(()  => import("./Components/student/GuideDetail/GuideDetail"));

const AllGuidesOptique  = React.lazy(()  => import("./Components/optique/GuideDetail/AllGuids"));
const AllGuidesDentaire  = React.lazy(()  => import("./Components/dentaire/GuideDetail/AllGuids"));
const AllGuidesOrthodontie  = React.lazy(()  => import("./Components/orthodontie/GuideDetail/AllGuids"));
const AllGuidesEpatries  = React.lazy(()  => import("./Components/expatries/GuideDetail/AllGuids"));
const AllGuidesSenior  = React.lazy(()  => import("./Components/senior/GuideDetail/AllGuids"));
const AllGuidesEtudiant  = React.lazy(()  => import("./Components/student/GuideDetail/AllGuids"));

const Dentaire  = React.lazy(()  => import("./pages/dentaire/Dentaire"));
const Accueil  = React.lazy(()  => import("./pages/Accueil/Accueil"));
const DevisMutuelleForm = React.lazy(()  => import("./Components/Accueil/DevisMutuelleFormForMan"));
const Orthodontie = React.lazy(()  => import("./pages/orthodontie/Orthodontie"));
const MesInformations = React.lazy(() => import("./Components/user/MesInformations"))
const Expatries = React.lazy(()  => import("./pages/expatries/Expatries"));
const GuideDetailExpatries = React.lazy(()  => import("./Components/expatries/GuideDetail/GuideDetail"));
const Senior = React.lazy(()=> import("./pages/senior/Senior"))
const TNS = React.lazy(()=> import("./pages/TNS/TNS"))
const Unemployed = React.lazy(()=> import("./pages/unemployed/Unemployed"))
const Student = React.lazy(()=> import("./pages/student/Student"))
const AppRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Navigate to="/Accueil" />} />
       <Route path="/Accueil"
              element={
               <React.Suspense fallback={<LoadingSpinner />}>
                <Accueil/>
               </React.Suspense>}
                 />
                  <Route path="/login"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <AuthPage/>
                  </React.Suspense>}
                 />
                     <Route path="/verify-code"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <VerifyCodePage/>
                  </React.Suspense>}
                 />
                        <Route path="/dashboard"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <Dashboard/>
                  </React.Suspense>}
                 />
       <Route path="/compare"
              element={
               <React.Suspense fallback={<LoadingSpinner />}>
                <CompareMutuelleSante id={undefined}/>
               </React.Suspense>}
                 />
                 <Route path="/InsuranceComponent"
                  element={
               <React.Suspense fallback={<LoadingSpinner />}>
                <InsuranceComponent/>
               </React.Suspense>}
                 />
              <Route path="/MutuelleArticles"
                  element={
                  <React.Suspense fallback={<LoadingSpinner />}>
                  <MutuelleArticles/>
                  </React.Suspense>}
                 />
                 <Route path="/InsuranceComparison"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <InsuranceComparison/>
                  </React.Suspense>}
                 />
                 <Route path="/guide/:id"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <GuideDetail/>
                  </React.Suspense>}
                 />
                  <Route path="/guideOptique/:id"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <GuideDetailOptique/>
                  </React.Suspense>}
                 />
                   <Route path="/guideSenior/:id"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <GuideDetailSenior/>
                  </React.Suspense>}
                 />
                   <Route path="/guideEtudiant/:id"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <GuideDetailEtudiant/>
                  </React.Suspense>}
                 />
                 <Route path="/guideDentaire/:id"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <GuideDetailDentaire/>
                  </React.Suspense>}
                 />
                  <Route path="/guideExpatries/:id"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <GuideDetailExpatries/>
                  </React.Suspense>}
                 />
                  <Route path="/guideOrthodontie/:id"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <GuideDetailOrthodontie/>
                  </React.Suspense>}
                 />
                  <Route path="/AllGuides"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <AllGuides/>
                  </React.Suspense>}
                 />
                   <Route path="/AllGuidesOptique"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <AllGuidesOptique/>
                  </React.Suspense>}
                 />
                  <Route path="/AllGuidesDentaire"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <AllGuidesDentaire/>
                  </React.Suspense>}
                 />
                 <Route path="/AllGuidesOrthodontie"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <AllGuidesOrthodontie/>
                  </React.Suspense>}
                 />
                 <Route path="/AllGuidesEpatries"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <AllGuidesEpatries/>
                  </React.Suspense>}
                 />
                 <Route path="/AllGuidesSenior"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <AllGuidesSenior/>
                  </React.Suspense>}
                 />
                  <Route path="/AllGuidesEtudiant"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <AllGuidesEtudiant/>
                  </React.Suspense>}
                 />
                   <Route path="/healthSection/:id"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <HealthSectionDetail/>
                  </React.Suspense>}
                 />
                 <Route path="/AllhealthSections"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <AllHealthSection/>
                  </React.Suspense>}
                 />
                  <Route path="/news/:id"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <HealthNewsDetails/>
                  </React.Suspense>}
                 />
                  <Route path="/AllhealthNews"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <AllHealthNews/>
                  </React.Suspense>}
                 />
                 <Route path="/mutuelleEntreprise"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <MutuelleEntreprise/>
                  </React.Suspense>}
                 />
                 <Route path="/BlogArticle"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <BlogArticle/>
                  </React.Suspense>}
                 />
                  <Route path="/Typeform"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <Typeform/>
                  </React.Suspense>}
                 />
                   <Route path="/optique"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <Optique/>
                  </React.Suspense>}
                 />
                  <Route path="/dentaire"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <Dentaire/>
                  </React.Suspense>}
                 />
                  <Route path="/Accueil"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <Accueil/>
                  </React.Suspense>}
                 />
                  <Route path="/DevisMutuelleForm"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <DevisMutuelleForm/>
                  </React.Suspense>}
                 />
                 <Route path="/Orthodontie"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <Orthodontie/>
                  </React.Suspense>}
                 />
                  <Route path="/expatries"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <Expatries/>
                  </React.Suspense>}
                 />
                 <Route path="/profil/senior"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <Senior/>
                  </React.Suspense>}
                 />
                 <Route path="/profil/tns"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <TNS/>
                  </React.Suspense>}
                 />
                  <Route path="/modification/:id"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <MesInformations/>
                  </React.Suspense>}
                 />
                 <Route path="/profil/sans-emploi"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <Unemployed/>
                  </React.Suspense>}
                 />
                 <Route path="/profil/fonctionnaire"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <Official/>
                  </React.Suspense>}
                 />
                   <Route path="/profil/etudiant"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <Student/>
                  </React.Suspense>}
                 />
      </Routes>
  );
};

export default AppRoutes;