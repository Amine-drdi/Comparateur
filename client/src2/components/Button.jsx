// client/src/components/Button.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Button.css';

const Button = ({ children, to, onClick, type = 'button', disabled = false }) => {
  const history = useHistory();

  const handleClick = () => {
    if (onClick) onClick();
    if (to) history.push(to);
  };

  return (
    <button 
      className={`button ${disabled ? 'disabled' : ''}`}
      type={type}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;