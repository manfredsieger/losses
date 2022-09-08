import React, { useEffect, useState } from 'react';
import PropsTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
// redux
import { useSelector } from 'react-redux';
// components
import Chart from 'chart.js/auto';
import RotateWarning from './RotateWarning/RotateWarning';
import LineChartLossTypeBtns from './LineChartLossTypeBtns/LineChartLossTypeBtns';
import LineChartMode from './LineChartMode/LineChartMode';
// utils
import {
  chartModes, getDatasets, getLabels, options,
} from '../../../utils/lineChartConfig';
import { SMALL_LANDSCAPE_SCREEN, CHART_TO_GROW_SCREEN_WIDTH } from '../../../utils/commonChartConfig';
import lossesNames from '../../../utils/lossesConfig';
import translation from '../../../utils/translation';
import { scrollToTop } from '../../../utils/helpers';
// scss
import './LineChart.scss';

export default function LineChart({ losses, latestLossesObject }) {
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

  function RenderLossTypeBtns() {
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
        <LineChartLossTypeBtns
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
  }, [losses, lossesToDisplay, websiteLanguage]);

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
      <h2 className="lineChart__header standardHeader">{translation[websiteLanguage].charts.lineChart.header}</h2>

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

      <LineChartMode
        selectedChartMode={selectedChartMode}
        setSelectedChartMode={setSelectedChartMode}
      />

      <ul className="lineChart__config">
        <RenderLossTypeBtns />
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
