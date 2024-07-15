import React, { useLayoutEffect, useState } from 'react';
import { Outlet as RouterOutlet } from 'react-router-dom';

import { checkQuestionnaireEnd } from './utils';

import { Questionnaire } from './Questionnaire';

import styles from './styles.module.scss';

export const Outlet: React.FC = () => {
  const [isQuestionnaireEnd, setIsQuestionnaireEnd] = useState<boolean>(false);

  const setEnd = () => setIsQuestionnaireEnd(true);

  useLayoutEffect(() => {
    if (checkQuestionnaireEnd()) {
      setEnd();
    }
  }, []);

  if (!isQuestionnaireEnd) {
    return (
      <div className={styles.questionnaireContainer}>
        <Questionnaire setEnd={setEnd} />
      </div>
    );
  }

  return <RouterOutlet />;
};
