import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; 
import { CartProvider } from './Components/CartContext';
import Navbar from './Components/NavBar';
import { Home } from './pages/Home';
import Footer from './Components/Footer';
import ComparisonForm from './Components/ComparisonForm';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/compare" element={<ComparisonForm />} />
            <Route path="/login" element={<AuthPage />} />

          </Routes>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
