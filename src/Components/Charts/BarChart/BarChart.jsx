import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// components
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
// utils
import PropsTypes from 'prop-types';
import translation from '../../../utils/translation';
import { datesLanguages } from '../../../utils/languagesConfig';
import LineChart from '../LineChart/LineChart';
import lossesNames from '../../../utils/lossesConfig';
import {
  chartModes, options, getWeekAsStepNumber, getWeekAsStepDates, getMonthAsStep,
} from '../../../utils/barChartConfig';
import { SMALL_LANDSCAPE_SCREEN, CHART_TO_GROW_SCREEN_WIDTH } from '../../../utils/commonChartConfig';
// css
import './BarChart.scss';
import BarChartMode from './BarChartMode/BarChartMode';
import BarChartLossTypeBtns from './BarChartLossTypeBtns/BarChartLossTypeBtns';

export default function BarChart({ losses, latestLossesObject }) {
  const { websiteLanguage } = useSelector((store) => store.websiteLanguage);

  const emptyChartData = {
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: '#f1c40f',
      },
    ],
  };

  const DEFAULT_LOSS_TYPE_TO_DISPLAY = lossesNames.personnel.name;
  const [lossesToDisplay, setLossesToDisplay] = useState(DEFAULT_LOSS_TYPE_TO_DISPLAY);
  const DEFAULT_SELECTED_CHART_MODE = chartModes.month;
  const [selectedChartMode, setSelectedChartMode] = useState(DEFAULT_SELECTED_CHART_MODE);
  const [barChartData, setBarChartData] = useState({ ...emptyChartData });
  const [hasUserSmallScreen, setUserScreenValidity] = useState(false);
  const WAR_START_DATE = '2022-02-24';

  function getDataForChart(lossName = DEFAULT_LOSS_TYPE_TO_DISPLAY, step = DEFAULT_SELECTED_CHART_MODE) {
    if (losses.length === 0) {
      return [];
    }

    const copyLosses = [...losses];
    const dataForChart = copyLosses.reverse().reduce((acc, item, index) => {
      const arrOfLossesNumbers = acc.datasets[0].data;

      let currentStep;
      if (step === chartModes.month) {
        currentStep = getMonthAsStep(item.date, datesLanguages[websiteLanguage]);
      } else if (step === chartModes.week) {
        // Uncomment this line if you want the weeks to be called "1, 2, 3..." instead of "21.02-27.02..."
        // currentStep = getWeekAsStepNumber(item.date, WAR_START_DATE);
        currentStep = getWeekAsStepDates(item.date);
      } else {
        throw new Error('You provided invalid step for the chart. Please provide any value of the STAT_STEPS'
          + ' constant.');
      }

      if (index === 0) {
        acc.labels.push(currentStep);
        arrOfLossesNumbers.push(item[lossName]);
      } else if (acc.labels[acc.labels.length - 1] !== currentStep) {
        acc.labels.push(currentStep);
        const DAY_LOSS_NUMBER = item[lossName] - copyLosses[index - 1][lossName];
        arrOfLossesNumbers.push(DAY_LOSS_NUMBER);
      } else {
        const DAY_LOSS_NUMBER = item[lossName] - copyLosses[index - 1][lossName];
        arrOfLossesNumbers[arrOfLossesNumbers.length - 1] = arrOfLossesNumbers[arrOfLossesNumbers.length - 1] + DAY_LOSS_NUMBER;
      }
      return acc;
    }, JSON.parse(JSON.stringify(emptyChartData)));

    dataForChart.datasets[0].label = translation[websiteLanguage].main.losses[lossName].name;

    // Uncomment this line only if one uses 'getWeekAsStepNumbers' function instead of 'getWeekAsStepDates'
    // if (step === STAT_STEPS.week) {
    //   dataForChart.labels.forEach((item, index, arr) => { arr[index] = index + 1; });
    // }

    return dataForChart;
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
        <BarChartLossTypeBtns
          itemName={itemName}
          lossesToDisplay={lossesToDisplay}
          setLossesToDisplay={setLossesToDisplay}
          itemTranslation={itemTranslation}
          key={item}
        />
      );
    });
  }

  function hasUserValidScreenSize() {
    if (window.innerWidth < SMALL_LANDSCAPE_SCREEN) {
      return setUserScreenValidity(true);
    }
    return setUserScreenValidity(false);
  }

  useEffect(() => {
    setBarChartData(() => getDataForChart(lossesToDisplay, selectedChartMode));
  }, [losses, selectedChartMode, lossesToDisplay, websiteLanguage]);

  useEffect(() => {
    hasUserValidScreenSize();
    window.addEventListener('resize', hasUserValidScreenSize);

    return () => {
      window.removeEventListener('resize', hasUserValidScreenSize);
    };
  }, []);

  return (
    <article className="barChart__container">
      <h2 className="barChart__header standardHeader">{translation[websiteLanguage].charts.barChart.header[selectedChartMode]}</h2>

      <section className="barChart__canvas-wrapper">
        <h3 className="visually-hidden">Chart displaying russian invaders` losses in Ukraine by months</h3>
        <Bar
          className="barChart__canvas"
          options={window.innerWidth <= CHART_TO_GROW_SCREEN_WIDTH
            ? Object.assign(options, { maintainAspectRatio: false }) : options}
          data={barChartData}
        />
      </section>

      <BarChartMode
        selectedChartMode={selectedChartMode}
        setSelectedChartMode={setSelectedChartMode}
      />

      <ul className="barChart__config">
        <RenderLossTypeBtns />
      </ul>
    </article>
  );
}

BarChart.propTypes = {
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

BarChart.defaultProps = {
  losses: [],
  latestLossesObject: {},
};
