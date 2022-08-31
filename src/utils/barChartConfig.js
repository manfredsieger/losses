import { getWordWithBigFirstLetter } from './helpers';

export const chartModes = {
  month: 'month',
  week: 'week',
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: 'rgba(0,0,0,0.6)',
      },
    },
    title: {
      display: false,
      text: 'Russia\'s monthly and weekly losses in Ukraine',
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: 'rgba(0,0,0,0.6)',
        font: {
          size: 14,
        },
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
      ticks: {
        color: 'rgba(0,0,0,0.6)',
        font: {
          size: 14,
        },
      },
    },
  },
};

// export const emptyChartData = {
//   labels: [],
//   datasets: [
//     {
//       label: '',
//       data: [],
//       backgroundColor: '#f1c40f',
//     },
//   ],
// };

/**
 * Provides the name of the month a particular date belongs to.
 * @param date is a date which belongs to a month which name one is looking for.
 * @returns {string} the name of a month.
 */
export function getMonthAsStep(date, language) {
  return getWordWithBigFirstLetter(new Date(date).toLocaleString(language, { month: 'long' }));
}

/**
 * Adds or subtracts days from a given date
 * @param date {Date} is the date to add or subtract days to / from
 * @param days {number} is number of days to add or subtract from the days variable
 * @param addition {boolean} add days if true, subtract if false
 * @returns {Date} new date object with days added or subtracted
 */
function calcDays(date, days, addition) {
  const newDate = new Date(date.getTime());
  if (addition) {
    newDate.setDate(newDate.getDate() + days);
  } else {
    newDate.setDate(newDate.getDate() - days);
  }
  return newDate;
}

/**
 * Provides the day and the month of a given date in the following format: 'dd.mm'
 * @param dateObj {Date} is the date whose day and month shall be returned
 * @returns {string} is the day and the month of a given date in the following format: 'dd.mm'
 */
function getDayAndMonthOfDate(dateObj) {
  const day = dateObj.getDate();
  const month = dateObj.getMonth().toString().length === 1 ? `0${dateObj.getMonth() + 1}` : dateObj.getMonth() + 1;
  return `${day}.${month}`;
}

/**
 * Provides the first and the last day of the week the given date belongs to
 * @param dateStr is the string date ('2022-02-24')
 * @returns {string} is the first and the last day of the week in format 'dd.mm-dd.mm'
 */
function getFirstLastWeekDay(dateStr) {
  const dateObj = new Date(dateStr);
  const numberOfDayInWeek = dateObj.getDay();

  let daysToFirstDayInWeek;
  let daysToLastDayInWeek;
  if (numberOfDayInWeek !== 0) {
    daysToFirstDayInWeek = numberOfDayInWeek - 1;
    daysToLastDayInWeek = 7 - numberOfDayInWeek;
  } else { // in case it is sunday with getDay() === 0
    daysToFirstDayInWeek = 6;
    daysToLastDayInWeek = 0;
  }

  const firstDayInWeek = calcDays(dateObj, daysToFirstDayInWeek, false);
  const lastDayInWeek = calcDays(dateObj, daysToLastDayInWeek, true);

  return `${getDayAndMonthOfDate(firstDayInWeek)}–${getDayAndMonthOfDate(lastDayInWeek)}`;
}

/**
 * Calculates the number of days from a given day to the next monday
 * @param dateToCalculate
 * @returns {number|number}
 */
function getDaysToMonday(dateToCalculate) {
  return dateToCalculate.getDay() !== 0 ? 8 - dateToCalculate.getDay() : 1;
}

/**
 * Calculates the number of the week a particular date belongs to given that one
 * shall start counting with the startDate and the date one is looking for is the currentDate.
 * The name of the week is provided in the following format - '1', '2' etc
 * This function is used as alternative to the 'getWeekAsStepDates' function
 * @param currentDate is the date that belongs to a week which number one is looking for.
 * @param startDate the date in a week to be deemed as week #1.
 * @returns {number} the number o the week the currentDate belongs to given that one shall start
 * counting from the startDate.
 */
export function getWeekAsStepNumber(currentDate, startDate = `${new Date().getFullYear()}-01-01`) {
  const TODAY = new Date(currentDate);
  // START_DATE is any date to start counting a number of a week from
  const START_DATE = new Date(startDate);
  // DATE_TO_START_COUNTING is the nearest monday to the START_DATE
  const DATE_TO_START_COUNTING = calcDays(START_DATE, getDaysToMonday(new Date(startDate)), true);
  const NUMBER_OF_DAYS = Math.ceil((TODAY - DATE_TO_START_COUNTING) / (24 * 60 * 60 * 1000) + 1);
  return Math.ceil(NUMBER_OF_DAYS / 7);
}

/**
 * Calculates the name of the week a particular date belongs to
 * The name of the week is provided in the following format - '15.02-22.02'
 * This function is used as alternative to the 'getWeekAsStepNumber' function
 * @param currentDate is the date that belongs to a week which first and last day one is looking for.
 * @returns {string}
 */
export function getWeekAsStepDates(currentDate) {
  return getFirstLastWeekDay(currentDate);
}
