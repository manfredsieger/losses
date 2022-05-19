import React, { useEffect, useRef, useState } from 'react';
import PropsTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ArmiesItem from './ArmiesItem/ArmiesItem';
import './Armies.scss';
// utils
import armies from '../../../utils/armies';
import translation from '../../../utils/translation';

export default function Armies({ personnelLosses }) {
  const lossesRu = useRef();
  const armiesList = useRef();
  const { websiteLanguage } = useSelector((store) => store.websiteLanguage);
  const NUM_OF_SKULLS_TO_RENDER = 3;

  const [russiaIndexInArray, setRussiaIndexInArray] = useState(0);

  const { chartCompareArmies } = translation[websiteLanguage].charts;
  const skullImg = (
    <svg className="armies__skull-svg" xmlns="http://www.w3.org/2000/svg" width="50.0001" height="56.9" viewBox="0 0 50.0001 56.9">
      <g transform="matrix(1 0 0 -1 24.92 28.36)">
        <path transform=" translate(-25, -28.44)" d="M 18.60717 55.97625 C 13.46297 54.59125 9.43997 52.21705 6.14237 48.58965 C 1.7895699999999994 43.84115 0.008869999999999933 39.09265 0.008869999999999933 32.16775 C -0.05713000000000007 27.419249999999998 0.20676999999999993 26.298049999999996 2.1192699999999998 22.40695 C 4.22967 18.12015 4.22967 17.92225 3.4382699999999997 14.756549999999997 C 2.38307 10.667549999999997 2.7787699999999997 10.205949999999998 7.52727 9.744249999999997 C 14.188369999999999 9.084749999999998 14.056470000000001 9.216649999999998 14.056470000000001 5.457449999999997 C 14.056470000000001 2.291749999999997 14.122470000000002 2.093949999999997 16.49667 1.0387499999999967 C 19.728270000000002 -0.3462500000000033 29.818870000000004 -0.3462500000000033 33.51217 1.0387499999999967 C 36.08427 2.028049999999997 36.15027 2.093949999999997 36.15027 5.259649999999997 L 36.15027 8.491249999999997 L 41.36047 9.282649999999997 C 44.19637 9.744349999999997 46.834469999999996 10.337849999999996 47.16417 10.667649999999997 C 47.55987 11.063349999999996 47.362069999999996 12.250449999999997 46.76847 13.767349999999997 C 45.31757 17.196849999999998 45.38347 17.92225 47.82367 23.066449999999996 C 49.67027 26.957549999999998 50.00007 28.342549999999996 50.00007 32.563449999999996 C 50.00007 36.718349999999994 49.67027 38.169349999999994 47.88967 41.928549999999994 C 44.13047 49.908649999999994 38.458670000000005 54.45934999999999 30.01687 56.23994999999999 C 25.664070000000002 57.16324999999999 22.49837 57.09734999999999 18.60727 55.97614999999999 z M 37.07357 26.62795 C 44.59207 24.451549999999997 43.932469999999995 17.658549999999998 36.15027 17.79045 C 32.25917 17.79045 29.555169999999997 19.17545 28.43397 21.74755 C 27.44467 23.92395 28.302069999999997 25.374850000000002 31.269869999999997 26.43005 C 34.10577 27.41935 34.369569999999996 27.41935 37.07357 26.627950000000002 z M 19.86027 25.30885 C 21.50907 24.31955 21.97067 23.52815 21.97067 22.01125 C 21.97067 20.23055 21.574969999999997 19.76895 19.20067 18.71365 C 15.837169999999999 17.19675 12.67147 17.06485 10.16537 18.383850000000002 C 6.801869999999999 20.098550000000003 7.13157 23.00045 10.956769999999999 25.374650000000003 C 13.66077 26.95745 17.090269999999997 26.95745 19.860169999999997 25.308650000000004 z M 26.98307 15.74595 C 29.02757 10.79955 27.24687 7.83175 23.22387 9.480550000000001 C 21.04747 10.40385 21.113470000000003 10.27195 22.03677 13.76735 C 23.35577 18.647750000000002 25.40027 19.50515 26.98317 15.74585 z" />
      </g>
    </svg>
  );

  /**
   * Sets the actual number of russia's losses as a value of
   * 'activeArmedForces' key of the 'Losses of russia' object
   * in the array with numbers of active servicemen in all
   * countries around the world. This is needed for the
   * losses to be compared with these numbers and displayed.
   * @param setRuPersonnelLosses {boolean} defines whether the
   * function has to set the number of russia's losses based on
   * the daily reports or not.
   * @param isIndexToBeSet {boolean} defines whether the function shall
   * set the index of russia's losses in the armies array or not.
   * This index is used for center-button to know how far shall
   * it scroll to center russia losses in the list with all armies.
   */
  function insertRuLossesIntoArmiesArray(setRuPersonnelLosses, isIndexToBeSet) {
    armies.forEach((army, index) => {
      if (setRuPersonnelLosses && army.name === 'Losses of russia') {
        army.activeArmedForces = personnelLosses;
      }

      if (isIndexToBeSet && army.name === 'Losses of russia') {
        setRussiaIndexInArray(index);
      }
    });
  }

  /**
   * Each army item in the list is a flex-container which consists of country
   * flag, name, dots and number of the country's active servicemen. Some
   * countries' names consist of multiple words. These names can be rendered
   * differently on different screen sizes. But a flex-item inside a flex-container
   * has a strange behaviour regarding flex-items with multiline text (when a
   * country name consists of multiple words). Namely, the flex item has the
   * width as if all its words are still rendered as one line, although in fact
   * they are rendered using multiple lines and their de-facto width is smaller
   * than the flex-item thinks it is. This is the problem since long countries'
   * names are wrapped, the flex-item doesn't know that and renders all its words
   * + empty space and this empty space makes the flex container render dots
   * (dots are rendered in the middle of a country name and number of its servicemen)
   * with a very small width. The idea is to remove all empty space and make the
   * flex item with a country name inside it to have the same width as the text
   * inside it has.
   */
  function adjustCountryNameFlexItemWidth() {
    [...document.querySelectorAll('.armies__army-name-wrapper')].forEach((elem) => {
      if (elem.offsetWidth > elem.querySelector('span').offsetWidth) {
        elem.style.width = `${elem.querySelector('span').offsetWidth}px`;
      }
    });
  }

  /**
   * Centers the list item with russia's losses.
   */
  function centerOccupier() {
    insertRuLossesIntoArmiesArray(false, true);
    const height = lossesRu.current.offsetHeight;
    armiesList.current.scrollTo({
      top: russiaIndexInArray * height - 3 * height,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    if (personnelLosses) {
      insertRuLossesIntoArmiesArray(personnelLosses, true);
      armies.sort((a, b) => b.activeArmedForces - a.activeArmedForces);
    }
  }, [personnelLosses]);

  useEffect(() => {
    centerOccupier();
    adjustCountryNameFlexItemWidth();
  });

  return (
    <article className="armies__article">
      <h2 className="armies__header standardHeader">{chartCompareArmies.header}</h2>

      <ul className="armies__skulls">
        {
          [...Array(NUM_OF_SKULLS_TO_RENDER)].map(() => (
            <li className="armies__skull-wrapper" key={Math.random()}>
              {skullImg}
            </li>
          ))
        }
      </ul>

      <p className="armies__subheader">{chartCompareArmies.subHeader}</p>

      <p className="armies__source">
        {`${chartCompareArmies.data} `}
        <a
          className="standardLink"
          href={chartCompareArmies.link}
          target="_blank"
          rel="noreferrer"
        >
          {chartCompareArmies.dataProvided}
        </a>
      </p>

      <button
        className="armies__center-btn"
        type="button"
        onClick={centerOccupier}
      >
        {chartCompareArmies.centerBtn}
      </button>

      <ul className="armies__list" ref={armiesList}>
        {
          armies
            .sort((a, b) => b.activeArmedForces - a.activeArmedForces)
            .map((army) => (
              <ArmiesItem
                army={army}
                skullImg={skullImg}
                lossesRu={lossesRu}
                key={army.code}
              />
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
