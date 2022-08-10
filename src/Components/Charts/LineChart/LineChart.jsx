import React, { useEffect, useState } from 'react';
import PropsTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
// redux
import { useSelector } from 'react-redux';
// components
import Chart from 'chart.js/auto';
import RotateWarning from './RotateWarning/RotateWarning';
import ConfigBtn from './ConfigBtn/ConfigBtn';
import ChartModeButton from './ChartModeButton/ChartModeButton';
// utils
import {
  chartModes, getDatasets, getLabels, options,
} from '../../../utils/lineChartConfig';
import lossesNames from '../../../utils/lossesConfig';
import translation from '../../../utils/translation';
import { scrollToTop } from '../../../utils/helpers';
// scss
import './LineChart.scss';

export default function LineChart({ losses, latestLossesObject }) {
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
  const DEFAULT_ACTIVE_CONFIG_BTNS = [lossesNames.aircrafts.name, lossesNames.helicopters.name, lossesNames.cruiseMissiles.name];
  const { websiteLanguage } = useSelector((store) => store.websiteLanguage);
  const [hasUserSmallScreen, setUserScreenValidity] = useState(false);
  const [selectedChartMode, setSelectedChartMode] = useState(chartModes.multiple);
  const [lossesToDisplay, setLossesToDisplay] = useState(DEFAULT_ACTIVE_CONFIG_BTNS);
  const [lineChartData, setLineChartData] = useState({
    labels: [],
    datasets: [],
  });

  function hasUserValidScreenSize() {
    if (window.innerWidth < SMALL_LANDSCAPE_SCREEN) {
      return setUserScreenValidity(true);
    }
    return setUserScreenValidity(false);
  }

  function ConfigButtons() {
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

  useEffect(() => {
    setLineChartData({
      labels: getLabels(losses),
      datasets: getDatasets(lossesToDisplay, websiteLanguage, losses),
    });
  }, [losses, lossesToDisplay]);

  useEffect(() => {
    if (selectedChartMode === chartModes.showOne) {
      const copyArr = [...lossesToDisplay].splice(0, 1);
      setLossesToDisplay(copyArr);
    }
  }, [selectedChartMode]);

  useEffect(() => {
    scrollToTop();
    hasUserValidScreenSize();
    window.addEventListener('resize', hasUserValidScreenSize);

    return () => {
      window.removeEventListener('resize', hasUserValidScreenSize);
    };
  }, []);

  return (
    <article className="lineChart__container">
      <h2 className="lineChart__header standardHeader">{translation[websiteLanguage].charts.chartDynamics.header}</h2>

      <section className="lineChart__canvas-wrapper">
        <h3 className="visually-hidden">Chart displaying russian invaders` losses in Ukraine</h3>
        {
          hasUserSmallScreen
            ? <RotateWarning />
            : (
              <Line
                className="lineChart__canvas"
                options={window.innerWidth <= CHART_TO_GROW_SCREEN_WIDTH
                  ? Object.assign(options, { maintainAspectRatio: false }) : options}
                data={lineChartData}
              />
            )
        }
      </section>

      <ChartModeButton
        selectedChartMode={selectedChartMode}
        setSelectedChartMode={setSelectedChartMode}
      />

      <ul className="lineChart__config">
        <ConfigButtons />
      </ul>
    </article>
  );
}

LineChart.propTypes = {
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
  latestLossesObject: PropsTypes.shape({
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
  }),
};

LineChart.defaultProps = {
  losses: [],
  latestLossesObject: {},
};
