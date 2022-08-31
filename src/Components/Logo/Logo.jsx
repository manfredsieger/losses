import React from 'react';
import { useSelector } from 'react-redux';
import './Logo.scss';
import '../../screenshotSCSS/screenshotLogo.scss';
import '../../screenshotSCSS/screenshotCommon.scss';

export default function Logo() {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);

  return (
    <p className="logo__wrapper">
      <a className="logo__link" href="https://savelife.in.ua/" target="_blank" rel="noreferrer noopener">
        <img
          className="logo__image"
          src={require(`../../img/logo_CBA_${websiteLanguage}.svg`)}
          alt="Logo of the Come Back Alive Foundation"
          title="Logo of the Come Back Alive Foundation"
        />
      </a>
    </p>
  );
}
