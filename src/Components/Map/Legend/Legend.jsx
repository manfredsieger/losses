import React from 'react';
import './Legend.scss';
import { useSelector } from 'react-redux';
import translation from '../../../utils/translation';
import legendItems from '../../../utils/mapConfig';

export default function Legend() {
  const { websiteLanguage } = useSelector((store) => store.websiteLanguage);
  const { map } = translation[websiteLanguage];

  function renderIcon(item) {
    if (item.colorMain) {
      return (
        <span
          className="legend__icon-round"
          style={{ backgroundColor: item.colorMain, borderColor: item.colorBorder }}
        />
      );
    }
    if (item.img) {
      return (
        <img
          className={`legend__icon-img ${item.name === 'attackDirection2' ? 'legend__icon-arrow' : ''}`}
          src={require(`../../../img/${item.img}`)}
          alt={`${item.name}-icon`}
          width="30"
        />
      );
    }
    return null;
  }

  function renderLegendItem(data) {
    return data.map((item) => (
      item.colorMain || item.img
        ? (
          <li
            className="legend__item"
            key={item.name}
          >
            {renderIcon(item)}
            <span className="legend__dash">–</span>
            <span className="legend__caption">{map.legend[item.name]}</span>
          </li>
        )
        : null
    ));
  }

  return (
    <section className="legend__section">
      <h3 className="legend__header">{map.legend.legend}</h3>
      <p className="legend__seeAllIcons">
        <span className="legend__seeAllIcons-text">{map.legend.seeAllIcons1}</span>
        <svg className="legend__seeAllIcons-icon" xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 413.099 413.099">
          <path d="M206.549,0L206.549,0c-82.6,0-149.3,66.7-149.3,149.3c0,28.8,9.2,56.3,22,78.899l97.3,168.399c6.1,11,18.4,16.5,30,16.5
          c11.601,0,23.3-5.5,30-16.5l97.3-168.299c12.9-22.601,22-49.601,22-78.901C355.849,66.8,289.149,0,206.549,0z M206.549,193.4
          c-30,0-54.5-24.5-54.5-54.5s24.5-54.5,54.5-54.5s54.5,24.5,54.5,54.5C261.049,169,236.549,193.4,206.549,193.4z"
          />
        </svg>
        <span className="legend__seeAllIcons-text">{map.legend.seeAllIcons2}</span>
      </p>
      <ul className="legend__list">
        { renderLegendItem(legendItems) }
      </ul>
    </section>
  );
}
