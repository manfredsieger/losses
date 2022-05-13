import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropsTypes from 'prop-types';
// components
import LineChart from './LineChart/LineChart';
import Armies from './Armies/Armies';
import './Charts.scss';
// utils
import { getLatestLossesObject } from '../../utils/helpers';
import translation from '../../utils/translation';
import { pages } from '../../utils/pageNavConfig';
// redux
import { setActivePage } from '../../redux/activePage';

export default function Charts({ losses }) {
  const { websiteLanguage } = useSelector((store) => store.websiteLanguage);
  const [latestLossesObject, setLatestLossesObject] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActivePage(pages.charts.name));
  }, []);

  useEffect(() => {
    setLatestLossesObject(getLatestLossesObject(losses));
  }, [losses]);

  return (
    <main className="charts__page-container page-container">
      <h1 className="visually-hidden">{translation[websiteLanguage].charts.header}</h1>

      <LineChart losses={losses} latestLossesObject={latestLossesObject} />

      <Armies personnelLosses={latestLossesObject.personnel} />

    </main>
  );
}

Charts.propTypes = {
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

Charts.defaultProps = {
  losses: {},
};
