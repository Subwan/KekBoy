import { ANSWERS_ARRAY } from '../constants/questionnaire';

import { QuestionnaireAnswer } from '../types';

export const isAnswer = (answer: unknown): answer is QuestionnaireAnswer => {
  return (
    typeof answer === 'number' && ANSWERS_ARRAY.includes(answer as QuestionnaireAnswer)
  );
};
