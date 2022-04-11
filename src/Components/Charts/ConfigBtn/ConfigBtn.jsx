import React from 'react';
import './ConfigBtn.scss';
import PropsTypes from 'prop-types';
import { getImage, getWordWithBigFirstLetter } from '../../../utils/helpers';

export default function ConfigBtn({
  itemName,
  lossesToDisplay,
  setLossesToDisplay,
  itemTranslation,
  selectedChartMode,
  chartModes,
}) {
  function addItemMultipleMode(item) {
    if (!lossesToDisplay.includes(item)) {
      return setLossesToDisplay([...lossesToDisplay, item]);
    }
    const copyArr = [...lossesToDisplay];
    copyArr.splice(copyArr.indexOf(item), 1);
    return setLossesToDisplay(copyArr);
  }

  function handleClick(evt) {
    const item = evt.currentTarget.getAttribute('data-name');

    switch (selectedChartMode) {
      case chartModes.showOne:
        setLossesToDisplay([item]);
        return;
      case chartModes.multiple:
      default:
        addItemMultipleMode(item);
    }
  }

  return (
    <li
      key={itemName}
      data-name={itemName}
      className="configBtn__config-item"
      onClick={handleClick}
    >
      <button
        className={`configBtn__config-wrapper ${lossesToDisplay.indexOf(itemName) >= 0 ? 'configBtn__config-wrapper--selected' : ''}`}
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

ConfigBtn.propTypes = {
  itemName: PropsTypes.string.isRequired,
  lossesToDisplay: PropsTypes.arrayOf(PropsTypes.string).isRequired,
  setLossesToDisplay: PropsTypes.func.isRequired,
  itemTranslation: PropsTypes.string.isRequired,
  selectedChartMode: PropsTypes.string.isRequired,
  chartModes: PropsTypes.shape({
    multiple: PropsTypes.string.isRequired,
    showOne: PropsTypes.string.isRequired,
  }).isRequired,
};
