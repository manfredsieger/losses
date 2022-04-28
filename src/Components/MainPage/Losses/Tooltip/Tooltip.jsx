import React from 'react';
import PropsTypes from 'prop-types';
import { Popup } from 'semantic-ui-react';
import infoSvg from '../../../../img/info.svg';
import './Tooltip.scss';
import { getWordWithBigFirstLetter } from '../../../../utils/helpers';

export default function Tooltip({ itemDescription }) {
  const style = {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: '10px',
    fontSize: '14px',
  };

  return (
    <Popup
      className="tooltip__text"
      content={getWordWithBigFirstLetter(itemDescription)}
      trigger={(
        <button className="tooltip__info-btn" type="button">
          <img className="tooltip__info-img" src={infoSvg} alt="Info button" width="10" />
        </button>
      )}
      style={style}
      hideOnScroll
    />
  );
}

Tooltip.propTypes = {
  itemDescription: PropsTypes.string.isRequired,
};
