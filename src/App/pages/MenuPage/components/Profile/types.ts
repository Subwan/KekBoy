import { QuestionnaireAnswer } from '../../../../types';

type ProfileText = {
  title: string;
  text: string;
};

export type TProfile = Record<QuestionnaireAnswer, ProfileText>;
