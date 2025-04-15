import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'; // Tu peux le garder si tu l'utilises encore
import { Provider } from 'react-redux'; // <-- Ajoute ceci
import store from './redux/store.js'; // <-- Ton store Redux

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}> {/* <-- Le bon Provider pour Redux */}
    <AuthProvider> {/* <-- Facultatif si tu gardes AuthContext */}
      <App />
    </AuthProvider>
  </Provider>
</StrictMode>
)
