import React from 'react';
import './Button.css';

type ButtonProps = {
  label: string;
  variant?: 'green' | 'gray';
  onClick?: () => void;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'green',
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`custom-button ${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};