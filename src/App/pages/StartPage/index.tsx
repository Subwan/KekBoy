import React from 'react';
import { useParams } from 'react-router-dom';

import { EmptyScreen } from '../../components/EmptyScreen';
import { TEST_ID, TIMER_END } from './constants';
import { useCountdown, useWindowWidth } from './hooks';
import { Outlet } from './Outlet';

import styles from './styles.module.scss';

export const StartPage: React.FC = () => {
  const { testId } = useParams();

  const windowWidth = useWindowWidth();
  const timer = useCountdown();

  const renderMainScreen = () => {
    if (windowWidth < 500) {
      return <div className={styles.middleBlock}>Rotate screen</div>;
    }

    const isTest = Number(testId) === TEST_ID;

    if (timer === TIMER_END || isTest) {
      return <Outlet />;
    }

    if (timer) {
      return (
        <div className={styles.middleBlock}>
          Осталось: {timer.days} д. {timer.hours} ч. {timer.minutes} мин.
        </div>
      );
    }

    return <div className={styles.middleBlock}><EmptyScreen /></div>;
  };

  return <div className={styles.screen}>{renderMainScreen()}</div>;
};
