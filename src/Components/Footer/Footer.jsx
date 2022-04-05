import React from 'react';
import './Footer.scss';
import { useSelector } from 'react-redux';
import translation from '../../utils/translation';
import { stylePages, pages } from '../../redux/activePage';
import svgSources from '../../utils/svgSources';

export default function Footer() {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  const { activePage } = useSelector((state) => state.activePage);
  const {
    developedBy, team, design, mfa, facebook, iconsFrom, fund,
  } = translation[websiteLanguage].main.footer;

  function renderSvgSources() {
    return Object.values(svgSources).map((source, index, arr) => {
      if (index === arr.length - 1) {
        return (
          <a
            className="footer__link standardLink"
            key={source.text}
            href={source.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {source.text}
          </a>
        );
      }
      return (
        <>
          <a
            className="footer__link standardLink"
            key={source.text}
            href={source.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {source.text}
          </a>
          {', '}
        </>
      );
    });
  }

  return (
    <footer
      id="num"
      className={`footer__container ${stylePages.red.includes(activePage) ? 'footer__container--red-page' : ''}`}
    >
      <ul className="footer__list">
        <li
          className={`footer__text ${activePage === pages.losses.name ? 'footer__text--developed-by' : ''}`}
        >
          {`${developedBy} `}
          <a
            className="footer__link standardLink"
            href="https://www.comebackalive.in.ua/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {fund}
          </a>
          {` ${team}`}
        </li>
        {
          activePage === pages.losses.name
            ? (
              <li className="footer__text">
                {`${design} `}
                <a className="footer__link standardLink" href="https://www.facebook.com/UkraineMFA" rel="noopener noreferrer" target="_blank">
                  {mfa}
                </a>
                {` ${facebook}`}
              </li>
            )
            : null
        }
        <li className="footer__text">
          {`${iconsFrom} `}
          {renderSvgSources()}
        </li>
      </ul>
    </footer>
  );
}
