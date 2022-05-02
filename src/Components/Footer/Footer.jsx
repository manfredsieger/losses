import React from 'react';
import './Footer.scss';
import { useSelector } from 'react-redux';
import translation from '../../utils/translation';
import { stylePages, pages } from '../../redux/activePage';
import svgSources from '../../utils/svgSources';

export default function Footer() {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  const { activePage } = useSelector((state) => state.activePage);
  const { developed, design, iconsFrom } = translation[websiteLanguage].footer;

  function renderSvgSources() {
    return Object.values(svgSources).map((source, index, arr) => (
      <span key={source.text}>
        <a
          className="footer__link standardLink"
          href={source.href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {source.text}
        </a>
        {index === (arr.length - 1) ? '' : ', '}
      </span>
    ));
  }

  return (
    <footer
      className={`footer__container ${stylePages.red.includes(activePage) ? 'footer__container--red-page' : ''} ${activePage === pages.donate.name ? 'footer__container--donate' : ''}`}
    >
      <ul className="footer__list">
        <li
          className={`footer__text ${activePage === pages.losses.name ? 'footer__text--developed-by' : ''}`}
        >
          {`${developed.developedBy} `}
          <a
            className="footer__link standardLink"
            href="https://www.comebackalive.in.ua/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {developed.fund}
          </a>
          {` ${developed.team}`}
        </li>
        <li className="footer__text">
          {`${design.designStr} `}
          <a className="footer__link standardLink" href={design.authorLink} rel="noopener noreferrer" target="_blank">
            {design.author}
          </a>
          {
            activePage === pages.losses.name
              ? (
                <>
                  {`. ${design.designBasedOn} `}
                  <a
                    className="footer__link standardLink"
                    href={design.mfaLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {design.mfa}
                  </a>
                  {` ${design.facebook}`}
                </>
              )
              : null
          }
        </li>
        <li className="footer__text">
          {`${iconsFrom} `}
          {renderSvgSources()}
        </li>
      </ul>
    </footer>
  );
}
