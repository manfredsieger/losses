import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';
import ScreenshotSizes from './ScreenshotSizes/ScreenshotSizes';
import ScreenshotPicture from './ScreenshotPicture/ScreenshotPicture';
import translation from '../../utils/translation';
import screenschotConfig from '../../utils/screenschotConfig';
import { setActivePage, pages } from '../../redux/activePage';
import { isUserAgentSafari } from '../../utils/helpers';
import './Screenshot.scss';

export default function Screenshot() {
  const dispatch = useDispatch();
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  useEffect(() => dispatch(setActivePage(pages.screenshot.name)));

  const [isScreenshotVisible, setIsScreenshotVisible] = useState(false);
  const [selectedSizeName, setSelectedSizeName] = useState(screenschotConfig.twitter.name);
  const [selectedSize, setSelectedSize] = useState({
    width: screenschotConfig.twitter.width,
    height: screenschotConfig.twitter.height,
  });
  const { downloadBtn, noDownload, header } = translation[websiteLanguage].screenshot;

  const config = {
    width: selectedSize.width / 2,
    height: selectedSize.height / 2,
    canvasWidth: selectedSize.width * 2,
    canvasHeight: selectedSize.height * 2,
  };

  function capture() {
    setIsScreenshotVisible(true);
    htmlToImage.toPng(document.querySelector('.screenshot__picture-container'), config)
      .then((dataUrl) => {
        download(dataUrl, 'losses.png');
      });
    setIsScreenshotVisible(false);
  }

  return (
    <article className="screenshot__page-container page-container">
      <h1 className="screenshot__header standardHeader">{header}</h1>

      <section className="screenshot__sizes-wrapper">
        <h2 className="visually-hidden">Buttons allowing to customize the infographic to download</h2>
        {
          Object.keys(screenschotConfig).map((item) => (
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
          ))
        }
      </section>

      <button
        className="screenshot__download-btn"
        type="button"
        onClick={capture}
        disabled={isUserAgentSafari()}
      >
        {isUserAgentSafari() ? noDownload : downloadBtn}
      </button>

      <main
        className={`screenshot__picture-container screenshot__picture-container_${selectedSize.width}_${selectedSize.height} ${isScreenshotVisible ? 'screenshot__picture-container--visible' : ''}`}
        style={{ width: selectedSize.width / 2, height: selectedSize.height / 2 }}
      >
        <ScreenshotPicture />
      </main>

    </article>
  );
}
