import React, { useState, useEffect } from 'react';
import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.scss';
import MainPage from './Components/MainPage/MainPage';
import Donate from './Components/Donate/Donate';
import Footer from './Components/Footer/Footer';
import Charts from './Components/Charts/Charts';
import Screenshot from './Components/Screenshot/Screenshot';
import Logo from './Components/Logo/Logo';
import Navigation from './Components/Navigation/Navigation';
import BurgerButton from './Components/BurgerButton/BurgerButton';
import DonateBottomButton from './Components/DonateBottomButton/DonateBottomButton';
import { isUserDeviceValidForScreenshot } from './utils/helpers';
import { pages, stylePages } from './redux/activePage';

export default function App() {
  const { activePage } = useSelector((state) => state.activePage);
  const [isSliderMenuShown, setIsSliderMenuShown] = useState(false);

  useEffect(() => {
    if (isSliderMenuShown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [isSliderMenuShown]);

  return (
    <div className={stylePages.red.includes(activePage) ? 'website-background-red' : 'website-background-pink'}>
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

        <div className="website__grid-center">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/charts" element={<Charts />} />
            {
            isUserDeviceValidForScreenshot()
              ? <Route path="/screenshot" element={<Screenshot />} />
              : null
            }
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>

          {
            activePage !== pages.donate.name && !isSliderMenuShown
              ? <DonateBottomButton />
              : null
          }

          <Footer />
        </div>

        <div className="website__grid-right">
          <div className="website__fake-element" />
          <Logo />
        </div>

      </div>
    </div>
  );
}
