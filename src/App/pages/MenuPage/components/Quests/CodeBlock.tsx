import React, { useState } from 'react';
import { Button } from '@ui';

import { isCorrectCode } from '../../../../utils/quests';

import { QuestApi } from '../../../../localStorageApi';

import { TUpdateQuests } from './types';

import styles from './styles.module.scss';

interface Props {
  updateQuests: TUpdateQuests;
}

const DEFAULT_INPUT_VALUE = '';

export const CodeBlock: React.FC<Props> = ({ updateQuests }) => {
  const [isCodeType, setIsCodeType] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(DEFAULT_INPUT_VALUE);

  if (!isCodeType) {
    return (
      <div>
        <Button type="primary" ghost size="large" onClick={() => setIsCodeType(true)}>
          Продолжить
        </Button>
      </div>
    );
  }

  const onClick = () => {
    if (!isCorrectCode(inputValue)) {
      return;
    }

    const newQuests = QuestApi.postCode(inputValue);

    setInputValue(DEFAULT_INPUT_VALUE);
    setIsCodeType(false);
    updateQuests(newQuests, inputValue);
  };

  return (
    <div className={styles.codeInputBlock}>
      <input
        className={styles.codeInput}
        value={inputValue}
        maxLength={10}
        autoFocus
        onChange={(e) => setInputValue(e.target.value.toUpperCase())}
      />
      <Button
        type="primary"
        ghost
        size="large"
        disabled={!isCorrectCode(inputValue)}
        onClick={onClick}
      >
        Ввести
      </Button>
    </div>
  );
};
