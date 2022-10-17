import React from 'react';
import { DateTime } from 'luxon';
import styles from './index.module.scss';
import { EventData } from '../Calendar/types';
import Badge from '../Bage';
import utils from './utils/index';

interface CalendarDateItemPropsTypes {
  date: DateTime | null;
  events?: EventData[];
}
export type { CalendarDateItemPropsTypes };

const CalendarDateItem = ({ date, events }: CalendarDateItemPropsTypes) => {
  const holiday = !!(date && date?.weekday > 5);
  const disabled = !!(date && utils.isDayPast(date, DateTime.now()));
  const active = !!(date && date?.hasSame(DateTime.now(), 'day'));
  return (
    <div
      className={`${styles.calendarDateItem}${
        disabled ? ` ${styles.disabled}` : ''
      }`}
    >
      <div
        className={`${styles.dateText}${holiday ? ` ${styles.holiday}` : ''}${
          disabled ? ` ${styles.disabled}` : ''
        }${active ? ` ${styles.selected}` : ''}`}
      >
        {date ? date.day : null}
      </div>
      <div className={styles.eventsBlock}>
        {events?.map((e) => (
          <Badge
            text={e.title}
            key={`${e.title}${Math.random().toString()}`}
            onClick={() => {
              console.log('Title: ', e.title, '\nDescription: ', e.description);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarDateItem;
