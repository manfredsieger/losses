import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import PageNav from '../MainPage/PageNav/PageNav';
import RotateWarning from './RotateWarning/RotateWarning';
import './Charts.scss';
import losses from '../../utils/losses';
import { getLatestLossesObject, getWordWithBigFirstLetter } from '../../utils/helpers';
import translation from '../../utils/translation';
import { setActivePage, pages } from '../../redux/activePage';
import { colors, options } from '../../utils/chartsConfig';

const SMALL_LANDSCAPE_SCREEN = 290;
const latestLossesObject = getLatestLossesObject(losses);

export default function Charts() {
  const [hasUserSmallLandscapeScreen, setUserScreenValidity] = useState(false);
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < SMALL_LANDSCAPE_SCREEN) {
        return setUserScreenValidity(true);
      }
      return setUserScreenValidity(false);
    });
  });

  const { websiteLanguage } = useSelector((store) => store.websiteLanguage);
  const [lossesToDisplay, setLossesToDisplay] = useState(['personnel']);

  const dispatch = useDispatch();
  useEffect(() => dispatch(setActivePage(pages.charts)));

  function getLabels() {
    return Object.keys(losses).map((date) => {
      const dateObj = new Date(date);
      const month = dateObj.getMonth() + 1;
      if (month.toString().length === 1) {
        return `${dateObj.getDate()}.0${month}`;
      }
      return `${dateObj.getDate()}.${month}`;
    });
  }

  function getData(item) {
    return Object.keys(losses).map((date) => losses[date][item]);
  }

  function getDatasets(lossesTypes) {
    return lossesTypes.map((item, index) => ({
      label: getWordWithBigFirstLetter(translation[websiteLanguage].main.losses[item]),
      data: getData(item),
      borderColor: '#000000',
      borderWidth: 1,
      backgroundColor: colors[index],
      tension: 0.2,
      fill: false,
    }));
  }

  const data = {
    labels: getLabels(),
    datasets: getDatasets(lossesToDisplay),
  };

  function handleClick(evt) {
    const item = evt.currentTarget.getAttribute('data-name');
    if (!lossesToDisplay.includes(item)) {
      setLossesToDisplay([...lossesToDisplay, item]);
    } else {
      const copyArr = [...lossesToDisplay];
      copyArr.splice(copyArr.indexOf(item), 1);
      setLossesToDisplay(copyArr);
    }
  }

  function renderConfigBtns() {
    return Object.entries(latestLossesObject).map((item) => {
      const itemName = item[0]; const
        itemTranslation = translation[websiteLanguage].main.losses[itemName];

      return (
        <li
          key={itemName}
          data-name={itemName}
          className="charts__config-item"
          onClick={handleClick}
        >
          <button
            className={`charts__config-wrapper ${lossesToDisplay.indexOf(itemName) >= 0 ? 'charts__config-wrapper--selected' : ''}`}
            type="button"
          >
            <img
              className="charts__config-itemImg"
              src={require(`./../../img/${itemName}.svg`)}
              alt={`${itemTranslation}-icon`}
              title={itemTranslation}
            />
            <span className="charts__config-text">{itemTranslation}</span>
          </button>
        </li>
      );
    });
  }

  return (
    <article className="charts__page-container">
      <h1 className="charts__header">{translation[websiteLanguage].charts.header}</h1>

      <div className="charts__page-nav-wrapper">
        <PageNav
          className="pageNav pageNav__light"
          to="/"
          ariaLabel="Go back to the main page button"
          value={translation[websiteLanguage].charts.mainPageBtn}
        />
      </div>

      <div className="charts__grid-container">
        <ul className="charts__config">
          {renderConfigBtns()}
        </ul>

        <div className="charts__canvas-wrapper">
          {
            hasUserSmallLandscapeScreen
              ? <RotateWarning />
              : <Line className="charts__canvas" options={options} data={data} />
          }
        </div>
      </div>

    </article>
  );
}
