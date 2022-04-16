import React from 'react';
import PropsTypes from 'prop-types';
import Header from '../../MainPage/Header/Header';
import Logo from '../../Logo/Logo';
import Dates from '../../MainPage/Dates/Dates';
import Losses from '../../MainPage/Losses/Losses';
import './ScreenshotPicture.scss';

export default function ScreenshotPicture({ width, height }) {
  return (
    <div className="scrollable" style={{ width, height }}>
      <Header />
      <Logo />
      <Dates />
      <Losses />
    </div>
  );
}

ScreenshotPicture.propTypes = {
  width: PropsTypes.number.isRequired,
  height: PropsTypes.number.isRequired,
};
