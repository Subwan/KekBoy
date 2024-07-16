import { useEffect, useLayoutEffect, useState } from 'react';
import dayjs from 'dayjs';

import { getObjectTime } from './utils';

import { START_TIME, TIMER_END } from './constants';

import { Timer } from './types';

export const useOrientation = (): boolean => {
  const [orientationAngle, setOrientationAngle] = useState<number>(
    window.screen.orientation.angle,
  );

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );

  useLayoutEffect(() => {
    const onRotate = () => {
      setOrientationAngle(window.screen.orientation.angle);
    };

    window.screen.orientation.addEventListener('change', onRotate);

    return () => {
      window.screen.orientation.removeEventListener('change', onRotate);
    };
  }, []);

  return isMobile && orientationAngle !== 90;
};

export const useCountdown = (): Timer => {
  const [time, setTime] = useState<Timer>();

  const getTime = async () => {
    try {
      const apiTime = await fetch(
        '/timeapi/api/Time/current/zone?timeZone=Europe/Moscow',
      );

      if (!apiTime?.ok) {
        throw new Error(apiTime.toString());
      }

      return apiTime.json() as Promise<{ dateTime: string }>;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const changeTime = (): Promise<boolean | undefined> =>
      getTime().then((data) => {
        if (!data?.dateTime) {
          return;
        }

        const current = dayjs(data.dateTime);
        const start = dayjs(START_TIME);

        const diff = start.diff(current);

        const objectTimer = getObjectTime(diff);

        if (objectTimer.days <= 0 && objectTimer.hours <= 0 && objectTimer.minutes <= 0) {
          setTime(TIMER_END);

          return true;
        }

        setTime(objectTimer);

        return false;
      });

    changeTime();

    const timer = setInterval(() => {
      changeTime().then((expire) => {
        if (!expire) {
          return;
        }

        clearInterval(timer);
      });
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return time;
};
