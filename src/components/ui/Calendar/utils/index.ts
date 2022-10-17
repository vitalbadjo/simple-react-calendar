import { DateTime } from 'luxon';
import {
  CalendarCell,
  CalendarGrid,
  WeekDaysNameType,
  WeekStartsWith,
} from '../types';

type ArrayPaddingFunc = <T extends Array<K>, K>(
  arr: T,
  paddingSide: 'left' | 'right',
  paddingCount: number,
  paddingValue: K,
) => K[];
/**
 * IMPORTANT! Function is mutate input array
 * @param arr - array to mutate with padding
 * @param paddingSide - padding side "left" || "right"
 * @param paddingCount - number of padding elements
 * @param paddingValue - padding element
 */
const arrayPadding: ArrayPaddingFunc = (
  arr,
  paddingSide,
  paddingCount,
  paddingValue,
) => {
  const arrWithPadding = Array.from({
    length: paddingCount,
  }).map(() => paddingValue);
  if (paddingSide === 'left') {
    return arr.splice(0, 0, ...arrWithPadding);
  }
  return arr.splice(arr.length, 0, ...arrWithPadding);
};
/**
 *
 * @param wStartsWith
 * @param month
 * @param year
 */
const getMonthWeeks = (
  wStartsWith: WeekStartsWith,
  weekDayNameType: WeekDaysNameType,
  month: DateTime['month'],
  year: DateTime['year'],
): CalendarGrid => {
  const weekHeading: string[] = [];

  const { daysInMonth } = DateTime.fromObject({ year, month });

  const monthDays = Array.from({
    length: daysInMonth,
  }).map((_, i) => DateTime.fromObject({ year, month, day: i + 1 }));

  return monthDays.reduce<CalendarGrid>((p, c, i) => {
    // padding of empty cells for first week
    if (c.day === 1) {
      const padLeft =
        wStartsWith === 'mon'
          ? c.weekday - 1
          : 0 + (c.weekday === 7 ? 0 : c.weekday);
      if (padLeft) {
        const arrWithPadding: CalendarCell[] = [];
        arrayPadding(arrWithPadding, 'left', padLeft, {
          date: null,
        } as CalendarCell);
        p.push(arrWithPadding);
      }
    }
    // start new week row if new week starts
    if (wStartsWith === 'mon' && c.weekday === 1) {
      p.push([]);
    }
    if (wStartsWith === 'sun' && c.weekday === 7) {
      p.push([]);
    }
    // push new day
    p[p.length - 1].push({ date: c });

    // padding of empty cells for last week
    if (monthDays.length - 1 === i) {
      const lastRow = p[p.length - 1];
      const padRight =
        wStartsWith === 'mon'
          ? 7 - c.weekday
          : 6 - (c.weekday === 7 ? 0 : c.weekday);
      arrayPadding(lastRow, 'right', padRight, {
        date: null,
      } as CalendarCell);
    }
    return p;
  }, []);
};

const weekDays: Record<WeekDaysNameType, string | number>[] = [
  { short: 'Mon', long: 'Monday' },
  { short: 'Tue', long: 'Tuesday' },
  { short: 'Wed', long: 'Wednesday' },
  { short: 'Thu', long: 'Thursday' },
  { short: 'Fri', long: 'Friday' },
  { short: 'Sat', long: 'Saturday' },
  { short: 'Sun', long: 'Sunday' },
];

const getWeekDaysHeadingArray = (
  weekStartsWith: WeekStartsWith,
  weekDaysNameType: WeekDaysNameType,
): (string | number)[] => {
  const weekDaysToArray = Object.values(weekDays);
  if (weekStartsWith === 'sun') {
    weekDaysToArray.unshift(weekDaysToArray[6]);
    weekDaysToArray.pop();
  }
  return weekDaysToArray.map((val) => val[weekDaysNameType]);
};

const isEqualDates = (date1: DateTime, date2: DateTime): boolean => {
  return (
    date1.year === date2.year &&
    date1.month === date2.month &&
    date1.day === date2.day
  );
};

export default { getMonthWeeks, getWeekDaysHeadingArray, isEqualDates };
