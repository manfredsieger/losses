import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './MainPage.scss';
// components
import Header from './Header/Header';
import Dates from './Dates/Dates';
import Losses from './Losses/Losses';
// utils
import losses from '../../utils/losses';
import { getPastDataUpdateDate } from '../../utils/helpers';
// redux
import { setActivePage, pages } from '../../redux/activePage';

export default function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActivePage(pages.losses.name));
    window.scrollTo(0, 0);
  }, []);

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
