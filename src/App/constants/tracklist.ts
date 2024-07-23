import { timeToSeconds } from '../utils/tracklist';

export const TRACKLIST = [
  {
    name: 'Дымок',
    playback: 0,
    tags: 'добро пожаловать',
  },
  {
    name: 'Нужен морфий',
    playback: timeToSeconds('2:33'),
    tags: 'эй выжившие в мире',
  },
  {
    name: 'Большая пушка в кобуре',
    playback: timeToSeconds('4:24'),
    tags: 'специальный привет',
  },
  {
    name: 'Весёлая музыка',
    playback: timeToSeconds('8:01'),
    tags: 'гитара',
  },
  {
    name: 'Новый дилижанс',
    playback: timeToSeconds('12:11'),
    tags: 'внимание внимание',
  },
  {
    name: 'Ковбойский джаз',
    playback: timeToSeconds('15:43'),
    tags: 'а теперь спец песня',
  },
  {
    name: 'За крышки - Да',
    playback: timeToSeconds('17:59'),
    tags: 'а мы все еще в эфире',
  },
  {
    name: 'Не моя',
    playback: timeToSeconds('21:54'),
    tags: 'если вас кто-то раздражает',
  },
];

export const FIRST_TRACK_PLAYBACK = TRACKLIST[0].playback;
