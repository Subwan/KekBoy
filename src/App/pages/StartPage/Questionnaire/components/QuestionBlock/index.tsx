import React, { useState } from 'react';
import cn from 'classnames';
import { Button } from '@ui';

import { isAnswer } from '../../../../../utils/answers';

import { QUESTIONS } from '../../constants';

import { QuestionnaireAnswer } from '../../../../../types';
import { TOnContinue } from '../../types';

import styles from './styles.module.scss';

interface Props {
  currentQuestionId: number;
  onContinue: TOnContinue;
}

export const QuestionBlock: React.FC<Props> = ({ currentQuestionId, onContinue }) => {
  const currentQuestion = QUESTIONS[currentQuestionId];

  const [selectedAnswer, setSelectedAnswer] = useState<QuestionnaireAnswer | undefined>();

  const answers = Object.entries(currentQuestion.answers).map(([key, value]) => {
    const numberKey = Number(key);

    if (!isAnswer(numberKey)) {
      return null;
    }

    return (
      <div
        key={numberKey}
        className={cn({ [styles.active]: numberKey === selectedAnswer })}
        onClick={() => setSelectedAnswer(numberKey)}
      >
        {value}
      </div>
    );
  });

  const onClick = () => {
    setSelectedAnswer(undefined);
    onContinue(selectedAnswer || 1);
  };

  return (
    <div className={styles.container}>
      <h2>{currentQuestion.question}</h2>
      <div className={styles.answersBlock}>{answers}</div>
      <div className={styles.buttonContainer}>
        <Button
          type="primary"
          ghost
          size="large"
          disabled={!selectedAnswer}
          onClick={onClick}
        >
          Продолжить
        </Button>
      </div>
    </div>
  );
};
