import { QuestionnaireApi } from '../../../../localStorageApi';
import { PROFILES } from './constants';

export const getProfile = () => {
  const result = QuestionnaireApi.getResult();

  if (!result) {
    return;
  }

  return PROFILES[result];
};
