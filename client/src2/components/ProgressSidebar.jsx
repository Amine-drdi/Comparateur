// client/src/components/ProgressSidebar.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProgressSidebar.css';

const ProgressSidebar = () => {
  const location = useLocation();

  const steps = [
    { path: '/', label: 'Votre profil' },
    { path: '/date-naissance', label: 'Votre profil' },
    { path: '/regime-social', label: 'Votre profil' },
    { path: '/ville', label: 'Votre profil' },
    { path: '/date-contrat', label: 'Votre profil' },
    { path: '/beneficiaires', label: 'Vos besoins' },
    { path: '/niveaux-remboursement', label: 'Vos besoins' },
    { path: '/coordonnees', label: 'Vos coordonnées' },
  ];

  return (
    <div className="progress-sidebar">
      {steps.map((step, index) => {
        // Éliminer les doublons
        if (index > 0 && steps[index - 1].label === step.label) {
          return null;
        }

        // Déterminer si l'étape est active
        const routes = steps.filter(s => s.label === step.label).map(s => s.path);
        const isActive = routes.includes(location.pathname);
        const isPassed = routes.some(route => {
          const routeIndex = steps.findIndex(s => s.path === route);
          const currentRouteIndex = steps.findIndex(s => s.path === location.pathname);
          return routeIndex < currentRouteIndex;
        });

        return (
          <div key={index} className={`sidebar-step ${isActive ? 'active' : ''} ${isPassed ? 'passed' : ''}`}>
            <span className="step-icon">{isPassed || isActive ? '✓' : ''}</span>
            <span className="step-label">{step.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressSidebar;