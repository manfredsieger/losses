import React from 'react';
import PropsTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Tooltip from './Tooltip/Tooltip';
// css
import './Losses.scss';
import '../../../screenshotSCSS/screenshotLosses.scss';
import '../../../screenshotSCSS/screenshotCommon.scss';
// utils
import translation from '../../../utils/translation';
import { getImage, getLatestLossesObject } from '../../../utils/helpers';
import lossesToAvoid from '../../../utils/lossesToAvoid';

export default function Losses({ losses }) {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);

  function getDayBeforeLossesObject() {
    return losses[1];
  }

  function getLossesNumberDifference(todayNumber, lossesType) {
    const prevDayLosses = getDayBeforeLossesObject();
    const difference = todayNumber - (prevDayLosses[lossesType] ?? 0);
    if (difference === 0) {
      return null;
    }
    return <span className="losses__text-number-difference">{`+${difference}`}</span>;
  }

  function renderLossesItems(objectToRender) {
    return Object.entries(objectToRender).map((item) => {
      const itemName = item[0];

      if (lossesToAvoid.includes(itemName)) {
        return null;
      }

      const itemNumber = item[1];
      const itemTranslation = translation[websiteLanguage].main.losses[itemName].name;
      const itemDescription = translation[websiteLanguage].main.losses[itemName].descr;

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
              {getLossesNumberDifference(itemNumber, itemName)}
            </p>
            <p className="losses__text-caption">
              {itemTranslation}
              {itemDescription ? <Tooltip itemDescription={itemDescription} /> : null}
            </p>
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
