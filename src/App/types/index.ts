import { ANSWERS_ARRAY } from '../constants/questionnaire';

export type QuestionnaireAnswer = (typeof ANSWERS_ARRAY)[number];

export type QuestionnaireResult = QuestionnaireAnswer[];

export enum QuestsCodes {
  FILTER = 'НОВОЕ НАЧАЛО',
  VATS = 'ГОДЕН',
  STEEL = 'МАРКС',
  NATION = 'ПИКУР',
  SING = 'SING',
  LAST = 'LAST',
}

// От изменений типа зависит typeGuard isQuests
export type TQuest = {
  active: boolean;
  completed: boolean;
  title: string;
  description: string;
};

export type TQuests = Record<QuestsCodes, TQuest>;
