import React from "react";
import './LangButton.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setWebsiteLanguage } from './../../redux/changeLang';
import { languages } from './../../redux/changeLang';

export default function LangButton() {

  const { websiteLanguage } = useSelector(state => state.websiteLanguage);

  const dispatch = useDispatch();

  function changeLanguage() {
    if (websiteLanguage === languages.eng) {
      dispatch(setWebsiteLanguage(languages.ua))
    } else if (websiteLanguage === languages.ua) {
      dispatch(setWebsiteLanguage(languages.eng))
    }
  }

  return (
    <div
      className={`lang__wrapper ${websiteLanguage === languages.eng ? 'lang__wrapper--circle-left' : 'lang__wrapper--circle-right'}`}
      onClick={changeLanguage}>
      <span className="lang__circle" id="circle"></span>
      <span className="lang__text lang__text--eng">en</span>
      <span className="lang__text lang__text--ua">ua</span>
    </div>
  )
}
