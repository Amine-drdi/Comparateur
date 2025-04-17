import { BrowserRouter as Router, useLocation} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; 
import { CartProvider } from './context/CartContext';
import Navbar from './Components/Home/NavBar';
import Footer from './Components/Home/Footer';
import AppRoutes from './AppRoutes';
import AdminNavbar from './Components/user/AdminNavbar';

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
      <LayoutWrapper>
        <CartProvider>
           <AppRoutes/>
         </CartProvider>
        </LayoutWrapper>
      </AuthProvider>
    </Router>
  );
}

export default App;
