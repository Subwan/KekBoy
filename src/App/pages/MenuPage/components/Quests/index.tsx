import React, { useCallback, useState } from 'react';
import cn from 'classnames';

import { QuestApi } from '../../../../localStorageApi';
import { CodeBlock } from './CodeBlock';

import { QUEST_ORDER } from '../../../../constants/quests';

import { QuestsCodes, TQuest, TQuests } from '../../../../types';
import { TUpdateQuests } from './types';

import styles from './styles.module.scss';

export const Quests: React.FC = () => {
  const [quests, setQuests] = useState<TQuests>(QuestApi.get());
  const [currentQuest, setCurrentQuest] = useState<TQuest>(quests[QuestsCodes.FILTER]);

  const updateQuests: TUpdateQuests = useCallback((value, code) => {
    setQuests(value);

    const nextCode = QUEST_ORDER[code];

    if (nextCode) {
      setCurrentQuest(value[nextCode]);
    }
  }, []);

  const questsBlock = Object.entries(quests).reduce<JSX.Element[]>(
    (acc, [code, item]) => {
      const newItem = !!item.active && (
        <li
          className={cn({
            [styles.current]: currentQuest.title === item.title,
            [styles.completed]: item.completed,
          })}
          key={code}
          onClick={() => setCurrentQuest(item)}
        >
          {item.title}
        </li>
      );

      if (!newItem) {
        return acc;
      }

      if (item.completed) {
        return [...acc, newItem];
      }

      return [newItem, ...acc];
    },
    [],
  );

  return (
    <div className={styles.container}>
      <ul className={styles.list}>{questsBlock}</ul>
      <div
        className={cn(styles.description, { [styles.completed]: currentQuest.completed })}
      >
        <p>{currentQuest.description}</p>
        <CodeBlock updateQuests={updateQuests} />
      </div>
    </div>
  );
};
