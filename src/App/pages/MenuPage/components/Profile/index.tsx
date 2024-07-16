import React from 'react';

import { getProfile } from './utils';

import { EmptyScreen } from '../../../../components/EmptyScreen';

import styles from './styles.module.scss';

export const Profile: React.FC = () => {
  const result = getProfile();

  if (!result) {
    return <EmptyScreen />;
  }

  return (
    <div className={styles.middleBlock}>
      <h2>{result.title}</h2>
      <p>{result.text}</p>
    </div>
  );
};
