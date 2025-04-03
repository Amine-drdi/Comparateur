import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; 
import { CartProvider } from './Components/CartContext';
import Hero from './Components/Hero';
import Navbar from './Components/NavBar';
import { Home } from './Components/Home';
import PartenaireCaroussel from './Components/PartenaireCaroussel';
import ComparateurAssurance from './Components/ComparateurAssurance';
import About from './Components/About';
import Footer from './Components/Footer';
import DateNaissance from './Components/DateNaissance';
import RegimeSocial from './Components/RegimeSocial';
import Ville from './Components/Ville';
import Beneficiaires from './Components/Beneficiaires';
import NiveauxRemboursement from './Components/NiveauxRemboursement';
import Coordonnees  from './Components/Coordonnees';
import DateContrat  from './Components/DateContrat';
import Profile  from './Components/Profile';

import ComparisonForm from './Components/ComparisonForm22';


function App() {
  return (
    <AuthProvider>
      <CartProvider>
      <Router>
        <Routes>
        <Route exact path="/" element={<Profile/>} />
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/Navbar" element={<Navbar/>} />
          <Route path="/Partenaire" element={<PartenaireCaroussel/>} />
          <Route path="/comparateurAssurance" element={<ComparateurAssurance/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Footer" element={<Footer/>} />

          <Route path="/date-naissance" element={<DateNaissance/>} />
            <Route path="/regime-social" element={<RegimeSocial/>} />
            <Route path="/ville" element={<Ville/>} />
            <Route path="/date-contrat" element={<DateContrat/>} />
            <Route path="/beneficiaires" element={<Beneficiaires/>} />
            <Route path="/niveaux-remboursement" element={<NiveauxRemboursement/>} />
            <Route path="/coordonnees" element={<Coordonnees/>} />

          <Route path="/compare" element={
            <div>
              <Navbar/>
            <ComparisonForm />
              <Footer/>
            </div>
            } />




        </Routes>
      </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
