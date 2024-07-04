import React from 'react';
import { Outlet } from 'react-router-dom';

import { EmptyScreen } from '../../components/EmptyScreen';
import { TIMER_END } from './constants';
import { useCountdown, useWindowWidth } from './hooks';

import styles from './styles.module.scss';

export const StartPage: React.FC = () => {
  const windowWidth = useWindowWidth();
  const timer = useCountdown();

  if (windowWidth < 500) {
    return <div className={styles.middleBlock}>Rotate screen</div>;
  }

  if (timer === TIMER_END) {
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
