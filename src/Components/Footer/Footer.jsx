import React, { Fragment } from "react";
import './Footer.scss';
import { useSelector } from "react-redux";
import translation from '../../utils/translation';
import { pages } from "../../redux/activePage";
import svgSources from "../../utils/svgSources";

export default function Footer() {

  const { websiteLanguage } = useSelector(state => state.websiteLanguage);
  const { activePage } = useSelector(state => state.activePage);

  function renderSvgSources() {
    return Object.values(svgSources).map((source, index, arr) => {
      if (index === arr.length - 1) {
        return <a className="footer__link" key={index} href={source.href} rel="noopener noreferrer" target="_blank">{source.text}</a>;
      } else {
        return(
          <React.Fragment>
            <a className="footer__link" key={index} href={source.href} rel="noopener noreferrer" target="_blank">{source.text}</a><React.Fragment>, </React.Fragment>
          </React.Fragment>
        )
      }
    })
  }

  return (
    <footer className={(activePage === pages.losses || activePage === pages.charts) ? 'footer__container footer__container--red-page' : 'footer__container'}>
      <ul className="footer__list">
        <li className="footer__text">{translation[websiteLanguage].main.footer.developedBy} <a className="footer__link" href="https://www.comebackalive.in.ua/" rel="noopener noreferrer" target="_blank">{translation[websiteLanguage].main.footer.fund}</a> {translation[websiteLanguage].main.footer.team}</li>
        {activePage === 'losses' ? <li className="footer__text">{translation[websiteLanguage].main.footer.design} <a className="footer__link" href="https://www.facebook.com/UkraineMFA" rel="noopener noreferrer" target="_blank">{translation[websiteLanguage].main.footer.mfa}</a> {translation[websiteLanguage].main.footer.facebook}</li> : null}
        <li className="footer__text">{translation[websiteLanguage].main.footer.iconsFrom} {renderSvgSources()}</li>
      </ul>
    </footer>
  )
}
