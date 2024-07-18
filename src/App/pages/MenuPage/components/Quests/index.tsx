import React, { useState } from 'react';
import cn from 'classnames';

import { QUESTS } from './constants';

import { TQuest } from '../../../../types';

import styles from './styles.module.scss';

const sortedQuest = QUESTS.toSorted((item) => (item.completed ? 0 : -1));

export const Quests: React.FC = () => {
  const [currentQuest, setCurrentQuest] = useState<TQuest>(sortedQuest[0]);

  const questsBlock = sortedQuest.map(
    (item) =>
      item.active && (
        <li
          className={cn({
            [styles.current]: currentQuest.title === item.title,
            [styles.completed]: item.completed,
          })}
          key={item.title}
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
        {currentQuest.description}
      </div>
    </div>
  );
};
