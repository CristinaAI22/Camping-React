import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavigationButton.css";

const NavigationButton = ({ to, label, style, className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };
  return (
    <button 
    onClick={handleClick} 
    style={style} 
    className={`button-primary ${className}`}>
    {label}
    </button>
  );
};

export default NavigationButton;