import React from 'react';
import PropsTypes from 'prop-types';
import './BurgerButton.scss';

export default function BurgerButton({ setIsSliderMenuShown }) {
  return (
    <button
      className="burger__button"
      type="button"
      onClick={() => setIsSliderMenuShown(true)}
    >
      <span className="visually-hidden">Show navigation menu</span>
    </button>
  );
}

BurgerButton.propTypes = {
  setIsSliderMenuShown: PropsTypes.func.isRequired,
};
