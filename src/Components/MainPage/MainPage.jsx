import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropsTypes from 'prop-types';
import './MainPage.scss';
// components
import Header from './Header/Header';
import Dates from './Dates/Dates';
import Losses from './Losses/Losses';
import Loader from '../Loader/Loader';
// redux
import { setActivePage } from '../../redux/activePage';
import { pages } from '../../utils/pageNavConfig';
// utils
import { scrollToTop } from '../../utils/helpers';

export default function MainPage({ losses }) {
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(setActivePage(pages.losses.name));
    scrollToTop();
  }, []);

  return (
    <main className="main__page-container page-container">
      <Header losses={losses} />
      <Dates />
      {losses.length === 0
        ? <Loader />
        : <Losses losses={losses} />}
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
