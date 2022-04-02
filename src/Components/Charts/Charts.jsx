import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import ConfigBtn from './ConfigBtn/ConfigBtn';
import RotateWarning from './RotateWarning/RotateWarning';
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
  const [lossesToDisplay, setLossesToDisplay] = useState(['aircrafts', 'helicopters']);

  const dispatch = useDispatch();
  useEffect(() => dispatch(setActivePage(pages.charts.name)));

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
    <main className="charts__page-container page-container">
      <h1 className="charts__header standardHeader">{translation[websiteLanguage].charts.header}</h1>
      <article className="charts__grid-container">
        <h2 className="visually-hidden">Charts and buttons allowing to customize charts output</h2>

        <section className="charts__canvas-wrapper">
          <h3 className="visually-hidden">Chart displaying russian invaders` losses in Ukraine</h3>
          {
            hasUserSmallLandscapeScreen
              ? <RotateWarning />
              : <Line className="charts__canvas" options={options} data={data} />
          }
        </section>

        <ul className="charts__config">
          {renderConfigBtns()}
        </ul>
      </article>

    </main>
  );
}
