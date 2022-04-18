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
const endDateToDisplayOnWebsite = endWarDate ?? new Date();
const millisecInADay = 86400000;

export default function Dates() {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  const daysOfAggression = Math.ceil((endDateToDisplayOnWebsite - startWarDate) / (millisecInADay));
  const {
    daysPassed, start, language, today, endOfWar,
  } = translation[websiteLanguage].main.dates;

  function getAdaptedSentenceIfLangIsUA() {
    const daysOfAggressionString = daysOfAggression.toString();

    if (websiteLanguage === languages.ua && daysPassed.includes('днів')) {
      switch (daysOfAggressionString.at(-1)) {
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
      <li className="dateList__item dateList__item--start">
        <p className="dateList__important-text">{getFullDate(startWarDate, language)}</p>
        <p className="dateList__caption">{start}</p>
      </li>
      <li className="dateList__item dateList__item--days">
        <p className="dateList__important-text--bigger">{daysOfAggression}</p>
        <p className="dateList__caption">{getAdaptedSentenceIfLangIsUA()}</p>
      </li>
      <li className="dateList__item dateList__item--end">
        <p className="dateList__important-text">{getFullDate(endDateToDisplayOnWebsite, language)}</p>
        <p className="dateList__caption">{endWarDate ? endOfWar : today}</p>
      </li>
    </ul>
  );
}
