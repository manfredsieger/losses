import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropsTypes from 'prop-types';
import './MainPage.scss';
// components
import Header from './Header/Header';
import Dates from './Dates/Dates';
import Losses from './Losses/Losses';
// redux
import { setActivePage, pages } from '../../redux/activePage';

export default function MainPage({ losses }) {
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(setActivePage(pages.losses.name));
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main__page-container page-container">
      <Header losses={losses} />
      <Dates />
      <Losses losses={losses} />
    </main>
  );
}

MainPage.propTypes = {
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

MainPage.defaultProps = {
  losses: {},
};
