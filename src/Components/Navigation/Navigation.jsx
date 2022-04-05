import React from 'react';
import PropsTypes from 'prop-types';
import LangButton from './LangButton/LangButton';
import PageNavWrapper from './PageNavWrapper/PageNavWrapper';
import './Navigation.scss';

export default function Navigation({ isSliderMenuShown, setIsSliderMenuShown }) {
  return (
    <nav className={`navigation-wrapper ${isSliderMenuShown ? 'navigation-wrapper--opened' : ''}`}>
      <div className="navigation-wrapper__top-container">
        <LangButton />
        <button
          className="navigation-wrapper__close-btn"
          type="button"
          onClick={() => setIsSliderMenuShown(false)}
        >
          <span className="visually-hidden">Close navigation wrappers</span>
        </button>
      </div>
      <PageNavWrapper />
    </nav>
  );
}

Navigation.propTypes = {
  isSliderMenuShown: PropsTypes.bool.isRequired,
  setIsSliderMenuShown: PropsTypes.func.isRequired,
};
