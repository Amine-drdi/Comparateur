import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation
} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './Components/CartContext';
import Navbar from './Components/NavBar';
import AdminNavbar from './Components/AdminNavbar';
import { Home } from './pages/Home';
import Footer from './Components/Footer';
import ComparisonForm from './pages/ComparisonForm';
import AuthPage from './pages/AuthPage';
import VerifyCodePage from './pages/VerifyCodePage';
import Dashboard from './pages/DashboardPage';

function LayoutWrapper({ children }) {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <>
      {isDashboard ? <AdminNavbar /> : <Navbar />}
      <main className="min-h-screen pt-16">{children}</main>
      {!isDashboard && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <LayoutWrapper>
            <Routes>
              <Route path="/" element={<Navigate to="/Home" />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/compare" element={<ComparisonForm />} />
              <Route path="/login" element={<AuthPage />} />
              <Route path="/verify-code" element={<VerifyCodePage />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </LayoutWrapper>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;