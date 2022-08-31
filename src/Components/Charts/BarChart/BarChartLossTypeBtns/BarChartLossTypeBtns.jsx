import React from 'react';
import './BarChartLossTypeBtns.scss';
import PropsTypes from 'prop-types';
import { getImage, getWordWithBigFirstLetter } from '../../../../utils/helpers';

export default function BarChartLossTypeBtns({
  itemName,
  lossesToDisplay,
  setLossesToDisplay,
  itemTranslation,
}) {
  function handleClick(evt) {
    const item = evt.currentTarget.getAttribute('data-name');
    setLossesToDisplay([item]);
  }

  return (
    <li
      key={itemName}
      className="configBtn__config-item"
    >
      <button
        className={`configBtn__config-wrapper ${lossesToDisplay.indexOf(itemName) >= 0 ? 'configBtn__config-wrapper--selected' : ''}`}
        data-name={itemName}
        onClick={handleClick}
        type="button"
      >
        <img
          className={`configBtn__config-itemImg configBtn__config-itemImg--${itemName}`}
          src={getImage(itemName)}
          alt={`${itemTranslation}-icon`}
          title={itemTranslation}
        />
        <span className="configBtn__config-text">{getWordWithBigFirstLetter(itemTranslation)}</span>
      </button>
    </li>
  );
}

BarChartLossTypeBtns.propTypes = {
  itemName: PropsTypes.string.isRequired,
  lossesToDisplay: PropsTypes.arrayOf(PropsTypes.string).isRequired,
  setLossesToDisplay: PropsTypes.func.isRequired,
  itemTranslation: PropsTypes.string.isRequired,
};
