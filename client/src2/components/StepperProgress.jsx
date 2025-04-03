// client/src/components/StepperProgress.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './StepperProgress.css';

const StepperProgress = () => {
  const location = useLocation();
  
  const calculateProgress = () => {
    const routes = [
      '/',
      '/date-naissance',
      '/regime-social',
      '/ville',
      '/date-contrat',
      '/beneficiaires',
      '/niveaux-remboursement',
      '/coordonnees'
    ];
    
    const currentIndex = routes.findIndex(route => route === location.pathname);
    return Math.round(((currentIndex + 1) / routes.length) * 100);
  };
  
  return (
    <div className="stepper-progress">
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${calculateProgress()}%` }}
        ></div>
        <span className="progress-text">{calculateProgress()}%</span>
      </div>
    </div>
  );
};

export default StepperProgress;