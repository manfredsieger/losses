import React from 'react';
import Header from '../../MainPage/Header/Header';
import Logo from '../../Logo/Logo';
import Dates from '../../MainPage/Dates/Dates';
import Losses from '../../MainPage/Losses/Losses';
import './ScreenshotPicture.scss';

export default function ScreenshotPicture() {
  return (
    <div className="scrollable">
      <Header />
      <Logo />
      <Dates />
      <Losses />
    </div>
  );
}
