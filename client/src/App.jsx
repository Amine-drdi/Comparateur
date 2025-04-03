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
import ComparisonForm from './Components/ComparisonForm';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
      <Router>
        <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/Navbar" element={<Navbar/>} />
          <Route path="/Partenaire" element={<PartenaireCaroussel/>} />
          <Route path="/comparateurAssurance" element={<ComparateurAssurance/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Footer" element={<Footer/>} />
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
