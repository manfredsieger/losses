import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import MainPage from './Components/MainPage/MainPage';
import Donate from './Components/Donate/Donate';
import Footer from './Components/Footer/Footer';
import Charts from './Components/Charts/Charts';
import Screenshot from './Components/Screenshot/Screenshot';
import Logo from './Components/Logo/Logo';

export default function App() {
  return (
    <div>
      <Logo />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/screenshot" element={<Screenshot />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}
