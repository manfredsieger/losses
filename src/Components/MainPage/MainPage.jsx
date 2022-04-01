import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header/Header';
import Dates from './Dates/Dates';
import Losses from './Losses/Losses';
import PageNav from './PageNav/PageNav';
import LangButton from '../LangButton/LangButton';
import losses from '../../utils/losses';
import { getLastDataUpdateDate, isUserDeviceDesktop } from '../../utils/helpers';
import './MainPage.scss';
import { setActivePage, pages } from '../../redux/activePage';
import translation from '../../utils/translation';

export default function MainPage() {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  const dispatch = useDispatch();
  useEffect(() => dispatch(setActivePage(pages.losses)));
  const { helpBtn, chartsBtn, infographicBtn } = translation[websiteLanguage].main;

  return (
    <main className="main__page-container">

      <nav className="main__page-nav-wrapper navigation-wrapper">
        <LangButton />
        <PageNav
          className="pageNav pageNav__yellow"
          to="/donate"
          ariaLabel="Go to help Ukraine page button"
          value={helpBtn}
        />

        <PageNav
          className="pageNav pageNav__light"
          to="/charts"
          ariaLabel="Show charts"
          value={chartsBtn}
        />

        {isUserDeviceDesktop()
          ? (
            <PageNav
              className="pageNav pageNav__light"
              to="/screenshot"
              ariaLabel="Save infographic"
              value={infographicBtn}
            />
          )
          : null}
      </nav>

      <Header
        losses={losses}
        getLastDataUpdateDate={getLastDataUpdateDate}
      />
      <Dates />
      <Losses />
    </main>
  );
}
