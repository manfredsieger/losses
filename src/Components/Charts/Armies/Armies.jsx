import React, { useEffect, useRef, useState } from 'react';
import PropsTypes from 'prop-types';
import './Armies.scss';
import armies from '../../../utils/armies';

export default function Armies({ personnelLosses }) {
  const lossesRu = useRef();
  const armiesList = useRef();
  const [russiaIndexInArray, setRussiaIndexInArray] = useState(0);

  function mapThroughArmies(losses, isIndexToBeSet) {
    armies.forEach((army, index) => {
      if (losses && army.name === 'Losses of russia') {
        army.activeArmedForces = personnelLosses;
      }

      if (isIndexToBeSet && army.name === 'Losses of russia') {
        setRussiaIndexInArray(index);
      }
    });
  }

  function centerOccupier() {
    mapThroughArmies(null, true);
    armiesList.current.scrollTo({
      top: russiaIndexInArray * 30 - 3 * 30,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    if (personnelLosses) {
      mapThroughArmies(personnelLosses, true);
      armies.sort((a, b) => b.activeArmedForces - a.activeArmedForces);
    }
  }, [personnelLosses]);

  useEffect(centerOccupier);

  return (
    <article className="armies__article">
      <h2>Losses of the russian army compared to the number of active personnel in the countries around the world</h2>
      <button
        className="armies__center"
        type="button"
        onClick={centerOccupier}
      >
        Center
      </button>
      <ul className="armies__list" ref={armiesList}>
        {
          armies
            .sort((a, b) => b.activeArmedForces - a.activeArmedForces)
            .map((army) => (
              <li
                className={`armies__army ${army.name === 'Losses of russia' ? 'armies__army-losses-of-ru' : ''}`}
                key={army.name}
                ref={army.name === 'Losses of russia' ? lossesRu : null}
              >
                <span>{army.name}</span>
                <span>
                  {typeof army.activeArmedForces === 'number' && !Number.isNaN(army.activeArmedForces)
                    ? army.activeArmedForces.toLocaleString('en-US')
                    : 0}
                </span>
              </li>
            ))
        }
      </ul>
    </article>
  );
}

Armies.propTypes = {
  personnelLosses: PropsTypes.number,
};

Armies.defaultProps = {
  personnelLosses: undefined,
};
