import React from 'react';
import { useSelector } from 'react-redux';
import PageNav from './PageNav/PageNav';
import { pages } from '../../../redux/activePage';
import { isUserDeviceDesktop } from '../../../utils/helpers';
import translation from '../../../utils/translation';
import './PageNavWrapper.scss';

export default function PageNavWrapper() {
  const { websiteLanguage } = useSelector((state) => state.websiteLanguage);
  const { activePage } = useSelector((state) => state.activePage);

  function isPageNavValidToBeRendered(currentPage) {
    if (currentPage.name === pages.screenshot && !isUserDeviceDesktop()) {
      return false;
    }
    if (currentPage.name === activePage) {
      return false;
    }
    return true;
  }

  return (
    <>
      {Object.keys(pages).map((item) => {
        if (isPageNavValidToBeRendered(pages[item])) {
          return (
            <PageNav
              key={pages[item].name}
              className={`pageNav ${pages[item].yellowBgc ? 'pageNav__yellow' : 'pageNav__light'}`}
              to={pages[item].path}
              ariaLabel={pages[item].ariaLabel}
              value={translation[websiteLanguage].nav[pages[item].name]}
              icon={pages[item].icon}
            />
          );
        }
        return null;
      })}
    </>
  );
}
