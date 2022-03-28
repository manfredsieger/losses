import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ExpandableSection.scss';
import { useSelector } from 'react-redux';
import translation from '../../../utils/translation';

export default function ExpandableSection({ subHeader, copyFields }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);

  return (
    <section className="donate__section">
      <h4
        className="donate__sub-header donate__sub-header--expandable"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="donate__text">{subHeader}</span>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded
            ? translation[websiteLanguage].donate.expandBtn.close
            : translation[websiteLanguage].donate.expandBtn.open}
          className={`donate__move-btn ${isExpanded ? 'donate__shrink-btn' : 'donate__expand-btn'}`}
          title={isExpanded
            ? translation[websiteLanguage].donate.expandBtn.close
            : translation[websiteLanguage].donate.expandBtn.open}
          type="button"
        />
      </h4>
      <div className={`donate__copyFields-container ${isExpanded ? 'donate__copyFields-container--visible' : ''}`}>
        {copyFields}
      </div>
    </section>
  );
}

ExpandableSection.propTypes = {
  subHeader: PropTypes.string.isRequired,
  copyFields: PropTypes.node.isRequired,
};
