import { useCallback, useEffect, useState } from 'react';

import { getNearPlayback } from './utils';

import { RadioApi } from '../App/localStorageApi';

import { FIRST_TRACK_PLAYBACK } from '../App/constants/tracklist';

import { PlaybackType } from '../App/types';

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
    setActiveTrackPlayback(getNearPlayback(PlaybackType.CURRENT));
  }, []);

  useEffect(() => {
    updateActiveTrackPlayback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying) {
      interval = setInterval(() => {
        RadioApi.set(audio.currentTime);

        setActiveTrackPlayback(getNearPlayback(PlaybackType.CURRENT));
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  return { activeTrackPlayback, updateActiveTrackPlayback };
};
