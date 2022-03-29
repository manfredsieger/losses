import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../MainPage/Header/Header';
import Logo from '../../Logo/Logo';
import Dates from '../../MainPage/Dates/Dates';
import Losses from '../../MainPage/Losses/Losses';
import translation from '../../../utils/translation';
import './ScreenshotPicture.scss';

export default function ScreenshotPicture() {
  // const { websiteLanguage } = useSelector((state) => state.websiteLanguage);

  return (
    <>
      {/* <article className="screenshotPicture__page-container">
        <h1 className="screenshotPicture__header">{translation[websiteLanguage].main.header}</h1>
      </article> */}
      <Header />
      <Logo />
      <Dates />
      <Losses />
    </>
  );
}
