import React, { useEffect, useRef } from 'react';
import './Map.scss';
import { useDispatch, useSelector } from 'react-redux';
import Legend from './Legend/Legend';
// utils
import translation from '../../utils/translation';
import { pages } from '../../utils/pageNavConfig';
import { scrollToTop } from '../../utils/helpers';
// redux
import { setActivePage } from '../../redux/activePage';

export default function Map() {
  const { websiteLanguage } = useSelector((store) => store.websiteLanguage);
  const { map } = translation[websiteLanguage];
  const dispatch = useDispatch();
  const iframe = useRef();

  function centerMapFullScreen(time = 0) {
    const iframeContainerTop = iframe.current.getBoundingClientRect().top + window.scrollY;
    setTimeout(() => {
      window.scrollTo({
        top: iframeContainerTop,
        behavior: 'smooth',
      });
    }, time);
  }

  useEffect(() => {
    dispatch(setActivePage(pages.map.name));
    scrollToTop();
    centerMapFullScreen(1000);
  }, []);

  return (
    <main className="map__page-container page-container">
      <h1 className="map__header standardHeader">{map.header}</h1>

      <section className="warnings__container">
        <h2 className="visually-hidden">Section with warning what one shall not do with this map</h2>
        <ul className="warnings__list">
          {map.warnings.map((warning) => (
            <li className="warnings__item" key={warning.slice(0, 5)}>{warning}</li>
          ))}
        </ul>
      </section>

      <Legend />

      <button
        className="map__btn-center"
        type="button"
        onClick={centerMapFullScreen}
      >
        {map.centerBtn}
      </button>

      <article className="map__iframe-container">
        <h2 className="visually-hidden">The map showing troop location</h2>

        <iframe
          className="map__iframe"
          src="https://deepstatemap.live/#6/49.438/32.053"
          title="Troop location map developed by the Deep State"
          ref={iframe}
        />
      </article>

    </main>
  );
}
