import React, { useEffect } from 'react';
import './LangButton.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setWebsiteLanguage, languages } from '../../../redux/changeLang';
import { pages } from '../../../redux/activePage';

export default function LangButton() {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  const { activePage } = useSelector((state) => state.activePage);

  const dispatch = useDispatch();

  function isLocaleStorageSupported() {
    try {
      return 'localStorage' in window && window.localStorage !== null;
    } catch (error) {
      return false;
    }
  }

  function changeLanguageInRedux() {
    if (websiteLanguage === languages.eng) {
      dispatch(setWebsiteLanguage(languages.ua));
    } else if (websiteLanguage === languages.ua) {
      dispatch(setWebsiteLanguage(languages.eng));
    }
  }

  function isWriteLangToLocalStorageSuccessfull() {
    try {
      if (localStorage.getItem('lang') === languages.ua) {
        localStorage.setItem('lang', languages.eng);
        return true;
      }
      if (localStorage.getItem('lang') === languages.eng) {
        localStorage.setItem('lang', languages.ua);
        return true;
      }
      throw new Error('You are trying to set a language that is not supported');
    } catch (error) {
      changeLanguageInRedux();
      return false;
    }
  }

  function changeLanguage() {
    if (isLocaleStorageSupported() && isWriteLangToLocalStorageSuccessfull()) {
      dispatch(setWebsiteLanguage(localStorage.getItem('lang')));
    } else {
      changeLanguageInRedux();
    }
  }

  useEffect(() => {
    if (!isLocaleStorageSupported()) {
      return;
    }

    if (!localStorage.getItem('lang')) {
      localStorage.setItem('lang', languages.eng);
      dispatch(setWebsiteLanguage(languages.eng));
    } else if (localStorage.getItem('lang') === languages.ua) {
      dispatch(setWebsiteLanguage(languages.ua));
    } else if (localStorage.getItem('lang') === languages.eng) {
      dispatch(setWebsiteLanguage(languages.eng));
    } else {
      throw new Error('You are trying to set a language that is not supported');
    }
  }, []);

  function handleKeyDown(evt) {
    // 32 stands for space key
    if (evt.keyCode === 32) {
      changeLanguage();
    }
  }

  function getLightStyleIfApplicable() {
    if (activePage === pages.donate.name || activePage === pages.screenshot.name) {
      return 'lang__wrapper--light';
    }
    return '';
  }

  return (
    <div
      className={`lang__wrapper ${getLightStyleIfApplicable()} 
      ${(websiteLanguage === languages.eng)
        ? 'lang__wrapper--circle-left'
        : 'lang__wrapper--circle-right'}`}
      onClick={changeLanguage}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex="0"
    >
      <span className="lang__square" id="circle" />
      <span className="lang__text lang__text--eng">en</span>
      <span className="lang__text lang__text--ua">ua</span>
    </div>
  );
}
