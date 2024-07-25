import { ANSWERS_ARRAY } from '../constants/questionnaire';

export type QuestionnaireAnswer = (typeof ANSWERS_ARRAY)[number];

export type QuestionnaireResult = QuestionnaireAnswer[];

export enum QuestsCodes {
  FILTER = 'НОВОЕ НАЧАЛО',
  VATS = 'ГОДЕН',
  STEEL = 'МАРКС',
  RADIOACTIVE = 'КОСОРЫЛОВКА',
  NATION = 'ПИКУР',
  LAST = 'НАТАЛИ',
  ENDLESS = 'ENDLESS',
}

// От изменений типа зависит typeGuard isQuests
export type TQuest = {
  active: boolean;
  completed: boolean;
  title: string;
  description: string;
};

export type TQuests = Record<QuestsCodes, TQuest>;

export enum PlaybackType {
  PREV = 'prev',
  NEXT = 'next',
  CURRENT = 'current',
}
