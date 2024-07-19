import React, { useState } from 'react';
import cn from 'classnames';
import { Button } from '@ui';

import { QUESTS } from './constants';

import { TQuest } from '../../../../types';

import styles from './styles.module.scss';

export const Quests: React.FC = () => {
  const [currentQuest, setCurrentQuest] = useState<TQuest>(QUESTS[0]);

  const questsBlock = QUESTS.map(
    (item) =>
      item.active && (
        <li
          className={cn({
            [styles.current]: currentQuest.title === item.title,
            [styles.completed]: item.completed,
          })}
          key={item.code}
          onClick={() => setCurrentQuest(item)}
        >
          {item.title}
        </li>
      ),
  );

  return (
    <div className={styles.container}>
      <ul className={styles.quests}>{questsBlock}</ul>
      <div
        className={cn(styles.description, { [styles.completed]: currentQuest.completed })}
      >
        <p>{currentQuest.description}</p>
        <Button type="primary" ghost size="large">
          Продолжить
        </Button>
      </div>
    </div>
  );
};
