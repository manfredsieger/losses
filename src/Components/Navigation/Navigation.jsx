import React from 'react';
import PropsTypes from 'prop-types';
import LangButton from './LangButton/LangButton';
import PageNavWrapper from './PageNavWrapper/PageNavWrapper';
import './Navigation.scss';

export default function Navigation({ isSliderMenuShown, setIsSliderMenuShown, refComponent }) {
  return (
    <nav
      className={`navigation-wrapper ${isSliderMenuShown ? 'navigation-wrapper--opened' : ''}`}
      ref={refComponent}
    >
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
      <PageNavWrapper setIsSliderMenuShown={setIsSliderMenuShown} />
    </nav>
  );
}

Navigation.propTypes = {
  isSliderMenuShown: PropsTypes.bool.isRequired,
  setIsSliderMenuShown: PropsTypes.func.isRequired,
  refComponent: PropsTypes.instanceOf(Object).isRequired,
};
