import React from 'react';
import PropsTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './ChartModeButton.scss';
import translation from '../../../utils/translation';

export default function ChartModeButton({ selectedChartMode, setSelectedChartMode, chartModes }) {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  const { showMultiple, showOne, header } = translation[websiteLanguage].charts.chartMode;

  return (
    <section className="chartModeButton__wrapper">
      <h2 className="visually-hidden">Controls switching chart from showing one line at a time to showing multiple lines</h2>
      <p className="chartModeButton__header">{header}</p>
      <ul className="chartModeButton__list">
        <li
          className="chartModeButton__item"
          onClick={() => setSelectedChartMode(chartModes.multiple)}
        >
          <input className="chartModeButton__input" id="showMultiple" type="radio" name="chartMode" checked />
          <span
            className={`chartModeButton__custom-input ${selectedChartMode === chartModes.multiple ? 'chartModeButton__custom-input--selected' : ''}`}
            role="none"
          />
          <label className="chartModeButton__label" htmlFor="showMultiple">
            {showMultiple}
          </label>
        </li>
        <li
          className="chartModeButton__item"
          onClick={() => setSelectedChartMode(chartModes.showOne)}
        >
          <input className="chartModeButton__input" id="showOne" type="radio" name="chartMode" />
          <span
            className={`chartModeButton__custom-input ${selectedChartMode === chartModes.showOne ? 'chartModeButton__custom-input--selected' : ''}`}
            role="none"
          />
          <label className="chartModeButton__label" htmlFor="showOne">
            {showOne}
          </label>
        </li>
      </ul>
    </section>
  );
}

ChartModeButton.propTypes = {
  selectedChartMode: PropsTypes.string.isRequired,
  setSelectedChartMode: PropsTypes.func.isRequired,
  chartModes: PropsTypes.shape({
    multiple: PropsTypes.string.isRequired,
    showOne: PropsTypes.string.isRequired,
  }).isRequired,
};
