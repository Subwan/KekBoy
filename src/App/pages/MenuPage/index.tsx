import React from 'react';
import { useParams } from 'react-router-dom';

import { EmptyScreen } from '../../components/EmptyScreen';
import { Header, NavigationBar, Profile } from './components';

import { MenuItem } from './types';

import styles from './styles.module.scss';

export const MenuPage: React.FC = () => {
  const { menuId } = useParams();

  const renderMenu = () => {
    switch (menuId) {
      case MenuItem.Map:
        return <EmptyScreen />;
      case MenuItem.Profile:
      default:
        return <Profile />;
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.mainBlock}>{renderMenu()}</div>
      <div className={styles.navigationContainer}>
        <NavigationBar />
      </div>
    </div>
  );
};
