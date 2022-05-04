import React from 'react';
import PropsTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './PageNavWrapper.scss';
// components
import PageNav from './PageNav/PageNav';
// redux
import { pages } from '../../../utils/pageNavConfig';
// utils
import translation from '../../../utils/translation';

export default function PageNavWrapper({ setIsSliderMenuShown }) {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  const { activePage } = useSelector((state) => state.activePage);

  function isPageNavValidToBeRendered(currentPage) {
    return currentPage.name !== activePage;
  }

  return (
    <ul className="pageNav_wrapper__container">
      {Object.keys(pages).map((item) => {
        if (isPageNavValidToBeRendered(pages[item])) {
          return (
            <li
              className="pageNav_wrapper__item"
              key={pages[item].name}
            >
              <PageNav
                className={`pageNav ${pages[item].yellowBgc ? 'pageNav__yellow' : 'pageNav__simple'}`}
                to={pages[item].path}
                ariaLabel={pages[item].ariaLabel}
                value={translation[websiteLanguage].nav[pages[item].name]}
                icon={pages[item].icon}
                setIsSliderMenuShown={setIsSliderMenuShown}
              />
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
}

PageNavWrapper.propTypes = {
  setIsSliderMenuShown: PropsTypes.func.isRequired,
};
