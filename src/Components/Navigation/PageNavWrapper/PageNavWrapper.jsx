import React from 'react';
import PropsTypes from 'prop-types';
import { useSelector } from 'react-redux';
import PageNav from './PageNav/PageNav';
import { pages } from '../../../redux/activePage';
import { isUserDeviceDesktop } from '../../../utils/helpers';
import translation from '../../../utils/translation';
import './PageNavWrapper.scss';

export default function PageNavWrapper({ setIsSliderMenuShown }) {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  const { activePage } = useSelector((state) => state.activePage);

  function isPageNavValidToBeRendered(currentPage) {
    if (currentPage.name === pages.screenshot.name && !isUserDeviceDesktop()) {
      return false;
    }
    if (currentPage.name === activePage) {
      return false;
    }
    return true;
  }

  return (
    <ul className="pageNav_wrapper__container">
      {Object.keys(pages).map((item) => {
        if (isPageNavValidToBeRendered(pages[item])) {
          return (
            <li className="pageNav_wrapper__item">
              <PageNav
                key={pages[item].name}
                className={
                  `pageNav
                  ${pages[item].yellowBgc ? 'pageNav__yellow' : 'pageNav__simple'}
                  ${pages[item].name === pages.losses.name ? 'pageNav__losses' : ''}`
                }
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
