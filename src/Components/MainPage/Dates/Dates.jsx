import React from 'react';
import './Dates.scss';
import '../../../screenshotSCSS/screenshotDates.scss';
import '../../../screenshotSCSS/screenshotCommon.scss';
import { useSelector } from 'react-redux';
// utils
import { getFullDate } from '../../../utils/helpers';
import translation from '../../../utils/translation';
import websiteLanguages from '../../../utils/languagesConfig';

const START_WAR_DATE = new Date('2022-02-24');

// Fill this date out when Ukraine wins the war
const END_WAR_DATE = null;

/** The date that shall be deemed as end date to count the number of days of war.
  Either the real end date of the war or the current date (today) */
const endDateToDisplayOnWebsite = END_WAR_DATE ?? new Date();
const MILLISECOND_IN_A_DAY = 86400000;

export default function Dates() {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  const daysOfAggression = Math.ceil((endDateToDisplayOnWebsite - START_WAR_DATE) / (MILLISECOND_IN_A_DAY));
  const {
    daysPassed, start, language, today, endOfWar,
  } = translation[websiteLanguage].main.dates;

  /**
   * Returns word 'дні' (days in UA) in the right form
   * according to the amount of days specified.
   * @returns {*|string|string}
   */
  function getAdaptedSentenceIfLangIsUA() {
    const daysOfAggressionString = daysOfAggression.toString();

    if (websiteLanguage === websiteLanguages.ua && daysPassed.includes('днів')) {
      if (daysOfAggressionString.length === 1) {
        switch (daysOfAggressionString) {
          case '1':
            return daysPassed.replace('днів', 'день');
          case '2':
          case '3':
          case '4':
            return daysPassed.replace('днів', 'дні');
          default:
            return daysPassed;
        }
      }

      const twoDigits = daysOfAggressionString.substring(daysOfAggressionString.length - 2);
      const grammaticalCase1 = ['01', '21', '31', '41', '51', '61', '71', '81', '91'];
      const grammaticalCase2 = ['02', '03', '04', '22', '23', '24', '32', '33', '34', '42', '43', '44', '52', '53',
        '54', '62', '63', '64', '72', '73', '74', '82', '83', '84', '92', '93', '94'];

      if (grammaticalCase1.includes(twoDigits)) {
        return daysPassed.replace('днів', 'день');
      }
      if (grammaticalCase2.includes(twoDigits)) {
        return daysPassed.replace('днів', 'дні');
      }
      return daysPassed;
    }

    return daysPassed;
  }

  return (
    <ul className="dateList">
      <li className="dateList__item dateList__item--start">
        <p className="dateList__important-text">{getFullDate(START_WAR_DATE, language)}</p>
        <p className="dateList__caption">{start}</p>
      </li>
      <li className="dateList__item dateList__item--days">
        <p className="dateList__important-text--bigger">{daysOfAggression}</p>
        <p className="dateList__caption">{getAdaptedSentenceIfLangIsUA()}</p>
      </li>
      <li className="dateList__item dateList__item--end">
        <p className="dateList__important-text">{getFullDate(endDateToDisplayOnWebsite, language)}</p>
        <p className="dateList__caption">{END_WAR_DATE ? endOfWar : today}</p>
      </li>
    </ul>
  );
}
