import React from 'react';
import { useSelector } from 'react-redux';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';
import translation from '../../utils/translation';
import './Screenshot.scss';

export default function Screenshot() {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  const { activePage } = useSelector((state) => state.activePage);

  function capture() {
    htmlToImage.toPng(document.querySelector('.main__container'))
      .then((dataUrl) => {
        download(dataUrl, 'losses.png');
      });
  }

  return (
    <div>Screenshot</div>
  );
}
