import { useEffect, useState } from 'react';

import { getNearPlayback } from './utils';

import { RadioApi } from '../App/localStorageApi';

import { FIRST_TRACK_PLAYBACK } from '../App/constants/tracklist';

export const usePlayback = ({
  isPlaying,
  audio,
}: {
  isPlaying: boolean;
  audio: HTMLAudioElement;
}) => {
  const [activeTrackPlayback, setActiveTrackPlayback] =
    useState<number>(FIRST_TRACK_PLAYBACK);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying) {
      interval = setInterval(() => {
        RadioApi.set(audio.currentTime);

        setActiveTrackPlayback(getNearPlayback());
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying]);

  return activeTrackPlayback;
};
