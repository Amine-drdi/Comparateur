import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; 
import { CartProvider } from './Components/CartContext';
import Navbar from './Components/NavBar';
import { Home } from './pages/Home';
import Footer from './Components/Footer';
import ComparisonForm from './pages/ComparisonForm';
import AuthPage from './pages/AuthPage';
import VerifyCodePage from './pages/VerifyCodePage';
import DashboardPage from './pages/DashboardPage';

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
            <Route path="/verify-code" element={<VerifyCodePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />


          </Routes>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
