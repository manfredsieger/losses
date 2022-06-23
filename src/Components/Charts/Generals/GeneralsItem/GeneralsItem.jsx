import React, { useEffect } from 'react';
import PropsTypes from 'prop-types';
import './GeneralsItem.scss';
import { useSelector } from 'react-redux';
import { getFullDate } from '../../../../utils/helpers';
import translation from '../../../../utils/translation';

export default function GeneralsItem({
  name, rank, deathDate, position, status, source,
}) {
  const { websiteLanguage } = useSelector((store) => store.websiteLanguage);
  const { language } = translation[websiteLanguage].main.dates;
  const { chartGenerals } = translation[websiteLanguage].charts;

  return (
    <li className="generalsItem__item">

      <div className="generalsItem__img-and-name-container">
        <img
          className="generalsItem__img"
          src={require(`../../../../img/${chartGenerals.shoulderMarks[rank]}`)}
          alt={`Shoulder mark of a ${chartGenerals.ranks[rank]}`}
          title={`${chartGenerals.shoulderMarkCaption} ${chartGenerals.ranks[rank]}`}
        />
        <p className="generalsItem__name">
          {name}
        </p>
      </div>

      <ul className="generalsItem__description-container">

        <li className="generalsItem__text-line">
          <p className="generalsItem__caption-and-dots-container">
            <span className="generalsItem__caption generalsItem__rank-caption">
              {chartGenerals.ranks.header}
            </span>
            <span className="generalsItem__points" />
          </p>
          <span className="generalsItem__text generalsItem__rank-text">
            {chartGenerals.ranks[rank]}
          </span>
        </li>

        <li className="generalsItem__text-line">
          <p className="generalsItem__caption-and-dots-container">
            <span className="generalsItem__caption generalsItem__deathDate-caption">
              {chartGenerals.killed}
            </span>
            <span className="generalsItem__points" />
          </p>
          <span className="generalsItem__text generalsItem__deathDate-text">
            <a
              className="generalsItem__source standardLink"
              href={source}
              target="_blank"
              rel="noreferrer"
            >
              {getFullDate(new Date(deathDate), language)}
            </a>
          </span>
        </li>

        <li className="generalsItem__text-line">
          <p className="generalsItem__caption-and-dots-container">
            <span className="generalsItem__caption generalsItem__position-caption">
              {chartGenerals.position}
            </span>
            <span className="generalsItem__points" />
          </p>
          <span className="generalsItem__text generalsItem__position-text">
            {position}
          </span>
        </li>

        <li className="generalsItem__text-line">
          <p className="generalsItem__caption-and-dots-container">
            <span className="generalsItem__caption generalsItem__status-caption">
              {chartGenerals.statuses.header}
            </span>
            <span className="generalsItem__points" />
          </p>
          <span className="generalsItem__text generalsItem__status-text">
            {chartGenerals.statuses[status]}
          </span>
        </li>

      </ul>

    </li>
  );
}

GeneralsItem.propTypes = {
  name: PropsTypes.string.isRequired,
  rank: PropsTypes.number.isRequired,
  deathDate: PropsTypes.string.isRequired,
  position: PropsTypes.string.isRequired,
  status: PropsTypes.number.isRequired,
  source: PropsTypes.string.isRequired,
};
