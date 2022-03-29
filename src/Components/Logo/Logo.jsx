import React from 'react';
import { useSelector } from 'react-redux';
import './Logo.scss';

export default function Logo() {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);

  return (
    <p className="logo__wrapper">
      <img
        className="logo__image"
        src={require(`../../img/logo_CBA_${websiteLanguage}.svg`)}
        alt="Logo of the Come Back Alive Fund"
        title="Logo of the Come Back Alive Fund"
      />
    </p>
  );
}
