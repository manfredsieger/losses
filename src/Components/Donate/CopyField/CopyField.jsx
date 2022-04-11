import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import copy from 'copy-to-clipboard';
import translation from '../../../utils/translation';
import './CopyField.scss';

export default function CopyField({
  value,
  label,
  isLabelVisible,
  setIsModalVisible,
}) {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  const { copyIconTitle } = translation[websiteLanguage].donate;

  async function copyToClipboard() {
    copy(value);
    setIsModalVisible(true);
    setTimeout(() => {
      setIsModalVisible(false);
    }, 1200);
  }

  // Keeping the svg code instead of an img tag to change the icon color without loading a new icon
  return (
    <div className="copyField__container">

      <span className={`copyField__label ${isLabelVisible ? '' : 'visually-hidden'}`}>
        {label}
        :
      </span>
      <div className="copyField__input-wrapper">
        <p className="copyField__input">
          {value}
        </p>
        <button
          className="copyField__copyButton"
          onClick={copyToClipboard}
          aria-label="Button to copy the data from input"
          title={copyIconTitle}
          type="button"
        >

          <svg className="copyField__copyIcon" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 0v14h-4v4H0V4h4V0h14zm-5 5H1v12h12V5zm4-4H5v3h9v9h3V1z" fill="#000" />
          </svg>

        </button>
      </div>
    </div>
  );
}

CopyField.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isLabelVisible: PropTypes.bool,
  setIsModalVisible: PropTypes.func.isRequired,
};

CopyField.defaultProps = {
  isLabelVisible: true,
};
