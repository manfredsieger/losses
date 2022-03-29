import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';
import PageNav from '../MainPage/PageNav/PageNav';
import LangButton from '../LangButton/LangButton';
import translation from '../../utils/translation';
import { setActivePage, pages } from '../../redux/activePage';
import './Screenshot.scss';

export default function Screenshot() {
  const dispatch = useDispatch();
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  useEffect(() => dispatch(setActivePage(pages.screenshot)));

  function capture() {
    htmlToImage.toPng(document.querySelector('.main__container'))
      .then((dataUrl) => {
        download(dataUrl, 'losses.png');
      });
  }

  return (
    <article className="screenshot__page-container">
      <h1 className="screenshot__header standardHeader">{translation[websiteLanguage].screenshot.header}</h1>

      <div className="navigation-wrapper">
        <LangButton />
        <PageNav
          className="pageNav pageNav__red"
          to="/"
          ariaLabel="Go back to the main page button"
          value={translation[websiteLanguage].donate.mainPageBtn}
        />
      </div>
    </article>
  );
}
