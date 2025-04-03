// client/src/pages/RegimeSocial.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import ProgressSidebar from '../components/ProgressSidebar';
import './RegimeSocial.css';

const RegimeSocial = () => {
  const [regime, setRegime] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (regime) {
      history.push('/ville');
    }
  };

  return (
    <div className="page-container">
      <ProgressSidebar />
      <div className="content">
        <h1>Quel est votre régime social ?</h1>
        <form onSubmit={handleSubmit}>
          <div className="select-container">
            <select 
              value={regime} 
              onChange={(e) => setRegime(e.target.value)}
              className={regime ? 'has-value' : ''}
            >
              <option value="" disabled>Sélectionnez</option>
              <option value="general">Régime général</option>
              <option value="agricole">Régime agricole</option>
              <option value="independant">Indépendant / TNS</option>
              <option value="alsace">Régime Alsace-Moselle</option>
              <option value="etudiante">Sécurité sociale étudiante</option>
              <option value="fonctionnaire">Fonctionnaire d'état</option>
              <option value="etrangere">Sécurité sociale étrangère</option>
            </select>
            <div className="select-arrow"></div>
          </div>
          
          <div className="button-container">
            <Button type="submit" disabled={!regime}>Continuer</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegimeSocial;