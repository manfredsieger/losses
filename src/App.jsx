import React, { Suspense, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
// components
import MainPage from './Components/MainPage/MainPage';
import Footer from './Components/Footer/Footer';
import Logo from './Components/Logo/Logo';
import Navigation from './Components/Navigation/Navigation';
import BurgerButton from './Components/BurgerButton/BurgerButton';
import DonateBottomButton from './Components/DonateBottomButton/DonateBottomButton';
import ModalMessage from './Components/ModalMessage/ModalMessage';
import Loader from './Components/Loader/Loader';
// utils
import translation from './utils/translation';
// redux
import { setModalWindowText } from './redux/modalWindow';
import { pages, stylePages } from './redux/activePage';
import { isFlexGapSupported } from './utils/helpers';

// To split the bundle.js and make the dom content load faster
const Donate = React.lazy(() => import('./Components/Donate/Donate'));
const Charts = React.lazy(() => import('./Components/Charts/Charts'));
const Screenshot = React.lazy(() => import('./Components/Screenshot/Screenshot'));

export default function App() {
  const { activePage } = useSelector((state) => state.activePage);
  const [isSliderMenuShown, setIsSliderMenuShown] = useState(false);
  const [losses, setLosses] = useState([]);

  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  const { errorGettingLosses } = translation[websiteLanguage].modal;
  const { modalWindowText } = useSelector((state) => state.modalWindowText);
  const dispatch = useDispatch();

  // Getting the array with all losses from the database
  useEffect(async () => {
    await fetch('https://api.invadersnotwelcome.in.ua/los')
      .then((res) => res.json())
      .then((data) => setLosses(data))
      .catch((err) => {
        dispatch(setModalWindowText(errorGettingLosses));
        console.error(err.message);
      });
  }, []);

  /**
   * For website body to stop scrolling when slider menu is open.
   * Otherwise, it creates unnecessary scrolling.
   */
  useEffect(() => {
    if (isSliderMenuShown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [isSliderMenuShown]);

  return (
    <div className={
      `${stylePages.red.includes(activePage) ? 'website-background-red' : 'website-background-pink'}
      ${isFlexGapSupported() ? 'flexGapIsSupported' : ''}`
    }
    >

      {modalWindowText ? <ModalMessage displayTime={6000} showCloseBtn /> : null}

      <div className="website__grid">

        <div className="website__grid-left">
          <div className="website__fake-element" />
          <BurgerButton
            setIsSliderMenuShown={setIsSliderMenuShown}
          />
          <Navigation
            isSliderMenuShown={isSliderMenuShown}
            setIsSliderMenuShown={setIsSliderMenuShown}
          />
        </div>

        <div className={`website__grid-center ${activePage === pages.screenshot.name ? 'website__grid-center--overflow-hidden' : ''}`}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<MainPage losses={losses} />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/charts" element={<Charts losses={losses} />} />
              <Route path="/screenshot" element={<Screenshot losses={losses} />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </Suspense>

          <Footer />
        </div>

        <div className="website__grid-right">
          <div className="website__fake-element" />
          <Logo />
        </div>
      </div>

      {
        activePage !== pages.donate.name && !isSliderMenuShown
          ? <DonateBottomButton />
          : null
      }

    </div>
  );
}
