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
      <div className="generalsItem__img-container">
        <img
          className="generalsItem__img"
          src={require(`../../../../img/${chartGenerals.shoulderMarks[rank]}`)}
          alt={`Shoulder mark of a ${chartGenerals.ranks[rank]}`}
          title={`${chartGenerals.shoulderMarkCaption} ${chartGenerals.ranks[rank]}`}
        />
      </div>

      <table className="generalsItem__description-container">

        <tbody>
          <tr className="generalsItem__text-line">
            <td className="generalsItem__caption generalsItem__name-caption">
              {`${chartGenerals.name}: `}
            </td>
            <td className="generalsItem__text generalsItem__name-text">
              {name}
            </td>
          </tr>

          <tr className="generalsItem__text-line">
            <td className="generalsItem__caption generalsItem__rank-caption">
              {`${chartGenerals.ranks.header}: `}
            </td>
            <td className="generalsItem__text generalsItem__rank-text">
              {chartGenerals.ranks[rank]}
            </td>
          </tr>

          <tr className="generalsItem__text-line">
            <td className="generalsItem__caption generalsItem__deathDate-caption">
              {`${chartGenerals.killed}: `}
            </td>
            <td className="generalsItem__text generalsItem__deathDate-text">
              {getFullDate(new Date(deathDate), language)}
            </td>
          </tr>

          <tr className="generalsItem__text-line">
            <td className="generalsItem__caption generalsItem__position-caption">
              {`${chartGenerals.position}: `}
            </td>
            <td className="generalsItem__text generalsItem__position-text">
              {position}
            </td>
          </tr>

          <tr className="generalsItem__text-line">
            <td className="generalsItem__caption generalsItem__status-caption">
              {`${chartGenerals.statuses.header}: `}
            </td>
            <td className="generalsItem__text generalsItem__status-text">
              {chartGenerals.statuses[status]}
            </td>
          </tr>

          <tr className="generalsItem__text-line">
            <td>
              <a
                className="generalsItem__caption generalsItem__source standardLink"
                href={source}
                target="_blank"
                rel="noreferrer"
              >
                {chartGenerals.source}
              </a>
            </td>
          </tr>
        </tbody>

      </table>
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
