import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import ProgressSidebar from '../components/ProgressSidebar';
import './styles.css';

const Beneficiaires = () => {
  const [beneficiaires, setBeneficiaires] = useState('vous');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (beneficiaires) {
      navigate('/niveaux-remboursement');
    }
  };

  return (
    <div className="page-container">
      <ProgressSidebar />
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="beneficiaires-options">
            <div 
              className={`beneficiaire-option ${beneficiaires === 'vous' ? 'selected' : ''}`}
              onClick={() => setBeneficiaires('vous')}
            >
              <div className="radio-button">
                <div className={`radio-inner ${beneficiaires === 'vous' ? 'checked' : ''}`}></div>
              </div>
              <span>Vous</span>
            </div>
            
            <div 
              className={`beneficiaire-option ${beneficiaires === 'vous_conjoint' ? 'selected' : ''}`}
              onClick={() => setBeneficiaires('vous_conjoint')}
            >
              <div className="radio-button">
                <div className={`radio-inner ${beneficiaires === 'vous_conjoint' ? 'checked' : ''}`}></div>
              </div>
              <span>Vous et votre conjoint</span>
            </div>
            
            <div 
              className={`beneficiaire-option ${beneficiaires === 'vous_enfants' ? 'selected' : ''}`}
              onClick={() => setBeneficiaires('vous_enfants')}
            >
              <div className="radio-button">
                <div className={`radio-inner ${beneficiaires === 'vous_enfants' ? 'checked' : ''}`}></div>
              </div>
              <span>Vous et vos enfants</span>
            </div>
            
            <div 
              className={`beneficiaire-option ${beneficiaires === 'vous_conjoint_enfants' ? 'selected' : ''}`}
              onClick={() => setBeneficiaires('vous_conjoint_enfants')}
            >
              <div className="radio-button">
                <div className={`radio-inner ${beneficiaires === 'vous_conjoint_enfants' ? 'checked' : ''}`}></div>
              </div>
              <span>Vous, votre conjoint et vos enfants</span>
            </div>
          </div>
          
          <div className="button-container">
            <Button type="submit" disabled={!beneficiaires}>Continuer</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Beneficiaires;


