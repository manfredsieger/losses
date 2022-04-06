import React from 'react';
import PropsTypes from 'prop-types';
import './PageNav.scss';
import { Link } from 'react-router-dom';

export default function PageNav({
  className, to, ariaLabel, value, icon, setIsSliderMenuShown,
}) {
  return (
    <Link
      className={className}
      to={to}
      aria-label={ariaLabel}
      onClick={() => setIsSliderMenuShown(false)}
    >
      <img
        className="pageNav__icon"
        src={require(`../../../../img/${icon}`)}
        alt={value}
      />
      <span className="pageNav__link">
        {value}
      </span>
    </Link>
  );
}

PageNav.propTypes = {
  className: PropsTypes.string.isRequired,
  to: PropsTypes.string.isRequired,
  ariaLabel: PropsTypes.string.isRequired,
  value: PropsTypes.string.isRequired,
  icon: PropsTypes.string.isRequired,
  setIsSliderMenuShown: PropsTypes.func.isRequired,
};
