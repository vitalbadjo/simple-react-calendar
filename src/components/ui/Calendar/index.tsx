import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import {
  CalendarGrid,
  EventData,
  WeekDaysNameType,
  WeekStartsWith,
} from './types';
import utils from './utils';
import styles from './index.module.scss';
import IconButton from '../IconButton';
import CalendarDateItem from '../CalendarDateItem';

interface CalendarPropsTypes {
  eventsData?: EventData[];
  year: DateTime['year'];
  month: DateTime['month'];
  weekStartsWith: WeekStartsWith;
  weekDaysNameType: WeekDaysNameType;
  addEvent: () => {};
}
export type { CalendarPropsTypes };

const Calendar = ({
  eventsData = [],
  year,
  month,
  weekStartsWith,
  weekDaysNameType,
  addEvent,
}: CalendarPropsTypes) => {
  const [date, setDate] = useState<DateTime>(
    DateTime.fromObject({ year, month }),
  );
  const [calendarArr, setCalendarArr] = useState<CalendarGrid>([]);

  useEffect(() => {
    setCalendarArr(
      utils.getMonthWeeks(weekStartsWith, weekDaysNameType, month, year),
    );
  }, []);

  useEffect(() => {
    setCalendarArr(
      utils.getMonthWeeks(
        weekStartsWith,
        weekDaysNameType,
        date.month,
        date.year,
      ),
    );
  }, [date]);

  const changeMonth = (direction: 'next' | 'prev') => {
    const newDate =
      direction === 'prev' ? date.minus({ month: 1 }) : date.plus({ month: 1 });
    setDate(newDate);
  };

  console.log(addEvent);

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.yearMonthSelector}>
        <IconButton icon="arrowLeft" onClick={() => changeMonth('prev')} />
        <div>{`${date.monthLong} ${date.year}`}</div>
        <IconButton icon="arrowRight" onClick={() => changeMonth('next')} />
      </div>
      <div className={styles.calendar}>
        <div className={`${styles.row} ${styles.weekDays}`}>
          {utils
            .getWeekDaysHeadingArray(weekStartsWith, weekDaysNameType)
            .map((el) => (
              <div key={el} className={styles.cell}>
                {el}
              </div>
            ))}
        </div>
        {calendarArr.map((row) => {
          return (
            <div
              key={DateTime.now().millisecond + Math.random() * 100}
              className={styles.row}
            >
              {row.map((cell) => {
                let events: EventData[] = [];
                if (cell.date !== null) {
                  const checkedDate = cell.date;
                  events = eventsData?.filter((ev) =>
                    utils.isEqualDates(
                      DateTime.fromJSDate(ev.date),
                      checkedDate,
                    ),
                  );
                }

                return (
                  <CalendarDateItem
                    key={DateTime.now().millisecond + Math.random() * 1000}
                    events={events}
                    date={cell.date}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
