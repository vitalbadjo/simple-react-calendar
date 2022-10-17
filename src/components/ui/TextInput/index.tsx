import React from 'react';
import styles from './index.module.scss';

interface TextInputPropsTypes {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  onChange?: (value: string) => void;
}
export type { TextInputPropsTypes };

const TextInput = ({
  value,
  placeholder,
  disabled,
  error,
  onChange = () => {},
}: TextInputPropsTypes) => {
  return (
    <div className={styles.textInput}>
      <input
        className={`${styles.inputField} ${error ? styles.error : ''} ${
          disabled ? styles.disabled : ''
        }`}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default TextInput;
