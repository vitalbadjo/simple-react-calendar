import React from 'react';
import styles from './index.module.scss';

const Icons = {
  arrowLeft: (
    <svg
      className={styles.svgIcon}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
    </svg>
  ),
  arrowRight: (
    <svg
      className={styles.svgIcon}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z" />
    </svg>
  ),
};

export default Icons;
