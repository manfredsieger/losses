import React from 'react';
import { useSelector } from 'react-redux';
import './Logo.scss';
import '../../screenshotSCSS/screenshotLogo.scss';

export default function Logo() {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);

  return (
    <p className="logo__wrapper">
      <a href="https://www.comebackalive.in.ua/" target="_blank" rel="noreferrer noopener">
        <img
          className="logo__image"
          src={require(`../../img/logo_CBA_${websiteLanguage}.svg`)}
          alt="Logo of the Come Back Alive Fund"
          title="Logo of the Come Back Alive Fund"
        />
      </a>
    </p>
  );
}
