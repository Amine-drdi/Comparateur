import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import ProgressSidebar from '../components/ProgressSidebar';
import './styles.css';


const DateNaissance = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const navigate = useNavigate();

  const isValidDate = () => {
    if (!day || !month || !year) return false;

    const dayNum = parseInt(day, 10);
    const monthNum = parseInt(month, 10);
    const yearNum = parseInt(year, 10);

    if (dayNum < 1 || dayNum > 31 || monthNum < 1 || monthNum > 12 || yearNum < 1900) {
      return false;
    }

    const birthDate = new Date(yearNum, monthNum - 1, dayNum);
    const currentDate = new Date();
    const minDate = new Date();
    minDate.setFullYear(currentDate.getFullYear() - 100);
    const maxDate = new Date();
    maxDate.setFullYear(currentDate.getFullYear() - 18);

    return birthDate >= minDate && birthDate <= maxDate;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidDate()) {
      navigate('/regime-social');
    }
  };

  return (
    <div className="page-container">
      <ProgressSidebar />
      <div className="content">
        <h1>Quelle est votre date de naissance ?</h1>
        <form onSubmit={handleSubmit}>
          <div className="date-inputs">
            <div className="input-group">
              <label>Jour</label>
              <input 
                type="text" 
                maxLength="2" 
                value={day}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, '').slice(0, 2);
                  setDay(val > 31 ? '31' : val);
                }}
              />
            </div>
            <span className="date-separator">/</span>
            <div className="input-group">
              <label>Mois</label>
              <input 
                type="text" 
                maxLength="2" 
                value={month}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, '').slice(0, 2);
                  setMonth(val > 12 ? '12' : val);
                }}
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

export default DateNaissance;
