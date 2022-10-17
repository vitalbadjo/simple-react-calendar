import React from 'react';
import styles from './index.module.scss';

interface BadgePropsTypes {
  text: string;
  onClick?: () => void;
}
export type { BadgePropsTypes };

const Badge = ({ text, onClick }: BadgePropsTypes) => {
  return (
    <button type="button" className={styles.badge} onClick={onClick}>
      {text}
    </button>
  );
};

export default Badge;
