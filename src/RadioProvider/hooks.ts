import { useCallback, useEffect, useState } from 'react';

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

  const updateActiveTrackPlayback = useCallback(() => {
    setActiveTrackPlayback(getNearPlayback('current'));
  }, []);

  useEffect(() => {
    updateActiveTrackPlayback();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying) {
      interval = setInterval(() => {
        RadioApi.set(audio.currentTime);

        setActiveTrackPlayback(getNearPlayback('current'));
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying]);

  return { activeTrackPlayback, updateActiveTrackPlayback };
};
