import React from 'react';
import './ConfigBtn.scss';
import PropsTypes from 'prop-types';
import { getImage } from '../../../utils/helpers';

export default function ConfigBtn({
  itemName, lossesToDisplay, setLossesToDisplay, itemTranslation, selectedChartMode, chartModes,
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
    console.log(selectedChartMode);

    switch (selectedChartMode) {
      case chartModes.showOne:
        setLossesToDisplay([item]);
        console.log(lossesToDisplay);
        return;
      case chartModes.multiple:
      default:
        addItemMultipleMode(item);
        console.log(lossesToDisplay);
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
          className="configBtn__config-itemImg"
          src={getImage(itemName)}
          alt={`${itemTranslation}-icon`}
          title={itemTranslation}
        />
        <span className="configBtn__config-text">{itemTranslation}</span>
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
