import { TQuest } from '../../../../types';

export const QUESTS: TQuest[] = [
  {
    active: true,
    completed: false,
    title: 'Квест на фильтр для воды',
    description: 'Убежищу нужен новый фильтр для воды.',
  },
  {
    active: true,
    completed: true,
    title: 'Квест на стрельбу',
    description: 'Нужно успеть научиться стрелять быстрее, чем научишься ловить пулю.',
  },
  {
    active: true,
    completed: true,
    title: 'Квест на Совок',
    description: 'Вам нужны союзники, говорят в кафе Совок находятся.',
  },
  {
    active: true,
    completed: false,
    title: 'Квест на НЗБ',
    description: 'Вам нужны союзники, говорят в кафе НЗБ находятся.',
  },
  {
    active: true,
    completed: false,
    title: 'Квест на Караоке',
    description: 'Вам нужны союзники, говорят в кафе Караоке находятся.',
  },
  {
    active: true,
    completed: false,
    title: 'Квест на Андерлок',
    description: 'Говорят, пора заканчивать.',
  },
  {
    active: false,
    completed: false,
    title: 'Просто не активный квест',
    description: 'Квест, который вы ещё не открыли',
  },
];
