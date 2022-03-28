import React from 'react';
import PropsTypes from 'prop-types';
import './PageNav.scss';
import { Link } from 'react-router-dom';

export default function PageNav({
  className, to, ariaLabel, value,
}) {
  return (
    <p className={className}>
      <Link className="pageNav__link" to={to} aria-label={ariaLabel}>{value}</Link>
    </p>
  );
}

PageNav.propTypes = {
  className: PropsTypes.string.isRequired,
  to: PropsTypes.string.isRequired,
  ariaLabel: PropsTypes.string.isRequired,
  value: PropsTypes.string.isRequired,
};
