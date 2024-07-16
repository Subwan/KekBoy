import React from 'react';
import { useParams } from 'react-router-dom';

import { EmptyScreen } from '../../components/EmptyScreen';
import { TEST_ID, TIMER_END } from './constants';
import { useCountdown, useOrientation } from './hooks';
import { Outlet } from './Outlet';
import { TimerScreen } from './TimerScreen';

import styles from './styles.module.scss';

export const StartPage: React.FC = () => {
  const { testId } = useParams();

  const isWrongOrientation = useOrientation();
  const timer = useCountdown();

  const renderMainScreen = () => {
    if (isWrongOrientation) {
      return <div className={styles.middleBlock}>Rotate screen</div>;
    }

    const isTest = Number(testId) === TEST_ID;

    if (timer === TIMER_END || isTest) {
      return <Outlet />;
    }

    if (timer) {
      return <TimerScreen {...timer} />;
    }

    return <EmptyScreen />;
  };

  return <div className={styles.screen}>{renderMainScreen()}</div>;
};
