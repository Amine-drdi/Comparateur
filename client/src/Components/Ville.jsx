import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import ProgressSidebar from '../components/ProgressSidebar';
import './styles.css';

const Ville = () => {
  const [codePostal, setCodePostal] = useState('');
  const [ville, setVille] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  // Simuler une recherche de ville par code postal
  useEffect(() => {
    if (codePostal.length === 5) {
      // Dans une application réelle, cette partie ferait un appel API
      const fakeSuggestions = [
        { code: codePostal, nom: 'Villers-Bocage' },
        { code: codePostal, nom: 'Autre Ville' },
        { code: codePostal, nom: 'Ville Test' }
      ];
      setSuggestions(fakeSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [codePostal]);

  const handleSelectVille = (suggestion) => {
    setVille(suggestion.nom);
    setShowSuggestions(false);
  };

  const handleClearVille = () => {
    setVille('');
    setCodePostal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ville) {
      navigate('/date-contrat');
      
    }
    console.log("hello ya hello")
  };

  return (
    <div className="page-container">
      <ProgressSidebar />
      <div className="content">
        <h1>Dans quelle ville résidez-vous ?</h1>
        <form onSubmit={handleSubmit}>
          {!ville ? (
            <div className="code-postal-input">
              <input 
                type="text" 
                maxLength="5" 
                placeholder="Code postal"
                value={codePostal}
                onChange={(e) => setCodePostal(e.target.value.replace(/\D/g, '').slice(0, 5))}
              />
              {showSuggestions && (
                <div className="suggestions">
                  {suggestions.map((suggestion, index) => (
                    <div 
                      key={index} 
                      className="suggestion-item"
                      onClick={() => handleSelectVille(suggestion)}
                    >
                      {suggestion.nom} ({suggestion.code})
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="selected-ville">
              <span>{ville}</span>
              <button type="button" className="clear-button" onClick={handleClearVille}>
                ×
              </button>
            </div>
          )}
          
          <div className="button-container">
            <Button type="submit" disabled={!ville}>Continuer</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Ville;
