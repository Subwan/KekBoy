import { QuestionnaireAnswer } from '../../../types';

export type TQuestion = {
  question: string;
  answers: Record<QuestionnaireAnswer, string>;
};

export type TOnContinue = (answer: QuestionnaireAnswer) => void;
