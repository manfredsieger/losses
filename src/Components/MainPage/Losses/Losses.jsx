import React from 'react';
import PropsTypes from 'prop-types';
import { useSelector } from 'react-redux';
// css
import './Losses.scss';
import '../../../screenshotSCSS/screenshotLosses.scss';
import '../../../screenshotSCSS/screenshotCommon.scss';
// utils
import translation from '../../../utils/translation';
import { getImage, getWordWithBigFirstLetter, getLatestLossesObject } from '../../../utils/helpers';

export default function Losses({ losses }) {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);

  function getDayBeforeLossesObject() {
    return losses[1];
  }

  function getLossesNumberDifference(todayNumber, lossesType) {
    const prevDayLosses = getDayBeforeLossesObject();
    const difference = todayNumber - (prevDayLosses[lossesType] ?? 0);
    return `+${difference}`;
  }

  function renderLossesItems(objectToRender) {
    return Object.entries(objectToRender).map((item) => {
      const itemName = item[0];
      const itemNumber = item[1];
      const itemTranslation = translation[websiteLanguage].main.losses[itemName];

      return (
        <li key={itemName} className="losses__item">
          <div className={`losses__img-container ${itemName === 'personnel' ? 'losses__img-container--thin' : ''}`}>
            <img
              className={`losses__img losses_img--${itemName} ${itemName === 'personnel' ? 'losses__img--thin' : ''}`}
              src={getImage(itemName)}
              alt={`${itemTranslation}-icon`}
              title={itemTranslation}
            />
          </div>
          <div className={`losses__text-container ${itemName === 'personnel' ? 'losses__text-container--wide' : ''}`}>
            <p className="losses__text-number-container">
              <span className="losses__text-number">{`${itemName === 'personnel' ? '~' : ''}${itemNumber.toLocaleString(websiteLanguage)}`}</span>
              <span className="losses__text-number-difference">{getLossesNumberDifference(itemNumber, itemName)}</span>
            </p>
            <p className="losses__text-caption">{getWordWithBigFirstLetter(itemTranslation)}</p>
          </div>
        </li>
      );
    });
  }

  return (
    <ul className="losses">
      {losses.length > 0 ? renderLossesItems(getLatestLossesObject(losses)) : null}
    </ul>
  );
}

Losses.propTypes = {
  losses: PropsTypes.arrayOf(PropsTypes.shape({
    date: PropsTypes.string,
    personnel: PropsTypes.number,
    aircrafts: PropsTypes.number,
    helicopters: PropsTypes.number,
    armoredVehicles: PropsTypes.number,
    vehicles: PropsTypes.number,
    tanks: PropsTypes.number,
    artillery: PropsTypes.number,
    mlrs: PropsTypes.number,
    cisterns: PropsTypes.number,
    antiAir: PropsTypes.number,
    uav: PropsTypes.number,
    vessels: PropsTypes.number,
    specialVehicle: PropsTypes.number,
    srmb: PropsTypes.number,
  })),
};

Losses.defaultProps = {
  losses: {},
};
