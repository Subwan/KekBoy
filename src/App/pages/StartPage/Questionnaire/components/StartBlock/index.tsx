import React from 'react';
import { Button } from '@ui';

import { START_TEXT } from '../../constants';

import styles from './styles.module.scss';

export const StartBlock: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <div className={styles.container}>
      <h2>{START_TEXT.HEADER}</h2>
      <span>{START_TEXT.MAIN}</span>
      <Button type="primary" ghost size="large" onClick={() => onStart()}>
        Начать
      </Button>
    </div>
  );
};
