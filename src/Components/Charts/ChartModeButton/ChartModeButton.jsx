import React from 'react';
import { useSelector } from 'react-redux';
import './ChartModeButton.scss';
import translation from '../../../utils/translation';

export default function ChartModeButton() {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  const { showMultiple, showOne } = translation[websiteLanguage].charts.chartMode;

  return (
    <ul className="chartModeButton__wrapper">
      <li className="chartModeButton__item">
        <label className="chartModeButton__label" htmlFor="showMultiple">
          {showMultiple}
        </label>
        <input className="chartModeButton__input" id="showMultiple" type="radio" name="chartMode" />
      </li>
      <li className="chartModeButton__item">
        <label className="chartModeButton__label" htmlFor="showOne">
          {showOne}
        </label>
        <input className="chartModeButton__input" id="showOne" type="radio" name="chartMode" />
      </li>
    </ul>
  );
}
