import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import ProgressSidebar from '../components/ProgressSidebar';
//import './DateContrat.css';
import './styles.css';

const DateContrat = () => {
  const today = new Date();
  const [day, setDay] = useState('03');
  const [month, setMonth] = useState('04');
  const [year, setYear] = useState('2025');
  const navigate = useNavigate();

  const isValidDate = () => {
    if (!day || !month || !year) return false;

    const dayNum = parseInt(day, 10);
    const monthNum = parseInt(month, 10);
    const yearNum = parseInt(year, 10);

    if (isNaN(dayNum) || isNaN(monthNum) || isNaN(yearNum)) return false;
    if (monthNum < 1 || monthNum > 12 || dayNum < 1 || dayNum > 31) return false;

    const contractDate = new Date(yearNum, monthNum - 1, dayNum);
    if (contractDate.getDate() !== dayNum) return false; // Vérification de la validité du jour

    const currentDate = new Date();
    const maxDate = new Date();
    maxDate.setMonth(currentDate.getMonth() + 6);

    return contractDate >= currentDate && contractDate <= maxDate;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidDate()) {
      navigate('/beneficiaires');
    }
  };

  return (
    <div className="page-container">
      <ProgressSidebar />
      <div className="content">
        <h1>Quand souhaitez-vous que votre contrat débute ?</h1>
        <p className="date-help-text">
          Nous vous conseillons de choisir une date inférieure à un mois pour obtenir un maximum d'offres 
          (certains assureurs ne proposent pas d'offre au-delà d'un mois).
        </p>
        <form onSubmit={handleSubmit}>
          <div className="date-inputs">
            <div className="input-group">
              <label>Jour</label>
              <input 
                type="text" 
                maxLength="2" 
                value={day}
                onChange={(e) => setDay(e.target.value.replace(/\D/g, '').slice(0, 2))}
              />
            </div>
            <span className="date-separator">/</span>
            <div className="input-group">
              <label>Mois</label>
              <input 
                type="text" 
                maxLength="2" 
                value={month}
                onChange={(e) => setMonth(e.target.value.replace(/\D/g, '').slice(0, 2))}
              />
            </div>
            <span className="date-separator">/</span>
            <div className="input-group">
              <label>Année</label>
              <input 
                type="text" 
                maxLength="4" 
                value={year}
                onChange={(e) => setYear(e.target.value.replace(/\D/g, '').slice(0, 4))}
              />
            </div>
          </div>
          
          <div className="button-container">
            <Button type="submit" disabled={!isValidDate()}>Continuer</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DateContrat;
