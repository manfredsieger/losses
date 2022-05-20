import React, { useEffect, useState } from 'react';
import './Generals.scss';
import shoulderMark from '../../../img/gen1.svg';
import { setModalWindowText } from '../../../redux/modalWindow';

export default function Generals() {
  const [generals, setGenerals] = useState([]);

  useEffect(async () => {
    await fetch('https://api.invadersnotwelcome.in.ua/general')
      .then((res) => res.json())
      .then((data) => setGenerals(data))
      .catch((err) => {
        // dispatch(setModalWindowText(errorGettingLosses));
        console.error(err.message);
      });
  }, []);

  return (
    <ul className="generals__item-container">
      {generals.length !== 0 ? generals.map((general) => (
        <li className="generals__item">
          <div className="generals__img-container">
            <img className="generals__img" src={shoulderMark} alt="dfgdfg" />
          </div>
          <ul className="generals__text-container">
            <li className="generals__text-line">
              <span className="generals__text-name">Name: </span>
              <span className="generals__text">{general.name_eng}</span>
            </li>
            <li className="generals__text-line">
              <span className="generals__text-name">Rank: </span>
              <span className="generals__text">{general.rank}</span>
            </li>
            <li className="generals__text-line">
              <span className="generals__text-name">Killed: </span>
              <span className="generals__text">{new Date(general.deathDate).toLocaleString('en-Us', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </li>
            <li className="generals__text-line">
              <span className="generals__text-name">Position: </span>
              <span className="generals__text">{general.position_eng}</span>
            </li>
            <li className="generals__text-line">
              <span className="generals__text-name">Status: </span>
              <span className="generals__text">{general.status}</span>
            </li>
            <li className="generals__text-line">
              <a href={general.source} target="_blank" rel="noreferrer">Source</a>
            </li>
          </ul>
        </li>
      )) : null}
    </ul>
  );
}
