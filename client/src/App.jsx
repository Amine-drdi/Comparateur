import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; 
import { CartProvider } from './context/CartContext';
import Navbar from './Components/Home/NavBar';
import Footer from './Components/Home/Footer';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <AppRoutes/>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
