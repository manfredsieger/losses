import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Header/Header';
import Dates from './Dates/Dates';
import Losses from './Losses/Losses';
import losses from '../../utils/losses';
import { getPastDataUpdateDate } from '../../utils/helpers';
import './MainPage.scss';
import { setActivePage, pages } from '../../redux/activePage';

export default function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(setActivePage(pages.losses.name)));

  return (
    <main className="main__page-container page-container">
      <Header
        losses={losses}
        getPastDataUpdateDate={() => getPastDataUpdateDate(losses, -1)}
      />
      <Dates />
      <Losses />
    </main>
  );
}
