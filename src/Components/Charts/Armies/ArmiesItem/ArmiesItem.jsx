import React from 'react';
import PropTypes from 'prop-types';
import './ArmiesItem.scss';
import { useSelector } from 'react-redux';
import translation from '../../../../utils/translation';

export default function ArmiesItem({ skullImg, lossesRu, army }) {
  const { websiteLanguage } = useSelector((store) => store.websiteLanguage);
  const { chartCompareArmies } = translation[websiteLanguage].charts;

  return (
    <li
      className={`armiesItem__army ${army.name === 'Losses of russia' ? 'armiesItem__army-losses-of-ru' : ''}`}
      key={army.name}
      ref={army.name === 'Losses of russia' ? lossesRu : null}
    >
      <div
        className={`armiesItem__img-wrapper ${army.name === 'Losses of russia' ? 'armiesItem__img-wrapper-ru' : ''}`}
      >
        {
          army.name === 'Losses of russia'
            ? skullImg
            : (
              <img
                className="armiesItem__img"
                src={`https://flagcdn.com/${army.code}.svg`}
                width="47"
                alt={`Flag of ${army.name}`}
              />
            )
        }
      </div>
      <span className="armiesItem__army-name-wrapper">
        <span>{army.name === 'Losses of russia' ? chartCompareArmies.ruLosses : army.name}</span>
      </span>
      <span className="armiesItem__dots" />
      <span className="armiesItem__army-number">
        {typeof army.activeArmedForces === 'number' && !Number.isNaN(army.activeArmedForces)
          ? army.activeArmedForces.toLocaleString('de-CH')
          : 0}
      </span>
    </li>
  );
}

ArmiesItem.propTypes = {
  skullImg: PropTypes.element.isRequired,
  lossesRu: PropTypes.shape({
    current: PropTypes.shape({}),
  }).isRequired,
  army: PropTypes.shape({
    name: PropTypes.string.isRequired,
    activeArmedForces: PropTypes.number.isRequired,
    region: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  }).isRequired,
};
