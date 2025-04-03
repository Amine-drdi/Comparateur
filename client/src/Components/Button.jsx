import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Button = ({ children, to, onClick, type = 'button', disabled = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    if (to) navigate(to);
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
