import React from "react";
import { Route, Routes,Navigate } from "react-router-dom";
import LoadingSpinner from "./Components/mutuelle-sante/health insurance/LoadingSpinner";


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
const AllGuidesOptique  = React.lazy(()  => import("./Components/optique/GuideDetail/AllGuids"));
const AllGuidesDentaire  = React.lazy(()  => import("./Components/dentaire/GuideDetail/AllGuids"));
const Dentaire  = React.lazy(()  => import("./pages/dentaire/Dentaire"));
const Accueil  = React.lazy(()  => import("./pages/Accueil/Accueil"));
const DevisMutuelleForm = React.lazy(()  => import("./Components/Accueil/DevisMutuelleFormForMan"));



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
                 <Route path="/guideDentaire/:id"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <GuideDetailDentaire/>
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
      </Routes>
  );
};

export default AppRoutes;
