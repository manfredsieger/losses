import React from 'react';
import './Header.scss';
import { useSelector } from 'react-redux';
import { getLastDataUpdateDate, getFullDate } from '../../../utils/helpers';
import losses from '../../../utils/losses';
import translation from '../../../utils/translation';

export default function Header() {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  const lastDataUpdateDate = getLastDataUpdateDate(losses);
  const {
    header, updateDate, warning, language, numbersProvided, genStaff,
  } = translation[websiteLanguage].main.header;

  return (
    <div className="header">
      <h1 className="header__header">{header}</h1>
      <p className="header__text header__update">
        {`${updateDate} `}
        <span className="header__update-date">{getFullDate(new Date(lastDataUpdateDate), language)}</span>
      </p>
      <p className="header__text header__source">
        {numbersProvided}
        <a className="header__source-link standardLink" href="https://twitter.com/GeneralStaffUA" target="_blank" rel="noreferrer noopener">{genStaff}</a>
      </p>
      <p className="header__text header__warning">{warning}</p>
    </div>
  );
}
