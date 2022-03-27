import React from "react";
import './RotateWarning.scss';
import { useSelector } from "react-redux";
import translation from "../../../utils/translation";

export default function RotateWarning() {

  const { websiteLanguage } = useSelector(store => store.websiteLanguage);

  return (
    <div className="rotate__container">
      <img
        className="rotate__img"
        src={require('./../../../img/rotate.svg')}
        alt="Rotate screen to the landscape mode"
        title="Rotate screen to the landscape mode"
        width="50" />
      <p className="rotate__text">{translation[websiteLanguage].charts.rotateWarning}</p>
    </div>
  )
}
