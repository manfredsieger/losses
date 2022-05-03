import React from 'react';
import './Loader.scss';
import translation from '../../utils/translation';

export default function Loader() {
  return (
    <div className="loader">
      <div className="loader__part" />
      <div className="loader__part" />
      <div className="loader__part" />
      <div className="loader__part" />
    </div>
  );
}