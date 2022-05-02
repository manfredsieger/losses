import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Line } from 'react-chartjs-2';
import PropsTypes from 'prop-types';
import Chart from 'chart.js/auto';
// components
import ConfigBtn from './ConfigBtn/ConfigBtn';
import RotateWarning from './RotateWarning/RotateWarning';
import ChartModeButton from './ChartModeButton/ChartModeButton';
import './Charts.scss';
// utils
import { getLatestLossesObject } from '../../utils/helpers';
import translation from '../../utils/translation';
import {
  options, getLabels, getDatasets, chartModes,
} from '../../utils/chartsConfig';
import lossesNames from '../../utils/lossesConfig';
// redux
import { setActivePage, pages } from '../../redux/activePage';

/*
  The chart is not suitable for to be rendered on small screens.
  If the screen is too small it won't be readable. That is why
  one has to introduce such variable and not to render the chart
  on way to small screens.
*/
const SMALL_LANDSCAPE_SCREEN = 300;
/*
  The chart's width and height maintains aspect ratio automatically.
  But when one has a device with small screen width the chart gets too small.
  That is why the chart shall be handled differently before and after user's
  screen is 800px wide.
  One came up with the number 800 by testing.
*/
const CHART_TO_GROW_SCREEN_WIDTH = 800;
const DEFAULT_ACTIVE_CONFIG_BTNS = [lossesNames.aircrafts.name, lossesNames.helicopters.name, lossesNames.uav.name];

export default function Charts({ losses }) {
  const latestLossesObject = getLatestLossesObject(losses);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActivePage(pages.charts.name));
    window.scrollTo(0, 0);
  }, []);

  const { websiteLanguage } = useSelector((store) => store.websiteLanguage);
  const [hasUserSmallScreen, setUserScreenValidity] = useState(false);
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

  const [lossesToDisplay, setLossesToDisplay] = useState(DEFAULT_ACTIVE_CONFIG_BTNS);

  useEffect(() => {
    if (selectedChartMode === chartModes.showOne) {
      const copyArr = [...lossesToDisplay].splice(0, 1);
      setLossesToDisplay(copyArr);
    }
  }, [selectedChartMode]);

  const data = {
    labels: getLabels(losses),
    datasets: getDatasets(lossesToDisplay, websiteLanguage, losses),
  };

  // TODO rewrite the function so that it returns a component
  function renderConfigButtons() {
    if (losses.length === 0) {
      return null;
    }
    return Object.entries(latestLossesObject).map((item) => {
      const itemName = item[0];

      if (!lossesNames[itemName]?.display) {
        return null;
      }

      const itemTranslation = translation[websiteLanguage].main.losses[itemName].name;

      return (
        <ConfigBtn
          itemName={itemName}
          lossesToDisplay={lossesToDisplay}
          setLossesToDisplay={setLossesToDisplay}
          itemTranslation={itemTranslation}
          selectedChartMode={selectedChartMode}
          key={item}
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
        />

        <ul className="charts__config">
          {renderConfigButtons()}
        </ul>
      </article>

    </main>
  );
}

Charts.propTypes = {
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

Charts.defaultProps = {
  losses: {},
};
