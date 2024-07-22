import React, { useContext } from 'react';
import cn from 'classnames';
import {
  CaretRightFilled,
  PauseOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
} from '@ui-icons';

import { RadioContext } from '../../../../../RadioProvider';

import { TRACKLIST } from '../../../../constants/tracklist';

import styles from './styles.module.scss';

export const Radio: React.FC = () => {
  const { isPlaying, play, pause, prev, next, activeTrackPlayback } =
    useContext(RadioContext);

  const renderList = TRACKLIST.map((track) => (
    <li
      className={cn({
        [styles.current]: activeTrackPlayback === track.playback,
      })}
      key={track.playback}
    >
      {track.name}
      {track.playback}
    </li>
  ));

  return (
    <div className={styles.container}>
      {activeTrackPlayback}
      <ul className={styles.list}>{renderList}</ul>
      <div className={styles.controls}>
        <StepBackwardOutlined onClick={prev} />
        {isPlaying ? (
          <PauseOutlined onClick={pause} />
        ) : (
          <CaretRightFilled onClick={play} />
        )}
        <StepForwardOutlined onClick={next} />
      </div>
    </div>
  );
};
