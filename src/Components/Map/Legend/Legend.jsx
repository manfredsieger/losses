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
    } if (item.img) {
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

  return (
    <section className="legend__section">
      <h3 className="legend__header">{map.legend.legend}</h3>
      <ul className="legend__list">
        {
          legendItems.map((item) => (
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
          ))
        }
      </ul>
    </section>
  );
}
