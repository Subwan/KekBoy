const KEY = 'playback';

export const RadioApi = {
  get: (): number | undefined => {
    const result = localStorage.getItem(KEY);

    if (!result) {
      return;
    }

    const parsed = parseInt(result, 10);

    if (Number.isNaN(parsed)) {
      return;
    }

    return parsed;
  },
  set: (timeMark: number) => {
    localStorage.setItem(KEY, timeMark.toString());
  },
};
