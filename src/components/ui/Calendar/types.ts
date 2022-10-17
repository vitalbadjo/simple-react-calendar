import { DateTime } from 'luxon';

export type EventData = {
  date: Date;
  title: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

export type WeekDaysNameType = 'short' | 'long';
export type WeekStartsWith = 'sun' | 'mon';
export type CalendarCell = {
  date: DateTime | null;
};

export type CalendarGrid = CalendarCell[][];
