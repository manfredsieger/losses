import React from 'react';
import PropsTypes from 'prop-types';
import './RegularSection.scss';

export default function RegularSection({
  header, para, linkText, link, image, alt,
}) {
  return (
    <section className="donate__block regular-section">
      <div className="regular-section__text-wrapper">
        <h4 className="regular-section__header donate-section__header">{header}</h4>
        {
        para
          ? (
            <p className="regular-section__paragraph">
              {para}
            </p>
          )
          : null
        }
        {
        link
          ? (
            <a className="donate__link" href={link} rel="noopener noreferrer" target="_blank">
              {linkText}
            </a>
          )
          : null
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
    </section>
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
