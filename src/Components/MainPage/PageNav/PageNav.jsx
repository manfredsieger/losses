import React from "react";
import './PageNav.scss';
import { Link } from 'react-router-dom';

export default function PageNav(props) {

  return (
    <p className={props.class}>
      <Link className="pageNav__link" to={props.to} aria-label={props.ariaLabel}>{props.value}</Link>
    </p>
  )
}
