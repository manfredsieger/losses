import React from 'react';
import './Losses.scss';
import '../../../screenshotSCSS/screenshotLosses.scss';
import '../../../screenshotSCSS/screenshotCommon.scss';
import { useSelector } from 'react-redux';
import losses from '../../../utils/losses';
import translation from '../../../utils/translation';
import { getLastDataUpdateDate, getPreviousDataUpdateDate, getImage } from '../../../utils/helpers';

export default function Losses() {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);

  function getLatestLossesObject() {
    return losses[getLastDataUpdateDate(losses)];
  }

  function getDayBeforeLossesObject() {
    return losses[getPreviousDataUpdateDate(losses)];
  }

  function getLossesNumberDifference(todayNumber, lossesType) {
    const prevDayLosses = getDayBeforeLossesObject();
    const difference = todayNumber - (prevDayLosses[lossesType] ?? 0);
    return `+${difference}`;
  }

  function renderLossesItems(objectToRender) {
    return Object.entries(objectToRender).map((item) => {
      const itemName = item[0]; const itemNumber = item[1]; const
        itemTranslation = translation[websiteLanguage].main.losses[itemName];
      return (
        <li key={itemName} className="losses__item">
          <div className={`losses__img-container ${itemName === 'personnel' ? 'losses__img-container--thin' : ''}`}>
            <img
              className={`losses__img ${itemName === 'personnel' ? 'losses__img--thin' : ''}`}
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
            <p className="losses__text-caption">{itemTranslation}</p>
          </div>
        </li>
      );
    });
  }

  return (
    <ul className="losses">
      {renderLossesItems(getLatestLossesObject())}
    </ul>
  );
}
