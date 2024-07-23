import { RadioApi } from '../App/localStorageApi';

import { FIRST_TRACK_PLAYBACK, TRACKLIST } from '../App/constants/tracklist';

export const getNearPlayback = (type: 'prev' | 'next' | 'current'): number => {
  const playback = RadioApi.get();

  if (!playback) {
    return FIRST_TRACK_PLAYBACK;
  }

  if (type === 'next') {
    return (
      TRACKLIST.find((track) => track.playback > playback)?.playback ??
      FIRST_TRACK_PLAYBACK
    );
  }

  const currentTrackIndex = TRACKLIST.reduce((acc, track, currentIndex) => {
    if (track.playback <= playback) {
      return currentIndex;
    }

    return acc;
  }, 0);

  if (currentTrackIndex === -1) {
    return FIRST_TRACK_PLAYBACK;
  }

  if (type === 'current') {
    return TRACKLIST[currentTrackIndex]?.playback ?? FIRST_TRACK_PLAYBACK;
  }

  return TRACKLIST[currentTrackIndex - 1]?.playback ?? FIRST_TRACK_PLAYBACK;
};
