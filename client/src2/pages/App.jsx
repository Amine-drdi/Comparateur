import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import StepperProgress from './components/StepperProgress';
import Profile from './pages/Profile';
import DateNaissance from './pages/DateNaissance';
import RegimeSocial from './pages/RegimeSocial';
import Ville from './pages/Ville';
import DateContrat from './pages/DateContrat';
import Beneficiaires from './pages/Beneficiaires';
import NiveauxRemboursement from './pages/NiveauxRemboursement';
import Coordonnees from './pages/Coordonnees';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <StepperProgress />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Profile} />
            <Route path="/date-naissance" component={DateNaissance} />
            <Route path="/regime-social" component={RegimeSocial} />
            <Route path="/ville" component={Ville} />
            <Route path="/date-contrat" component={DateContrat} />
            <Route path="/beneficiaires" component={Beneficiaires} />
            <Route path="/niveaux-remboursement" component={NiveauxRemboursement} />
            <Route path="/coordonnees" component={Coordonnees} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;