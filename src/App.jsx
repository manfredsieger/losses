import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import MainPage from './Components/MainPage/MainPage';
import Donate from './Components/Donate/Donate';
import Footer from './Components/Footer/Footer';
import LangButton from './Components/LangButton/LangButton';
import Charts from './Components/Charts/Charts';

export default function App() {

  return (
    <div>
      <LangButton />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}
