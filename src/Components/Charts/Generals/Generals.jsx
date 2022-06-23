import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Generals.scss';
import GeneralsItem from './GeneralsItem/GeneralsItem';
import { setModalWindowText } from '../../../redux/modalWindow';
import translation from '../../../utils/translation';
import { getFullDate } from '../../../utils/helpers';

export default function Generals() {
  const { websiteLanguage } = useSelector((store) => store.websiteLanguage);
  const [generals, setGenerals] = useState([]);
  const { chartGenerals } = translation[websiteLanguage].charts;
  const NUM_OF_STARS_TO_RENDER = 3;

  const starImg = (
    <svg className="generals__star-svg" viewBox="0 0 147.43533325195312 142.21018981933594" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="147.43533325195312px" height="142.21018981933594px">
      <rect className="generals__star-svg-rect-1" x="0" y="0" width="147.43533325195312" height="142.21018981933594" />
      <g transform="matrix(1, 0, 0, 1, 434.5827851059439, 0.000010717035365814809)">
        <rect className="generals__star-svg-rect-2" x="0" y="0" width="530.83447265625" height="980" transform="matrix(0.9971332550048826, 0, 0, 0.9971332550048826, -607.4755955137672, -500.07431442434415)" />
        <g transform="matrix(1.5640608072280884, 0, 0, 1.5640608072280884, -761.4805297851562, -410.87915039062506)">
          <path className="generals__star-svg-path" stroke="null" d="m303.1207,297.33129c-0.34866,-1.07285 -1.27573,-1.85472 -2.39184,-2.01671l-29.07009,-4.22424l-13.00063,-26.34223c-0.49919,-1.01141 -1.52918,-1.65164 -2.65714,-1.65164s-2.15795,0.64023 -2.65714,1.65164l-13.00064,26.34223l-29.07008,4.22424c-1.11612,0.16199 -2.04338,0.94386 -2.39184,2.01671c-0.34866,1.07265 -0.05788,2.2502 0.74987,3.03741l21.03506,20.50446l-4.96581,28.95275c-0.19063,1.11157 0.26649,2.23499 1.17893,2.89814c0.91225,0.66256 2.1218,0.75046 3.12057,0.22559l26.00108,-13.66971l26.00107,13.66971c0.43361,0.22777 0.90712,0.34037 1.37865,0.34037c0.61435,0 1.22575,-0.19083 1.74192,-0.56576c0.91245,-0.66295 1.36956,-1.78657 1.17893,-2.89814l-4.96581,-28.95275l21.03507,-20.50447c0.80775,-0.7876 1.09853,-1.96514 0.74987,-3.0376z" />
        </g>
      </g>
    </svg>
  );

  useEffect(async () => {
    await fetch('https://api.invadersnotwelcome.in.ua/general')
      .then((res) => res.json())
      .then((data) => setGenerals(data.sort((a, b) => new Date(a.deathDate) - new Date(b.deathDate))))
      .catch((err) => {
        // dispatch(setModalWindowText(errorGettingLosses));
        console.error(err.message);
      });
  }, []);

  return (
    <article className="generals__article">
      <h2 className="generals__header standardHeader">{chartGenerals.header}</h2>

      <ul className="generals__stars">
        {
          [...Array(NUM_OF_STARS_TO_RENDER)].map(() => (
            <li className="generals__star-wrapper" key={Math.random()}>
              {starImg}
            </li>
          ))
        }
      </ul>

      <p className="generals__subheader">
        {`${chartGenerals.subHeader.part1} `}
        <a
          href={chartGenerals.subHeader.source}
          className="standardLink generals__subheader-link"
          target="_blank"
          rel="noreferrer"
        >
          {chartGenerals.subHeader.part2}
        </a>
        {` ${chartGenerals.subHeader.part3}`}
      </p>

      <ul className="generals__items-container">
        {generals.length !== 0
          ? generals.map((general) => (
            <GeneralsItem
              key={general[`name_${websiteLanguage}`]}
              name={general[`name_${websiteLanguage}`]}
              rank={general.rank}
              deathDate={general.deathDate}
              position={general[`position_${websiteLanguage}`]}
              status={general.status}
              source={general.source}
            />
          ))
          : null}
      </ul>
    </article>
  );
}
