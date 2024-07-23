import { timeToSeconds } from '../utils/tracklist';

export const TRACKLIST = [
  {
    name: 'Дымок',
    playback: 0,
  },
  {
    name: 'Нужен морфий',
    playback: timeToSeconds('2:33'),
  },
  {
    name: 'Большая пушка в кобуре',
    playback: timeToSeconds('4:24'),
  },
  {
    name: 'Весёлая музыка',
    playback: timeToSeconds('8:01'),
  },
  {
    name: 'Новый дилижанс',
    playback: timeToSeconds('12:11'),
  },
  {
    name: 'Ковбойский джаз',
    playback: timeToSeconds('15:43'),
  },
  {
    name: 'За крышки - Да',
    playback: timeToSeconds('17:59'),
  },
  {
    name: 'Не моя',
    playback: timeToSeconds('21:54'),
  },
];

export const FIRST_TRACK_PLAYBACK = TRACKLIST[0].playback;
