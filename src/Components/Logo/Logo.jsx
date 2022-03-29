import React from 'react';
import './Logo.scss';
import logo from '../../img/logo_CBA.svg';

export default function Logo() {
  return (
    <p className="logo__wrapper">
      <img
        className="logo__image"
        src={logo}
        alt="Logo of the Come Back Alive Fund"
        title="Logo of the Come Back Alive Fund"
      />
    </p>
  );
}
