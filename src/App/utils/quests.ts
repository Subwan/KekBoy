import { QuestsCodes } from '../types';

export const isCorrectCode = (code: string): code is QuestsCodes => {
  return Object.values(QuestsCodes).includes(code as QuestsCodes);
};
