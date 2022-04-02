import React from 'react';
import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.scss';
import './Components/PageNavWrapper/PageNav/PageNav.scss';
import MainPage from './Components/MainPage/MainPage';
import Donate from './Components/Donate/Donate';
import Footer from './Components/Footer/Footer';
import Charts from './Components/Charts/Charts';
import Screenshot from './Components/Screenshot/Screenshot';
import Logo from './Components/Logo/Logo';
import LangButton from './Components/LangButton/LangButton';
import PageNavWrapper from './Components/PageNavWrapper/PageNavWrapper';
import { isUserDeviceDesktop } from './utils/helpers';
import { stylePages } from './redux/activePage';

export default function App() {
  const { activePage } = useSelector((state) => state.activePage);

  return (
    <>
      <Logo />

      <nav className="navigation-wrapper">
        <LangButton />
        <PageNavWrapper />
      </nav>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/charts" element={<Charts />} />
        {
        isUserDeviceDesktop()
          ? <Route path="/screenshot" element={<Screenshot />} />
          : null
        }
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <hr className={`app__line ${stylePages.red.includes(activePage) ? 'app__line--red' : 'app__line--grey'}`} />
      <Footer />
    </>
  );
}
