import { DateTime } from 'luxon';
import { EventData } from './components/ui/Calendar/types';

export const FAKE_DATA: EventData[] = [
  {
    date: new Date('Fri, 20 Oct 2022 15:00:00 GMT'),
    title: 'Some new task with many chars',
    description: 'Task description',
  },
  {
    date: new Date('Fri, 20 Oct 2022 16:00:00 GMT'),
    title: 'Some new task with many chars',
    description: 'Task description',
  },
  {
    date: new Date('Fri, 22 Oct 2022 15:00:00 GMT'),
    title: 'Some new task with many chars',
    description: 'Task description',
  },
];
