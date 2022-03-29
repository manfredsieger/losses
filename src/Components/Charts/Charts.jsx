import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import PageNav from '../MainPage/PageNav/PageNav';
import ConfigBtn from './ConfigBtn/ConfigBtn';
import RotateWarning from './RotateWarning/RotateWarning';
import LangButton from '../LangButton/LangButton';
import './Charts.scss';
import losses from '../../utils/losses';
import { getLatestLossesObject } from '../../utils/helpers';
import translation from '../../utils/translation';
import { setActivePage, pages } from '../../redux/activePage';
import {
  options, getLabels, getDatasets,
} from '../../utils/chartsConfig';

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

  const data = {
    labels: getLabels(),
    datasets: getDatasets(lossesToDisplay, websiteLanguage),
  };

  function renderConfigBtns() {
    return Object.entries(latestLossesObject).map((item) => {
      const itemName = item[0]; const
        itemTranslation = translation[websiteLanguage].main.losses[itemName];

      return (
        <ConfigBtn
          itemName={itemName}
          lossesToDisplay={lossesToDisplay}
          setLossesToDisplay={setLossesToDisplay}
          itemTranslation={itemTranslation}
        />
      );
    });
  }

  return (
    <article className="charts__page-container">
      <h1 className="charts__header">{translation[websiteLanguage].charts.header}</h1>

      <div className="charts__page-nav-wrapper navigation-wrapper">
        <LangButton />
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
