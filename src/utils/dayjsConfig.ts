import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';

import 'dayjs/locale/ru';

const config = {
  thresholds: [
    { l: 's', r: 1 },
    { l: 'm', r: 1 },
    { l: 'mm', r: 59, d: 'minute' },
    { l: 'h', r: 1 },
    { l: 'hh', r: 23, d: 'hour' },
    { l: 'd', r: 1 },
    { l: 'dd', r: 100000, d: 'day' },
    { l: 'M', r: 1 },
    { l: 'MM', r: 11, d: 'month' },
    { l: 'y', r: 1 },
    { l: 'yy', d: 'year' },
  ],
};

dayjs.locale('ru');
dayjs.extend(duration);
dayjs.extend(advancedFormat);
dayjs.extend(relativeTime, config);
dayjs.extend(updateLocale);

dayjs.updateLocale('ru', {
  relativeTime: {
    ...dayjs.Ls.ru.relativeTime,
    m: '1 минута',
    h: '1 час',
    d: '1 день',
  },
});
