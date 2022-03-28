import React from 'react';
import './Header.scss';
import { useSelector } from 'react-redux';
import { getLastDataUpdateDate, getFullDate } from '../../../utils/helpers';
import losses from '../../../utils/losses';
import translation from '../../../utils/translation';

export default function Header() {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  const lastDataUpdateDate = getLastDataUpdateDate(losses);

  return (
    <div className="header">
      <h1 className="header__header">{translation[websiteLanguage].main.header.header}</h1>
      <p className="header__text header__update">
        {translation[websiteLanguage].main.header.updateDate}
        {' '}
        <span className="header__update-date">{getFullDate(new Date(lastDataUpdateDate), translation[websiteLanguage].main.header.language)}</span>
      </p>
      <p className="header__text header__source">Numbers provided by the General Staff of the AFU</p>
      <p className="header__text header__warning">{translation[websiteLanguage].main.header.warning}</p>
    </div>
  );
}
