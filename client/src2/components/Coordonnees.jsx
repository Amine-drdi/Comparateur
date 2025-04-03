// client/src/pages/Coordonnees.js
import React, { useState } from 'react';
import Button from '../components/Button';
import ProgressSidebar from '../components/ProgressSidebar';
import './Coordonnees.css';

const Coordonnees = () => {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const isFormValid = () => {
    return prenom.trim() !== '' && nom.trim() !== '' && isValidEmail(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) return;
    
    setIsSubmitting(true);
    
    // Simuler l'envoi des données au serveur
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <div className="page-container">
      <ProgressSidebar />
      <div className="content">
        {!isSubmitted ? (
          <>
            <h1>Vos coordonnées</h1>
            <p className="info-text">
              Nous avons presque terminé. Veuillez remplir ces dernières informations pour recevoir vos devis personnalisés.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="prenom">Quel est votre prénom ?</label>
                <input 
                  type="text" 
                  id="prenom"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  placeholder="Prénom"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="nom">Quel est votre nom ?</label>
                <input 
                  type="text" 
                  id="nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  placeholder="Nom"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Quelle est votre adresse email ?</label>
                <input 
                  type="email" 
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemple@email.com"
                />
                <small className="email-info">
                  Votre adresse électronique sera protégée et vous recevrez uniquement des communications par email liées aux résultats de votre comparaison et des conseils avec lesquels vous souhaitez être recontacté.
                </small>
              </div>
              
              <div className="button-container">
                <Button type="submit" disabled={!isFormValid() || isSubmitting}>
                  {isSubmitting ? 'Traitement en cours...' : 'Continuer'}
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="success-message">
            <h1>Merci pour votre demande !</h1>
            <p>Nous traitons actuellement votre dossier et vous recevrez vos devis personnalisés par email dans les plus brefs délais.</p>
            <p>Un email de confirmation a été envoyé à <strong>{email}</strong>.</p>
          </div>
        )}
      </div>
    </div>
  );
};