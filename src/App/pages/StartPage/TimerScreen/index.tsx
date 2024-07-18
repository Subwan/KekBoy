import React, { useState } from 'react';
import backgroundMusic from '@assets/audio/timer_background.m4a';
import { FloatButton } from '@ui';
import { CaretRightFilled, PauseOutlined } from '@ui-icons';

import { DateCounter } from './DateCounter';

import styles from './styles.module.scss';

export interface BottomTimerProps {
  days: number;
  hours: number;
  minutes: number;
}

const audio = new Audio(backgroundMusic);

audio.loop = true;

export const TimerScreen: React.FC<BottomTimerProps> = ({ days, hours, minutes }) => {
  const [play, setPlay] = useState<boolean>(false);

  audio.onplay = () => setPlay(true);
  audio.onpause = () => setPlay(false);

  const onClick = () => {
    if (audio?.paused) {
      return audio?.play();
    }

    audio?.pause();
  };

  return (
    <div className={styles.container}>
      <FloatButton
        className={styles.playButton}
        icon={play ? <PauseOutlined /> : <CaretRightFilled />}
        onClick={onClick}
      />
      <div className={styles.innerBlock}>
        <h2>ДО ОТКРЫТИЯ УБЕЖИЩА</h2>
        <div className={styles.timeBlock}>
          <DateCounter dateNumber={days} label="Дней" />
          <DateCounter dateNumber={hours} label="Часов" />
          <DateCounter dateNumber={minutes} label="Минут" />
        </div>
      </div>
    </div>
  );
};
