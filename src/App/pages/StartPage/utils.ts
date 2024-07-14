import dayjs from 'dayjs';

export function getObjectTime(milliseconds: number) {
  const checkNum = (num: number) => {
    return num < 0 ? 0 : num;
  };

  const daysMs = milliseconds % (24 * 60 * 60 * 1000);
  const hoursMs = milliseconds % (60 * 60 * 1000);

  const days = checkNum(Math.floor(milliseconds / (24 * 60 * 60 * 1000)));
  const hours = checkNum(Math.floor(daysMs / (60 * 60 * 1000)));
  const minutes = checkNum(Math.floor(hoursMs / (60 * 1000)));

  return {
    days,
    hours,
    minutes,
  };
}

export const checkIsSame = (serverTime: string) => {
  const currentDate = dayjs();
  const serverDate = dayjs(serverTime);
  const isSame = currentDate.isSame(serverDate, 'minute');

  return isSame;
};
