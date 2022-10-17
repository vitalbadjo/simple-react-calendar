import React from 'react';
import styles from './index.module.scss';

interface ButtonPropsTypes {
  buttonText?: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
}
export type { ButtonPropsTypes };

const Button = ({
  disabled = false,
  variant = 'primary',
  buttonText,
  onClick,
}: ButtonPropsTypes) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {buttonText}
    </button>
  );
};

export default Button;
