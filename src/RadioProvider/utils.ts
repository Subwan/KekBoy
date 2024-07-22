import { RadioApi } from '../App/localStorageApi';

import { FIRST_TRACK_PLAYBACK, TRACKLIST } from '../App/constants/tracklist';

export const getNearPlayback = (shouldReturnNext = false): number => {
  const playback = RadioApi.get() ?? FIRST_TRACK_PLAYBACK;

  if (shouldReturnNext) {
    return (
      TRACKLIST.find((track) => track.playback > playback)?.playback ??
      FIRST_TRACK_PLAYBACK
    );
  }

  const currentTrackIndex = TRACKLIST.reduce((acc, track, currentIndex) => {
    if (track.playback < playback) {
      return currentIndex;
    }

    return acc;
  }, 0);

  if (currentTrackIndex === -1) {
    return FIRST_TRACK_PLAYBACK;
  }

  return TRACKLIST[currentTrackIndex - 1]?.playback ?? FIRST_TRACK_PLAYBACK;
};
