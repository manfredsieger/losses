import React from 'react';
import './Dates.scss';
import '../../../screenshotSCSS/screenshotDates.scss';
import '../../../screenshotSCSS/screenshotCommon.scss';
import { useSelector } from 'react-redux';
import { getFullDate } from '../../../utils/helpers';
import translation from '../../../utils/translation';
import { languages } from '../../../redux/changeLang';

const startWarDate = new Date('2022-02-24');
// Fill this date out when Ukraine wins the war
const endWarDate = null;
/** The date that shall be deemed as end date to count the number of days of war.
  Either the real end date of the war or the current date (today) */
const endDateToCountOnWebsite = endWarDate ?? new Date();
const millisecInADay = 86400000;

export default function Dates() {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  const daysOfAggression = Math.ceil((endDateToCountOnWebsite - startWarDate) / (millisecInADay));
  const {
    daysPassed, start, language, today, endOfWar,
  } = translation[websiteLanguage].main.dates;

  function getAdaptedSentenceIfLangIsUA() {
    const daysOfAggressionString = daysOfAggression.toString();

    if (websiteLanguage === languages.ua && daysPassed.includes('днів')) {
      switch (daysOfAggressionString[daysOfAggressionString.length - 1]) {
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
    return daysPassed;
  }

  return (
    <ul className="dateList">
      <li className="dateList__item">
        <p className="dateList__first-item dateList__caption">{start}</p>
        <p className="dateList__second-item dateList__important-text">{getFullDate(startWarDate, language)}</p>
      </li>
      <li className="dateList__item">
        <p className="dateList__first-item dateList__important-text">{daysOfAggression}</p>
        <p className="dateList__second-item dateList__caption">{getAdaptedSentenceIfLangIsUA()}</p>
      </li>
      <li className="dateList__item">
        <p className="dateList__first-item dateList__caption">{endWarDate ? endOfWar : today}</p>
        <p className="dateList__second-item dateList__important-text">{getFullDate(endDateToCountOnWebsite, language)}</p>
      </li>
    </ul>
  );
}
