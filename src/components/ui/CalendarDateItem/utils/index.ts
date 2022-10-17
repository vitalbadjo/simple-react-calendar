import { DateTime } from 'luxon';

const isDayPast = (dateToCheck: DateTime, dateNow: DateTime): boolean => {
  return (
    dateToCheck.year === dateNow.year &&
    dateToCheck.month === dateNow.month &&
    dateToCheck.day < dateNow.day
  );
};

export default { isDayPast };
