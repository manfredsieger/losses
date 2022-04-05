import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import translation from '../../utils/translation';
import './DonateBottomButton.scss';
import heart from '../../img/icon_heart.svg';

export default function DonateBottomButton() {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);

  return (
    <button
      className="donate-bottom-button"
      type="button"
    >
      <img
        className="donate-bottom-button__icon"
        src={heart}
        alt="Heart icon"
      />
      <Link
        className="donate-bottom-button__link"
        to="/donate"
        aria-label="Link to donate section"
      >
        {translation[websiteLanguage].nav.donate}
      </Link>
    </button>
  );
}
