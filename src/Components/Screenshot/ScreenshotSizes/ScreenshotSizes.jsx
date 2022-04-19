import React from 'react';
import PropsTypes from 'prop-types';
import './ScreenshotSizes.scss';

export default function ScreenshotSizes({
  name, iconName, width, height, selectedSizeName, setSelectedSizeName, setSelectedSize,
}) {
  function saveSelectedData() {
    setSelectedSizeName(name);
    setSelectedSize({
      width,
      height,
    });
  }

  return (
    <button
      className={`screenshot-sizes__container ${selectedSizeName === name ? 'screenshot-sizes__container--selected' : ''}`}
      type="button"
      onClick={saveSelectedData}
    >
      <img className="screenshot-sizes__img" src={require(`../../../img/${iconName}`)} alt={`${iconName}-icon`} />
      <span className="screesnshot-sizes__media-name">{name}</span>
      <span className="screesnshot-sizes__size">{`${width}*${height}`}</span>
    </button>
  );
}

ScreenshotSizes.propTypes = {
  name: PropsTypes.string.isRequired,
  iconName: PropsTypes.string.isRequired,
  width: PropsTypes.number.isRequired,
  height: PropsTypes.number.isRequired,
  selectedSizeName: PropsTypes.string.isRequired,
  setSelectedSizeName: PropsTypes.func.isRequired,
  setSelectedSize: PropsTypes.func.isRequired,
};
