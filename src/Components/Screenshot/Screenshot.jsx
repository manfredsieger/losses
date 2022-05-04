import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropsTypes from 'prop-types';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';
import './Screenshot.scss';
// components
import ScreenshotSizes from './ScreenshotSizes/ScreenshotSizes';
import ScreenshotPicture from './ScreenshotPicture/ScreenshotPicture';
import ModalMessage from '../ModalMessage/ModalMessage';
// utils
import translation from '../../utils/translation';
import screenshotConfig from '../../utils/screenshotConfig';
import { isUserAgentSafari } from '../../utils/helpers';
import { pages } from '../../utils/pageNavConfig';
// redux
import { setActivePage } from '../../redux/activePage';
import { setModalWindowText } from '../../redux/modalWindow';

export default function Screenshot({ losses }) {
  const dispatch = useDispatch();
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  const { modalWindowText } = useSelector((state) => state.modalWindowText);
  useEffect(() => {
    dispatch(setActivePage(pages.screenshot.name));
    window.scrollTo(0, 0);
  }, []);

  const [selectedSizeName, setSelectedSizeName] = useState(screenshotConfig.twitter.name);
  const [selectedSize, setSelectedSize] = useState({
    width: screenshotConfig.twitter.width,
    height: screenshotConfig.twitter.height,
  });

  // Translation
  const {
    downloadBtn, noDownload, header, warning,
  } = translation[websiteLanguage].screenshot;
  const { downloadingImg, errorDownloadingImg } = translation[websiteLanguage].modal;

  // Config for infographics
  const config = {
    width: selectedSize.width / 2,
    height: selectedSize.height / 2,
    canvasWidth: selectedSize.width * 2,
    canvasHeight: selectedSize.height * 2,
  };

  function capture() {
    dispatch(setModalWindowText(downloadingImg));
    htmlToImage.toJpeg(document.querySelector('.scrollable'), config)
      .then((dataUrl) => {
        download(dataUrl, 'losses.jpeg');
      })
      .catch(() => {
        dispatch(setModalWindowText(errorDownloadingImg));
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
          losses={losses}
        />
      </main>

    </article>
  );
}

Screenshot.propTypes = {
  losses: PropsTypes.arrayOf(PropsTypes.shape({
    date: PropsTypes.string,
    personnel: PropsTypes.number,
    aircrafts: PropsTypes.number,
    helicopters: PropsTypes.number,
    armoredVehicles: PropsTypes.number,
    vehicles: PropsTypes.number,
    tanks: PropsTypes.number,
    artillery: PropsTypes.number,
    mlrs: PropsTypes.number,
    cisterns: PropsTypes.number,
    antiAir: PropsTypes.number,
    uav: PropsTypes.number,
    vessels: PropsTypes.number,
    specialVehicle: PropsTypes.number,
    srmb: PropsTypes.number,
  })),
};

Screenshot.defaultProps = {
  losses: {},
};
