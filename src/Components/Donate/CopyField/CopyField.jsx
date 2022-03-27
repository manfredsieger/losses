import React from "react";
import './CopyField.scss';
import translation from "../../../utils/translation";
import { useSelector } from "react-redux";
import copy from 'copy-to-clipboard';

export default function CopyField(props) {

  const { websiteLanguage } = useSelector(state => state.websiteLanguage);

  async function copyToClipboard() {
    if (!copy(props.value)) {
      alert('Sorry, your device wants you to copy this string manually')
    }
    // try {
    //   await navigator.clipboard.writeText(props.value);
    // } catch(err) {
    //   console.log('Error copying');
    // }
  }

  // Keeping the svg code instead of an img tag to change the icon`s color without loading a new icon
  return(
    <div className="copyField__container">
      <span className={`copyField__label ${props.isLabelVisible ? '' : 'visually-hidden'}`}>
        {props.label}:
      </span>
      <div className="copyField__input-wrapper">
        <p className="copyField__input">
            {props.value}
        </p>
        <button
          className="copyField__copyButton"
          onClick={copyToClipboard}
          aria-label="Button to copy the data from input"
          title={translation[websiteLanguage].donate.copyIconTitle}>
          <svg className="copyField__copyIcon" x="0px" y="0px" viewBox="0 0 460 460">
            <path d="M425.934,0H171.662c-18.122,0-32.864,14.743-32.864,32.864v77.134h30V32.864c0-1.579,1.285-2.864,2.864-2.864h254.272
              c1.579,0,2.864,1.285,2.864,2.864v254.272c0,1.58-1.285,2.865-2.864,2.865h-74.729v30h74.729
              c18.121,0,32.864-14.743,32.864-32.865V32.864C458.797,14.743,444.055,0,425.934,0z"/>
            <path d="M288.339,139.998H34.068c-18.122,0-32.865,14.743-32.865,32.865v254.272C1.204,445.257,15.946,460,34.068,460h254.272
              c18.122,0,32.865-14.743,32.865-32.864V172.863C321.206,154.741,306.461,139.998,288.339,139.998z M288.341,430H34.068
              c-1.58,0-2.865-1.285-2.865-2.864V172.863c0-1.58,1.285-2.865,2.865-2.865h254.272c1.58,0,2.865,1.285,2.865,2.865v254.273h0.001
              C291.206,428.715,289.92,430,288.341,430z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

