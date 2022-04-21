import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';
import ScreenshotSizes from './ScreenshotSizes/ScreenshotSizes';
import ScreenshotPicture from './ScreenshotPicture/ScreenshotPicture';
import ModalMessage from '../ModalMessage/ModalMessage';
import translation from '../../utils/translation';
import screenshotConfig from '../../utils/screenshotConfig';
import { setActivePage, pages } from '../../redux/activePage';
import { isUserAgentSafari } from '../../utils/helpers';
import { setModalWindowText } from '../../redux/modalWindow';
import './Screenshot.scss';

export default function Screenshot() {
  const dispatch = useDispatch();
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  const { modalWindowText } = useSelector((state) => state.modalWindowText);
  useEffect(() => dispatch(setActivePage(pages.screenshot.name)));

  const [selectedSizeName, setSelectedSizeName] = useState(screenshotConfig.twitter.name);
  const [selectedSize, setSelectedSize] = useState({
    width: screenshotConfig.twitter.width,
    height: screenshotConfig.twitter.height,
  });
  const {
    downloadBtn, noDownload, header, warning,
  } = translation[websiteLanguage].screenshot;
  const { modal } = translation[websiteLanguage];

  const config = {
    width: selectedSize.width / 2,
    height: selectedSize.height / 2,
    canvasWidth: selectedSize.width * 2,
    canvasHeight: selectedSize.height * 2,
  };

  function capture() {
    dispatch(setModalWindowText(modal.downloadingImg));
    htmlToImage.toJpeg(document.querySelector('.scrollable'), config)
      .then((dataUrl) => {
        // dispatch(setModalWindowText(modal.downloadingImg));
        download(dataUrl, 'losses.jpeg');
      })
      .catch(() => {
        dispatch(setModalWindowText(modal.errorDownloadingImg));
      });
  }

  return (
    <article className="screenshot__page-container page-container">
      <h1 className="screenshot__header standardHeader">{header}</h1>

      {modalWindowText ? <ModalMessage displayTime={6000} showCloseBtn /> : null}

      <section className="screenshot__sizes-wrapper">
        <h2 className="visually-hidden">Buttons allowing to customize the infographic to download</h2>
        {
          Object.keys(screenshotConfig).map((item) => (
            <ScreenshotSizes
              key={screenshotConfig[item].name}
              name={screenshotConfig[item].name}
              iconName={screenshotConfig[item].iconName}
              width={screenshotConfig[item].width}
              height={screenshotConfig[item].height}
              selectedSizeName={selectedSizeName}
              setSelectedSizeName={setSelectedSizeName}
              setSelectedSize={setSelectedSize}
            />
          ))
        }
      </section>

      <p className="screenshot__warning">{warning}</p>

      <button
        className="screenshot__download-btn"
        type="button"
        onClick={capture}
        disabled={isUserAgentSafari()}
      >
        {isUserAgentSafari() ? noDownload : downloadBtn}
      </button>

      <main className={`screenshot__picture-container screenshot__picture-container_${selectedSize.width}_${selectedSize.height}`}>
        <ScreenshotPicture
          width={selectedSize.width / 2}
          height={selectedSize.height / 2}
        />
      </main>

    </article>
  );
}
