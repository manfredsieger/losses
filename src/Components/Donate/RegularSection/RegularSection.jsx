import React from 'react';
import PropsTypes from 'prop-types';
import './RegularSection.scss';

export default function RegularSection({
  header, para, linkText, link, image, alt,
}) {
  return (
    <a
      className={`donate__block regular-section ${link ? 'regular-section--has-link' : ''}`}
      href={link || '#'}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="regular-section__text-wrapper">
        <h4 className="regular-section__header donate-section__header">{header}</h4>
        {
        para ? (<p className="regular-section__paragraph">{para}</p>) : null
        }
        {
        link
          ? (<span className="donate__link">{linkText}</span>) : null
        }
      </div>
      {
        image
          ? (
            <div className="regular-section__image-wrapper">
              <img className="regular-section__image" src={require(`../../../img/${image}`)} alt={alt} />
            </div>
          )
          : null
      }
    </a>
  );
}

RegularSection.propTypes = {
  header: PropsTypes.string.isRequired,
  para: PropsTypes.string,
  linkText: PropsTypes.string,
  link: PropsTypes.string,
  image: PropsTypes.string,
  alt: PropsTypes.string,
};

RegularSection.defaultProps = {
  para: '',
  linkText: '',
  link: '',
  image: '',
  alt: '',
};
