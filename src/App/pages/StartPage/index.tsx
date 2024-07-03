import React from 'react';
import { Outlet } from 'react-router-dom';

import { useWindowWidth } from './hooks';

import styles from './styles.module.scss';

export const StartPage: React.FC = () => {
  const windowWidth = useWindowWidth();

  if (windowWidth < 500) {
    return <div className={styles.middleBlock}>Rotate screen</div>;
  }

  return <Outlet />
};
