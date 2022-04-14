import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import ConfigBtn from './ConfigBtn/ConfigBtn';
import RotateWarning from './RotateWarning/RotateWarning';
import ChartModeButton from './ChartModeButton/ChartModeButton';
import './Charts.scss';
import losses from '../../utils/losses';
import { getLatestLossesObject } from '../../utils/helpers';
import translation from '../../utils/translation';
import { setActivePage, pages } from '../../redux/activePage';
import {
  options, getLabels, getDatasets,
} from '../../utils/chartsConfig';

/*
  TODO: write explanation for the 290 number
*/
const SMALL_LANDSCAPE_SCREEN = 290;
/*
  The chart`s width and height maintains aspect ratio automatically.
  But when one has a device with small screen width the chart gets too small.
  That is why the chart shall be handled differently before and after user`s
  screen is 800px wide.
  One came up with the number 800 by testing.
*/
const CHART_TO_GROW_SCREEN_WIDTH = 800;
const latestLossesObject = getLatestLossesObject(losses);

export default function Charts() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(setActivePage(pages.charts.name)), []);

  const { websiteLanguage } = useSelector((store) => store.websiteLanguage);
  const [hasUserSmallScreen, setUserScreenValidity] = useState(false);

  const chartModes = {
    multiple: 'multiple',
    showOne: 'showOne',
  };
  const [selectedChartMode, setSelectedChartMode] = useState(chartModes.multiple);

  function hasUserValidScreenSize() {
    if (window.innerWidth < SMALL_LANDSCAPE_SCREEN) {
      return setUserScreenValidity(true);
    }
    return setUserScreenValidity(false);
  }

  useEffect(() => {
    hasUserValidScreenSize();
    window.addEventListener('resize', hasUserValidScreenSize);

    return () => {
      window.removeEventListener('resize', hasUserValidScreenSize);
    };
  }, []);

  const [lossesToDisplay, setLossesToDisplay] = useState(['aircrafts', 'helicopters', 'uav']);

  useEffect(() => {
    if (selectedChartMode === chartModes.showOne) {
      const copyArr = [...lossesToDisplay].splice(0, 1);
      setLossesToDisplay(copyArr);
    }
  }, [selectedChartMode]);

  const data = {
    labels: getLabels(),
    datasets: getDatasets(lossesToDisplay, websiteLanguage),
  };

  // FIXME: rewrite the function so that it returns a component
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
          selectedChartMode={selectedChartMode}
          chartModes={chartModes}
        />
      );
    });
  }

  return (
    <main className="charts__page-container page-container">
      <h1 className="charts__header standardHeader">{translation[websiteLanguage].charts.header}</h1>
      <article className="charts__container">
        <h2 className="visually-hidden">Charts and buttons allowing to customize charts output</h2>

        <section className="charts__canvas-wrapper">
          <h3 className="visually-hidden">Chart displaying russian invaders` losses in Ukraine</h3>
          {
            hasUserSmallScreen
              ? <RotateWarning />
              : (
                <Line
                  className="charts__canvas"
                  options={window.innerWidth <= CHART_TO_GROW_SCREEN_WIDTH
                    ? Object.assign(options, { maintainAspectRatio: false }) : options}
                  data={data}
                />
              )
          }
        </section>

        <ChartModeButton
          selectedChartMode={selectedChartMode}
          setSelectedChartMode={setSelectedChartMode}
          chartModes={chartModes}
        />

        <ul className="charts__config">
          {renderConfigBtns()}
        </ul>
      </article>

    </main>
  );
}
