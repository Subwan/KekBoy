import React, { useLayoutEffect, useState } from 'react';

import { QuestionnaireApi } from '../../../localStorageApi';
import { QuestionBlock, StartBlock } from './components';
import { QUESTIONS_LENGTH } from './constants';

import { TOnContinue } from './types';

interface Props {
  setEnd: () => void;
}

export const Questionnaire: React.FC<Props> = ({ setEnd }) => {
  const [currentQuestionId, setCurrentQuestionId] = useState<number | undefined>();

  useLayoutEffect(() => {
    const currentResult = QuestionnaireApi.get();

    if (!currentResult.length) {
      return;
    }

    setCurrentQuestionId(currentResult.length);
  }, []);

  const onStart = () => setCurrentQuestionId(0);

  const onContinue: TOnContinue = (answer) => {
    QuestionnaireApi.add(answer);

    if (currentQuestionId === QUESTIONS_LENGTH - 1) {
      QuestionnaireApi.calculateResult();

      return setEnd();
    }

    setCurrentQuestionId((value) => (value !== undefined ? value + 1 : 0));
  };

  if (currentQuestionId === undefined) {
    return <StartBlock onStart={onStart} />;
  }

  return <QuestionBlock currentQuestionId={currentQuestionId} onContinue={onContinue} />;
};
