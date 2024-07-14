import React from 'react';

import { EmptyScreen } from '../../../../components/EmptyScreen';
import { QuestionnaireApi } from '../../../../localStorageApi';

export const Profile: React.FC = () => {
  const result = QuestionnaireApi.getResult();

  if (!result) {
    return <EmptyScreen />
  }
 
  return <div>{result}</div>
};