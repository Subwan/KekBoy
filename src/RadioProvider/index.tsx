import React, { useCallback, useEffect, useState } from 'react';
import radioMix from '@assets/audio/radio_mix.m4a';

import { getNearPlayback } from './utils';

import { RadioApi } from '../App/localStorageApi';
import { usePlayback } from './hooks';

import { FIRST_TRACK_PLAYBACK } from '../App/constants/tracklist';

export const RadioContext = React.createContext<{
  isPlaying: boolean;
  activeTrackPlayback: number;
  play: () => void;
  pause: () => void;
  prev: () => void;
  next: () => void;
  setPlayback: (playback: number) => void;
}>({
  isPlaying: false,
  activeTrackPlayback: FIRST_TRACK_PLAYBACK,
  play: () => {},
  pause: () => {},
  prev: () => {},
  next: () => {},
  setPlayback: (playback: number) => playback,
});

const audio = new Audio(radioMix);

audio.loop = true;

export const RadioProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const { activeTrackPlayback, updateActiveTrackPlayback } = usePlayback({
    isPlaying,
    audio,
  });

  useEffect(() => {
    const playback = RadioApi.get();

    if (playback) {
      audio.currentTime = playback;
    }
  }, []);

  audio.onplay = () => {
    setIsPlaying(true);
    RadioApi.set(audio.currentTime);
  };

  audio.onpause = () => {
    setIsPlaying(false);
    RadioApi.set(audio.currentTime);
  };

  const play = useCallback(() => {
    if (!audio.paused) {
      return;
    }

    audio.play();
  }, []);
  const pause = useCallback(() => {
    if (audio.paused) {
      return;
    }

    audio.pause();
  }, []);
  const prev = useCallback(() => {
    audio.currentTime = getNearPlayback('prev');
    RadioApi.set(audio.currentTime);
    play();
    updateActiveTrackPlayback();
  }, []);
  const next = useCallback(() => {
    audio.currentTime = getNearPlayback('next');
    RadioApi.set(audio.currentTime);
    play();
    updateActiveTrackPlayback();
  }, []);
  const setPlayback = useCallback((playback: number) => {
    audio.currentTime = playback;
    RadioApi.set(audio.currentTime);
    play();
    updateActiveTrackPlayback();
  }, []);

  return (
    <RadioContext.Provider
      value={{
        isPlaying,
        activeTrackPlayback,
        play,
        pause,
        prev,
        next,
        setPlayback,
      }}
    >
      {children}
    </RadioContext.Provider>
  );
};
