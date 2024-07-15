import { ANSWERS_ARRAY } from '../constants/questionnaire';

export type QuestionnaireAnswer = (typeof ANSWERS_ARRAY)[number];

export type QuestionnaireResult = QuestionnaireAnswer[];
