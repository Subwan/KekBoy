import React from 'react';

import styles from './styles.module.scss';

export interface DateCounterProps {
  dateNumber: number;
  label: string;
}

export const DateCounter: React.FC<DateCounterProps> = ({ dateNumber, label }) => {
  const numberAsString = dateNumber.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  return (
    <div className={styles.container}>
      <div className={styles.timeBlock}>
        <div className={styles.timeNumber}>{numberAsString[0]}</div>
        <div className={styles.timeNumber}>{numberAsString[1]}</div>
      </div>
      <div className={styles.underText}>{label}</div>
    </div>
  );
};
