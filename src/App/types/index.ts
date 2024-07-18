import { ANSWERS_ARRAY } from '../constants/questionnaire';

export type QuestionnaireAnswer = (typeof ANSWERS_ARRAY)[number];

export type QuestionnaireResult = QuestionnaireAnswer[];

export type TQuest = {
  active: boolean;
  completed: boolean;
  title: string;
  description: string;
};
