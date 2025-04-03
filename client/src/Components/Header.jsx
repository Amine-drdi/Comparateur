// client/src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="LesFurets" />
      </div>
      <div className="rating">
        <span>4.1 sur 5</span>
        <div className="avis-verifies">
          <span>Avis Vérifiés</span>
        </div>
      </div>
    </header>
  );
};

export default Header;