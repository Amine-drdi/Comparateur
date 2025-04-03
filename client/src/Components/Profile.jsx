import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import ProgressSidebar from '../components/ProgressSidebar';
import femaleIcon from '../../public/assets/female-icon.png';
import maleIcon from '../../public/assets/male-icon.jpg';
//import femaleIcon from '../../assets/female-icon.png';
//import maleIcon from '../../assets/male-icon.jpg';
import './styles.css';

const Profile = () => {
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (gender) {
      navigate('/date-naissance');
    }
  };

  return (
    <div className="page-container">
      <ProgressSidebar />
      <div className="content">
        <h1>Êtes-vous...</h1>
        <form onSubmit={handleSubmit}>
          <div className="gender-options">
            <div 
              className={`gender-option ${gender === 'femme' ? 'selected' : ''}`}
              onClick={() => setGender('femme')}
            >
              <div className="icon-container">
                <img src={femaleIcon} alt="Femme" />
              </div>
              <span>Une femme</span>
              <div className="radio-button">
                <div className={`radio-inner ${gender === 'femme' ? 'checked' : ''}`}></div>
              </div>
            </div>
            
            <div 
              className={`gender-option ${gender === 'homme' ? 'selected' : ''}`}
              onClick={() => setGender('homme')}
            >
              <div className="icon-container">
                <img src={maleIcon} alt="Homme" />
              </div>
              <span>Un homme</span>
              <div className="radio-button">
                <div className={`radio-inner ${gender === 'homme' ? 'checked' : ''}`}></div>
              </div>
            </div>
          </div>
          
          <div className="button-container">
            <Button type="submit" disabled={!gender}>Continuer</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
