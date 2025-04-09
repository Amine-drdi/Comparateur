import React from "react";
import { Route, Routes,Navigate } from "react-router-dom";
import LoadingSpinner from "./Components/health insurance/LoadingSpinner";


const Home = React.lazy(() => import("./pages/Home/Home"));
const ComparisonForm = React.lazy(() => import("./pages/Typeform/ComparisonForm"));
const ComparisonFormWrapper = React.lazy(() => import("./pages/Typeform/ComparisonFormWrapper"));

const InsuranceComponent = React.lazy(() => import("./pages/InsuranceAndMutualHealth/InsuranceAndMutualHealth"));
const InsuranceComparison = React.lazy(() => import("./pages/health insurance/HealthInsurance"));
const MutuelleArticles = React.lazy(()  => import("./Components/health insurance/MutuelleArticles"));
const GuideDetail = React.lazy(()  => import("./Components/GuideDetail/GuideDetail"));
const AllGuides  = React.lazy(()  => import("./Components/GuideDetail/AllGuids"));
const AuthPage  = React.lazy(()  => import("./pages/user/AuthPage"));
const VerifyCodePage  = React.lazy(()  => import("./pages/user/VerifyCodePage"));
const Dashboard  = React.lazy(()  => import("./pages/user/DashboardPage"));

 
const AppRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Navigate to="/Home" />} />
       <Route path="/Home"
              element={
               <React.Suspense fallback={<LoadingSpinner />}>
                <Home/>
               </React.Suspense>}
                 />
       <Route path="/compare"
              element={
               <React.Suspense fallback={<LoadingSpinner />}>
                <ComparisonForm/>
               </React.Suspense>}
                 />
                  <Route
        path="/compare/:id"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <ComparisonFormWrapper />
          </React.Suspense>
        }
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
                  <Route path="/AllGuides"
                  element={
                  <React.Suspense fallback={<LoadingSpinner/>}>
                  <AllGuides/>
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
      </Routes>
  );
};

export default AppRoutes;
