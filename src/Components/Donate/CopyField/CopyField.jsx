import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import copy from 'copy-to-clipboard';
import translation from '../../../utils/translation';
import ModalMessage from '../../ModalMessage/ModalMessage';
import { setModalWindowText } from '../../../redux/modalWindow';
import './CopyField.scss';

export default function CopyField({
  value,
  label,
  isLabelVisible,
}) {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  const { modalWindowText } = useSelector((state) => state.modalWindowText);

  const { copyIconTitle } = translation[websiteLanguage].donate;
  const { modal } = translation[websiteLanguage];

  const dispatch = useDispatch();

  function copyToClipboard() {
    copy(value);
    dispatch(setModalWindowText(modal.copied));
  }

  // Keeping the svg code instead of an img tag to change the icon color without loading a new icon
  return (
    <div className="copyField__container">

      {modalWindowText ? <ModalMessage /> : null}

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
};

CopyField.defaultProps = {
  isLabelVisible: true,
};
