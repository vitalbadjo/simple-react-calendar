import React from 'react';
import styles from './index.module.scss';
import Icons from '../icons/index';

interface IconButtonPropsTypes {
  icon: keyof typeof Icons;
  disabled?: boolean;
  onClick?: () => void;
}
export type { IconButtonPropsTypes };

const IconButton = ({
  disabled = false,
  onClick,
  icon,
}: IconButtonPropsTypes) => {
  return (
    <button
      className={`${styles.iconButton}${disabled ? ` ${styles.disabled}` : ''}`}
      onClick={onClick}
    >
      {Icons[icon]}
    </button>
  );
};

export default IconButton;
