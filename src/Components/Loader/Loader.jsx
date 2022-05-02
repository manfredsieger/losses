import React from 'react';
import './Loader.scss';

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