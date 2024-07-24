import { isCorrectCode } from '../utils/quests';

import { INITIAL_QUESTS, QUEST_ORDER } from '../constants/quests';

import { QuestsCodes, TQuests } from '../types';

const KEY = 'quests';

const isQuests = (value: unknown): value is TQuests => {
  const isObject = !!value && typeof value === 'object';
  const isQuest = (item: unknown) =>
    !!item &&
    typeof item === 'object' &&
    'active' in item &&
    'completed' in item &&
    'title' in item &&
    'description' in item;

  return (
    isObject &&
    Object.entries(value).every(([key, item]) => isCorrectCode(key) && isQuest(item))
  );
};

const updateQuestsByCode = (code: QuestsCodes, currentData: TQuests): TQuests => {
  const data: TQuests = JSON.parse(JSON.stringify(currentData));

  if (!data[code]) {
    return data;
  }

  data[code] = {
    ...data[code],
    completed: true,
  };

  if (code === QuestsCodes.LAST) {
    data[QuestsCodes.FILTER] = {
      ...data[QuestsCodes.FILTER],
      completed: true,
    };
  }

  const nextCode = QUEST_ORDER[code];

  if (nextCode) {
    data[nextCode] = {
      ...data[nextCode],
      active: true,
    };
  }

  return data;
};

export const QuestApi = {
  get: (): TQuests => {
    const dataJSON = localStorage.getItem(KEY);

    if (!dataJSON) {
      return INITIAL_QUESTS;
    }

    const parsedJSON = JSON.parse(dataJSON);

    if (!isQuests(parsedJSON)) {
      return INITIAL_QUESTS;
    }

    return parsedJSON;
  },
  set: (newData: TQuests) => {
    return localStorage.setItem(KEY, JSON.stringify(newData));
  },
  postCode: (code: QuestsCodes): TQuests => {
    const currentData = QuestApi.get();
    const newData = updateQuestsByCode(code, currentData);

    QuestApi.set(newData);

    return newData;
  },
};
