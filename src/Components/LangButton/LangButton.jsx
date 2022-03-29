import React from 'react';
import './LangButton.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setWebsiteLanguage, languages } from '../../redux/changeLang';
import { pages } from '../../redux/activePage';

export default function LangButton() {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  const { activePage } = useSelector((state) => state.activePage);

  const dispatch = useDispatch();

  function changeLanguage() {
    if (websiteLanguage === languages.eng) {
      dispatch(setWebsiteLanguage(languages.ua));
    } else if (websiteLanguage === languages.ua) {
      dispatch(setWebsiteLanguage(languages.eng));
    }
  }

  // function supportsLocalStorage() {
  //   return 'localStorage' in window && window['localStorage'] !== null;
  // }

  // function ff() {
  //   try {

  //   } catch (err) {

  //   }
  // }

  function getLightStyleIfApplicable() {
    if (activePage === pages.donate || activePage === pages.screenshot) {
      return 'lang__wrapper--light';
    }
    return '';
  }

  return (
    <div
      className={`lang__wrapper ${getLightStyleIfApplicable()} ${(websiteLanguage === languages.eng)
        ? 'lang__wrapper--circle-left'
        : 'lang__wrapper--circle-right'}`}
      onClick={changeLanguage}
      role="button"
      tabIndex={0}
    >
      <span className="lang__circle" id="circle" />
      <span className="lang__text lang__text--eng">en</span>
      <span className="lang__text lang__text--ua">ua</span>
    </div>
  );
}
