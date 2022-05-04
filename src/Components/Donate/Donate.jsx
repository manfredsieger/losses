import React, { useEffect } from 'react';
import './Donate.scss';
import { useDispatch, useSelector } from 'react-redux';
// components
import CopyField from './CopyField/CopyField';
import ExpandableSection from './ExpandableSection/ExpandableSection';
import RegularSection from './RegularSection/RegularSection';
// utils
import {
  donationsCBA,
  donationsEastSOS,
  donationsProliska,
  donationsVoicesOfChildren,
} from '../../utils/donations';
import translation from '../../utils/translation';
import { scrollToTop } from '../../utils/helpers';
// redux
import { setActivePage } from '../../redux/activePage';
import { pages } from '../../utils/pageNavConfig';

export default function Donate() {
  const { websiteLanguage } = useSelector((store) => store.websiteLanguage);
  const { military, civil, header } = translation[websiteLanguage].donate;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActivePage(pages.donate.name));
    scrollToTop();
  }, []);

  function renderCopyField(objectToRender) {
    return (
      Object.keys(objectToRender).map((item) => (
        <CopyField
          key={`${objectToRender[item].value}_${objectToRender[item].label}`}
          value={objectToRender[item].value}
          isLabelVisible={objectToRender[item].isLabelVisible}
          label={objectToRender[item].label}
        />
      ))
    );
  }

  return (
    <>
      <h1
        className="donate__header standardHeader"
        aria-label="Section providing banking details to support Defenders of Ukraine and Ukrainian civilians"
      >
        {header}
      </h1>

      <main className="donate__page-container page-container">
        <article className="donate__article--military">
          <h2 className="donate__subheader">{military.header}</h2>
          <ul className="donate__list">
            <li className="donate__item">
              <h3 className="donate__organization-header">
                <span className="donate__organization-header-text">{military.comeBackAlive.orgName}</span>
              </h3>
              <h4 className="donate__country-header">{military.comeBackAlive.donationsOutside.header}</h4>
              <RegularSection
                header={military.comeBackAlive.donationsOutside.fondy.header}
                para={military.comeBackAlive.donationsOutside.fondy.text}
                linkText="fondy.eu"
                link="https://pay.fondy.eu/api/checkout?button=dc75627e73000f3b6fb87c83db2fc64767fe1b63"
                image="fondy.svg"
              />
              <ExpandableSection
                subHeader={military.comeBackAlive.donationsOutside.swift}
                copyFields={renderCopyField(donationsCBA.swift)}
              />
              <ExpandableSection
                subHeader={military.comeBackAlive.donationsOutside.crypto}
                copyFields={renderCopyField(donationsCBA.crypto)}
              />

              <h4 className="donate__country-header">{military.comeBackAlive.donationsInside.header}</h4>
              <ExpandableSection
                subHeader={military.comeBackAlive.donationsInside.oschadbank}
                copyFields={renderCopyField(donationsCBA.ukraine.oschadbank)}
              />
              <ExpandableSection
                subHeader={military.comeBackAlive.donationsInside.privatbank}
                copyFields={renderCopyField(donationsCBA.ukraine.privatbank)}
              />
              <ExpandableSection
                subHeader={military.comeBackAlive.donationsInside.crypto}
                copyFields={renderCopyField(donationsCBA.crypto)}
              />

              <section className="donate__block donate__block--cda-contacts">
                <h4
                  className="donate__subheader"
                  style={{ marginBottom: '41px' }}
                >
                  {military.comeBackAlive.contacts.header}
                </h4>
                <p className="donate__paragraph">
                  <strong className="donate__strong">{military.comeBackAlive.contacts.address.header}</strong>
                  <span className="donate__text">{military.comeBackAlive.contacts.address.text1}</span>
                  <span className="donate__text">{military.comeBackAlive.contacts.address.text2}</span>
                </p>
                <p className="donate__paragraph">
                  <strong className="donate__strong">{military.comeBackAlive.contacts.phone.header}</strong>
                  <span className="donate__text">
                    <a
                      className="donate__tel-number"
                      href={military.comeBackAlive.contacts.phone.tel1Tel}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {military.comeBackAlive.contacts.phone.tel1Caption}
                    </a>
                    {', '}
                    <a
                      className="donate__tel-number"
                      href={military.comeBackAlive.contacts.phone.tel2Tel}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {military.comeBackAlive.contacts.phone.tel2Caption}
                    </a>
                  </span>
                  <span className="donate__text">{military.comeBackAlive.contacts.phone.workingHours}</span>
                </p>
                <p className="donate__paragraph">
                  <span className="donate__text">{military.comeBackAlive.website.text}</span>
                  <a className="donate__link" href="https://www.comebackalive.in.ua" rel="noopener noreferrer" target="_blank">www.comebackalive.in.ua</a>
                </p>
              </section>

            </li>
          </ul>
        </article>

        <article className="donate__article--civil">
          <h2 className="donate__subheader">{civil.header}</h2>
          <ul className="donate__list">

            <li className="donate__item">
              <h3 className="donate__organization-header">
                <span className="donate__organization-header-text">{civil.voicesOfChildren.header}</span>
              </h3>
              <RegularSection
                header={civil.voicesOfChildren.patreon}
                link="https://www.patreon.com/voices_org_ua"
                linkText="patreon.com"
                image="patreon.svg"
              />
              <ExpandableSection
                subHeader={civil.voicesOfChildren.crypto}
                copyFields={renderCopyField(donationsVoicesOfChildren.crypto)}
              />
              <ExpandableSection
                subHeader={civil.voicesOfChildren.eur}
                copyFields={renderCopyField(donationsVoicesOfChildren.eur)}
              />
              <ExpandableSection
                subHeader={civil.voicesOfChildren.usd}
                copyFields={renderCopyField(donationsVoicesOfChildren.usd)}
              />
              <ExpandableSection
                subHeader={civil.voicesOfChildren.uah}
                copyFields={renderCopyField(donationsVoicesOfChildren.uah)}
              />
              <RegularSection
                header={civil.voicesOfChildren.other}
                link="https://voices.org.ua/en/donat/"
                linkText="voices.org.ua"
              />
            </li>

            <li className="donate__item">
              <h3 className="donate__organization-header">
                <span className="donate__organization-header-text">{civil.eastSOS.header}</span>
              </h3>
              <ExpandableSection
                subHeader={civil.eastSOS.usd}
                copyFields={renderCopyField(donationsEastSOS.usd)}
              />
              <ExpandableSection
                subHeader={civil.eastSOS.eur}
                copyFields={renderCopyField(donationsEastSOS.eur)}
              />
              <ExpandableSection
                subHeader={civil.eastSOS.uah}
                copyFields={renderCopyField(donationsEastSOS.uah)}
              />
            </li>

            <li className="donate__item">
              <h3 className="donate__organization-header">
                <span className="donate__organization-header-text">{civil.proliska.header}</span>
              </h3>
              <ExpandableSection
                subHeader={civil.proliska.anyBank}
                copyFields={renderCopyField(donationsProliska.anyBank)}
              />
              <ExpandableSection
                subHeader={civil.proliska.swift}
                copyFields={renderCopyField(donationsProliska.swift)}
              />
            </li>
          </ul>

        </article>
      </main>
    </>
  );
}
