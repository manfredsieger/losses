import React, { useEffect, useRef, useState } from 'react';
import PropsTypes from 'prop-types';
import './Armies.scss';
import armies from '../../../utils/armies2';

const scull = (
  <svg viewBox="0 0 64 64" width="20" xmlns="http://www.w3.org/2000/svg">
    <style type="text/css" />
    <path d="M32,4C16.561,4,4,16.561,4,32s12.561,28,28,28s28-12.561,28-28S47.439,4,32,4z M32,58C17.664,58,6,46.336,6,32  S17.664,6,32,6s26,11.664,26,26S46.336,58,32,58z" />
    <path d="M32,39c-1.126,0-11,0.14-11,5h2c0-2.042,5.371-2.998,9-3c3.63,0.002,9,0.958,9,3h2C43,39.14,33.126,39,32,39z" />
    <polygon points="25.293,28.707 26.707,27.293 23.914,24.5 26.707,21.707 25.293,20.293 22.5,23.086 19.707,20.293 18.293,21.707   21.086,24.5 18.293,27.293 19.707,28.707 22.5,25.914 " />
    <polygon points="44.293,20.293 41.5,23.086 38.707,20.293 37.293,21.707 40.086,24.5 37.293,27.293 38.707,28.707 41.5,25.914   44.293,28.707 45.707,27.293 42.914,24.5 45.707,21.707 " />
  </svg>
);

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
    const height = lossesRu.current.offsetHeight;
    armiesList.current.scrollTo({
      top: russiaIndexInArray * height - 3 * height,
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
                <div className="armies__img-wrapper">
                  {
                    army.name === 'Losses of russia'
                      ? scull
                      : (
                        <img
                          src={`https://flagcdn.com/${army.code}.svg`}
                          width="20"
                          alt={`Flag of ${army.name}`}
                        />
                      )
                  }
                </div>
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
