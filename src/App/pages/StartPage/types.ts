import { getObjectTime } from './utils';

import { TIMER_END } from './constants';

export type Timer = ReturnType<typeof getObjectTime> | undefined | typeof TIMER_END;
