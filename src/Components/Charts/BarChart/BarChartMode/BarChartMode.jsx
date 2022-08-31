import React from 'react';
import PropsTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './BarChartMode.scss';
// utils
import translation from '../../../../utils/translation';
import { chartModes } from '../../../../utils/barChartConfig';

export default function BarChartMode({ selectedChartMode, setSelectedChartMode }) {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  const { month, week, header } = translation[websiteLanguage].charts.barChart.chartMode;

  return (
    <section className="chartModeButton__wrapper">
      <h2 className="visually-hidden">Controls switching chart from showing one line at a time to showing multiple lines</h2>
      <p className="chartModeButton__header">{header}</p>
      <ul className="chartModeButton__list">
        <li
          className="chartModeButton__item"
          onClick={() => setSelectedChartMode(chartModes.month)}
        >
          <input className="chartModeButton__input" id="showMonth" type="radio" name="chartMode" defaultChecked />
          <span
            className={`chartModeButton__custom-input ${selectedChartMode === chartModes.month ? 'chartModeButton__custom-input--selected' : ''}`}
            role="none"
          />
          <label className="chartModeButton__label" htmlFor="showMonth">
            {month}
          </label>
        </li>
        <li
          className="chartModeButton__item"
          onClick={() => setSelectedChartMode(chartModes.week)}
        >
          <input className="chartModeButton__input" id="showWeek" type="radio" name="chartMode" />
          <span
            className={`chartModeButton__custom-input ${selectedChartMode === chartModes.week ? 'chartModeButton__custom-input--selected' : ''}`}
            role="none"
          />
          <label className="chartModeButton__label" htmlFor="showWeek">
            {week}
          </label>
        </li>
      </ul>
    </section>
  );
}

BarChartMode.propTypes = {
  selectedChartMode: PropsTypes.string.isRequired,
  setSelectedChartMode: PropsTypes.func.isRequired,
};
