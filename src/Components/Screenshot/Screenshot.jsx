import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';
import PageNav from '../MainPage/PageNav/PageNav';
import LangButton from '../LangButton/LangButton';
import ScreenshotSizes from './ScreenshotSizes/ScreenshotSizes';
import ScreenshotPicture from './ScreenshotPicture/ScreenshotPicture';
import translation from '../../utils/translation';
import screenschotConfig from '../../utils/screenschotConfig';
import { setActivePage, pages } from '../../redux/activePage';
import './Screenshot.scss';

export default function Screenshot() {
  const dispatch = useDispatch();
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  useEffect(() => dispatch(setActivePage(pages.screenshot)));

  const [selectedSizeName, setSelectedSizeName] = useState(screenschotConfig.twitter.name);
  const [selectedSize, setSelectedSize] = useState({
    width: screenschotConfig.twitter.width,
    height: screenschotConfig.twitter.height,
  });

  const config = {
    width: selectedSize.width,
    height: selectedSize.height,
  };

  function capture() {
    htmlToImage.toPng(document.querySelector('.screenshot__picture-container'))
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

      <section className="screenshot__sizes-wrapper">
        {Object.keys(screenschotConfig).map((item) => (
          <ScreenshotSizes
            key={screenschotConfig[item].name}
            name={screenschotConfig[item].name}
            iconName={screenschotConfig[item].iconName}
            width={screenschotConfig[item].width}
            height={screenschotConfig[item].height}
            selectedSizeName={selectedSizeName}
            setSelectedSizeName={setSelectedSizeName}
            setSelectedSize={setSelectedSize}
          />
        ))}
      </section>

      <button className="screenshot__download-btn" type="button" onClick={capture}>Download</button>

      <div
        className="screenshot__picture-container"
        style={{ width: selectedSize.width, height: selectedSize.height }}
      >
        <ScreenshotPicture />
      </div>

    </article>
  );
}
