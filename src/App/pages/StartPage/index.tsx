import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { EmptyScreen } from '../../components/EmptyScreen';
import { TEST_ID, TIMER_END } from './constants';
import { useCountdown, useWindowWidth } from './hooks';

import styles from './styles.module.scss';

export const StartPage: React.FC = () => {
  const { testId } = useParams();

  const windowWidth = useWindowWidth();
  const timer = useCountdown();

  if (windowWidth < 500) {
    return <div className={styles.middleBlock}>Rotate screen</div>;
  }

  const isTest = Number(testId) === TEST_ID;

  if (timer === TIMER_END || isTest) {
    return <Outlet />
  }

  if (timer) {
    return (
      <div className={styles.middleBlock}>
        Осталось: {timer.days}д. {timer.hours}:{timer.minutes}
      </div>
    );  
  }

  return <EmptyScreen />;
};
