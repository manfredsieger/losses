import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import translation from '../../utils/translation';
import './DonateBottomButton.scss';
import heart from '../../img/icon_heart.svg';

export default function DonateBottomButton() {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);

  return (
    <Link
      to="/donate"
      className="donate-bottom-button"
      aria-label="Link to donate section"
    >
      <img
        className="donate-bottom-button__icon"
        src={heart}
        alt="Heart icon"
      />
      <span className="donate-bottom-button__text">{translation[websiteLanguage].nav.donate}</span>
    </Link>
  );
}
