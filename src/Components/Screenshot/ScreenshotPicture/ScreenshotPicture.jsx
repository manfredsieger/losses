import React from 'react';
import PropsTypes from 'prop-types';
import './ScreenshotPicture.scss';
// components
import Header from '../../MainPage/Header/Header';
import Logo from '../../Logo/Logo';
import Dates from '../../MainPage/Dates/Dates';
import Losses from '../../MainPage/Losses/Losses';

export default function ScreenshotPicture({ width, height, losses }) {
  return (
    <div className="scrollable" style={{ width, height }}>
      <Header losses={losses} />
      <Logo />
      <Dates />
      <Losses losses={losses} />
      <p className="screenshot__link">invadersnotwelcome.in.ua</p>
    </div>
  );
}

ScreenshotPicture.propTypes = {
  width: PropsTypes.number.isRequired,
  height: PropsTypes.number.isRequired,
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

ScreenshotPicture.defaultProps = {
  losses: {},
};
