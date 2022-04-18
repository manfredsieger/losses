import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ExpandableSection.scss';
import { useSelector } from 'react-redux';
import translation from '../../../utils/translation';

export default function ExpandableSection({ subHeader, copyFields }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  const { open, close } = translation[websiteLanguage].donate.expandBtn;

  return (
    <section className="donate__block expandable-section__section">
      <button
        className="expandable-section__header expandable-section__header--expandable"
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ marginBottom: isExpanded ? '20px' : '0' }}
        type="button"
      >
        <span className="expandable-section__sub-header-wrapper">
          <span className="donate-section__header expandable-section__sub-header-text">{subHeader}</span>
        </span>
        <span
          className={`expandable-section__move-btn ${isExpanded ? '' : 'expandable-section__expand-btn'}`}
          aria-label={isExpanded ? close : open}
          title={isExpanded ? close : open}
        />
      </button>
      <div className={`expandable-section__copyFields-container ${isExpanded ? 'expandable-section__copyFields-container--visible' : ''}`}>
        {copyFields}
      </div>
    </section>
  );
}

ExpandableSection.propTypes = {
  subHeader: PropTypes.string.isRequired,
  copyFields: PropTypes.node.isRequired,
};
