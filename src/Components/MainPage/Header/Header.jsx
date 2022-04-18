import React from 'react';
import './Header.scss';
import '../../../screenshotSCSS/screenshotHeader.scss';
import '../../../screenshotSCSS/screenshotCommon.scss';
import { useSelector } from 'react-redux';
import { getPastDataUpdateDate, getFullDate } from '../../../utils/helpers';
import losses from '../../../utils/losses';
import translation from '../../../utils/translation';

export default function Header() {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  const lastDataUpdateDate = getPastDataUpdateDate(losses, -1);
  const {
    header, updateDate, warning, language, numbersProvided, genStaff,
  } = translation[websiteLanguage].main.header;

  // Kept svg code right in the file in order to change the color of the svg directly
  return (
    <header className="header">
      <h1 className="header__header standardHeader">{header}</h1>
      <p className="header__text header__update">
        {`${updateDate} `}
        <span className="header__update-date">{getFullDate(new Date(lastDataUpdateDate), language)}</span>
      </p>
      <p className="header__text header__source">
        {numbersProvided}
        <a className="header__source-link standardLink" href="https://twitter.com/GeneralStaffUA" target="_blank" rel="noreferrer noopener">{genStaff}</a>
        <svg className="header__twitter-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 310 310">
          <path d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73
            c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783
            c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598
            C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467
            c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977
            c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889
            c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597
            c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961
            c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895
            c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367
            c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998
            C307.394,57.037,305.009,56.486,302.973,57.388z"
          />
        </svg>
      </p>
      <p className="header__text header__warning">{warning}</p>
    </header>
  );
}
