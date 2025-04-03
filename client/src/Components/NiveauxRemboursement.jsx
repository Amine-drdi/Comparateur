import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import ProgressSidebar from '../components/ProgressSidebar';
import './styles.css';

const NiveauxRemboursement = () => {
  const [soinsCourants, setSoinsCourants] = useState('');
  const [hospitalisation, setHospitalisation] = useState('');
  const [dentaire, setDentaire] = useState('');
  const [optique, setOptique] = useState('');
  const navigate = useNavigate();

  const isFormValid = () => {
    return soinsCourants && hospitalisation && dentaire && optique;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      navigate('/coordonnees');
    }
  };

  const renderCoverageOptions = (category, value, setValue) => {
    const options = ['Minimum', 'Moyen', 'Fort', 'Maximum'];

    return (
      <div className="coverage-options">
        {options.map((option, index) => (
          <button
            key={index}
            type="button"
            className={`coverage-option ${value === option.toLowerCase() ? 'selected' : ''}`}
            onClick={() => setValue(option.toLowerCase())}
          >
            {option}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="page-container">
      <ProgressSidebar />
      <div className="content">
        <h1>Quel niveau de remboursement souhaitez-vous ?</h1>
        <p className="info-text">
          Pas d'inquiétude, vous pourrez modifier votre couverture sur la page de résultat.
          Attention, cependant si le niveau indiqué est important, le montant du devis peut également être plus élevé.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="coverage-categories">
            <div className="coverage-category">
              <h3>
                <span className="category-icon">⚕️</span>
                Soins courants
                <span className="category-details">(médecin généraliste, pharmacie, analyse, etc.)</span>
              </h3>
              {renderCoverageOptions('soinsCourants', soinsCourants, setSoinsCourants)}
            </div>

            <div className="coverage-category">
              <h3>
                <span className="category-icon">🏥</span>
                Hospitalisation
                <span className="category-details">(frais de séjour, frais de traitement, chirurgie, etc.)</span>
              </h3>
              {renderCoverageOptions('hospitalisation', hospitalisation, setHospitalisation)}
            </div>

            <div className="coverage-category">
              <h3>
                <span className="category-icon">🦷</span>
                Dentaire
                <span className="category-details">(prothèse, implants, soins, etc.)</span>
              </h3>
              {renderCoverageOptions('dentaire', dentaire, setDentaire)}
            </div>

            <div className="coverage-category">
              <h3>
                <span className="category-icon">👓</span>
                Optique
                <span className="category-details">(montures, verres, chirurgie réfractive, etc.)</span>
              </h3>
              {renderCoverageOptions('optique', optique, setOptique)}
            </div>
          </div>

          <div className="button-container">
            <Button type="submit" disabled={!isFormValid()}>Continuer</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NiveauxRemboursement;
