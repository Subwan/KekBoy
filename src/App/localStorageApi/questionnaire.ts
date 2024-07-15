import { isAnswer } from '../utils/answers';

import { ANSWERS_ARRAY } from '../constants/questionnaire';

import { QuestionnaireAnswer, QuestionnaireResult } from '../types';

const KEY = 'questionnaire';
const RESULT_KEY = 'questionnaireResult';

const isQuestionnaireData = (data: unknown): data is QuestionnaireResult => {
  return Array.isArray(data) && data.every((value) => ANSWERS_ARRAY.includes(value));
};

export const QuestionnaireApi = {
  get: (): QuestionnaireResult => {
    const dataJSON = localStorage.getItem(KEY);

    if (!dataJSON) {
      return [];
    }

    const parsedJSON = JSON.parse(dataJSON);

    if (!isQuestionnaireData(parsedJSON)) {
      return [];
    }

    return parsedJSON;
  },
  add: (data: QuestionnaireAnswer) => {
    const currentData = QuestionnaireApi.get();

    const newData: QuestionnaireResult = [...currentData, data];

    return localStorage.setItem(KEY, JSON.stringify(newData));
  },
  getResult: (): QuestionnaireAnswer | void => {
    const dataJSON = localStorage.getItem(RESULT_KEY);

    if (!dataJSON) {
      return;
    }

    const parsedJSON = JSON.parse(dataJSON);

    if (!isAnswer(Number(parsedJSON))) {
      return;
    }

    return parsedJSON;
  },
  calculateResult: () => {
    const currentData = QuestionnaireApi.get();

    let maxAnswered: QuestionnaireAnswer = 1;

    currentData.reduce(
      (acc: Record<QuestionnaireAnswer, number>, curr) => {
        const newValue = {
          ...acc,
          [curr]: acc[curr] + 1,
        };

        if (newValue[curr] > newValue[maxAnswered]) {
          maxAnswered = curr;
        }

        return newValue;
      },
      {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
      },
    );

    return localStorage.setItem(RESULT_KEY, JSON.stringify(maxAnswered));
  },
};
