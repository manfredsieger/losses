import React, { useEffect, Fragment } from "react";
import './Donate.scss';
import CopyField from "./CopyField/CopyField";
import ExpandableSection from './ExpandableSection/ExpandableSection';
import PageNav from "../MainPage/PageNav/PageNav";
import {
  donationsCBA,
  donationsEastSOS,
  donationsProliska,
  donationsVoicesOfChildren } from "../../utils/donations";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage, pages } from '../../redux/activePage';
import translation from "./../../utils/translation";

export default function Donate() {

  const { websiteLanguage } = useSelector(store => store.websiteLanguage);
  const military = translation[websiteLanguage].donate.military;
  const civil = translation[websiteLanguage].donate.civil;

  const dispatch = useDispatch();

  useEffect(() => dispatch(setActivePage(pages.donate)));

  function renderCopyField(objectToRender) {
    return (
      Object.keys(objectToRender).map(item => {
        return (
          <CopyField
            key={`${objectToRender[item].value}_${objectToRender[item].label}`}
            value={objectToRender[item].value}
            isLabelVisible={objectToRender[item].isLabelVisible}
            label={objectToRender[item].label} />
        )
      })
    )
  }

  return (
    <Fragment>

      <div className="donate__page-nav-wrapper">
        <PageNav
          class="pageNav pageNav__red"
          to="/"
          ariaLabel="Go back to the main page button"
          value={translation[websiteLanguage].donate.mainPageBtn}/>
      </div>

      <div className="donate__container">
        <section className="donate__section--military">
          <h2 className="donate__header">{military.header}</h2>
          <ol className="donate__list">
            <li>
              <h3 className="donate__organization-header">{military.comeBackAlive.orgName}</h3>
              <h4 className="donate__sub-header donate__sub-header--important">{military.comeBackAlive.donationsOutside.header}</h4>
              <section className="donate__section">
                <h4 className="donate__sub-header"><a href="https://pay.fondy.eu/api/checkout?button=dc75627e73000f3b6fb87c83db2fc64767fe1b63" rel="noopener noreferrer" target="_blank">{military.comeBackAlive.donationsOutside.fondy.header}</a></h4>
                <p className="donate__paragraph">{military.comeBackAlive.donationsOutside.fondy.text}</p>
              </section>
              <ExpandableSection
                subHeader={military.comeBackAlive.donationsOutside.swift}
                copyFields={renderCopyField(donationsCBA.swift)}/>
              <ExpandableSection
                subHeader={military.comeBackAlive.donationsOutside.crypto}
                copyFields={renderCopyField(donationsCBA.crypto)}/>
              <section className="donate__section">
                <h4 className="donate__sub-header">{military.comeBackAlive.contacts.header}</h4>
                <p className="donate__paragraph"><strong>{military.comeBackAlive.contacts.address.header}</strong><br/>{military.comeBackAlive.contacts.address.text1}<br/>{military.comeBackAlive.contacts.address.text2}</p>
                <p className="donate__paragraph"><strong>{military.comeBackAlive.contacts.phone.header}</strong><br/>{military.comeBackAlive.contacts.phone.text1}<br/>{military.comeBackAlive.contacts.phone.text2}</p>
              </section>
              <section className="donate__section">
                <h4 className="donate__sub-header">{military.comeBackAlive.website.header}</h4>
                <p className="donate__paragraph">{military.comeBackAlive.website.text}<a href="https://www.comebackalive.in.ua" rel="noopener noreferrer" target="_blank">www.comebackalive.in.ua</a></p>
              </section>

              <h4 className="donate__sub-header donate_sub-header--important">{military.comeBackAlive.donationsInside.header}</h4>
              <ExpandableSection
                subHeader={military.comeBackAlive.donationsInside.oschadbank}
                copyFields={renderCopyField(donationsCBA.ukraine.oschadbank)}/>
              <ExpandableSection
                subHeader={military.comeBackAlive.donationsInside.privatbank}
                copyFields={renderCopyField(donationsCBA.ukraine.privatbank)}/>
              <ExpandableSection
                subHeader={military.comeBackAlive.donationsInside.crypto}
                copyFields={renderCopyField(donationsCBA.crypto)}/>
            </li>
          </ol>
        </section>

        <section className="donate__section--civil">
          <h2 className="donate__header">{civil.header}</h2>
          <ol className="donate__list">

            <li>
              <h3 className="donate__organization-header">{civil.voicesOfChildren.header}</h3>
              <section className="donate__section">
                <h4 className="donate__sub-header">{civil.voicesOfChildren.patreon}</h4>
                <p className="donate__paragraph" style={{textAlign: 'center'}}><a href="https://www.patreon.com/voices_org_ua" rel="noopener noreferrer" target="_blank">Patreon</a></p>
              </section>
              <ExpandableSection
                subHeader={civil.voicesOfChildren.crypto}
                copyFields={renderCopyField(donationsVoicesOfChildren.crypto)}/>
              <ExpandableSection
                subHeader={civil.voicesOfChildren.eur}
                copyFields={renderCopyField(donationsVoicesOfChildren.eur)}/>
                <ExpandableSection
                subHeader={civil.voicesOfChildren.usd}
                copyFields={renderCopyField(donationsVoicesOfChildren.usd)}/>
              <ExpandableSection
                subHeader={civil.voicesOfChildren.uah}
                copyFields={renderCopyField(donationsVoicesOfChildren.uah)}/>
              <section className="donate__section">
                <h4 className="donate__sub-header">{civil.voicesOfChildren.other}</h4>
                <p className="donate__paragraph" style={{textAlign: 'center'}}><a href="https://voices.org.ua/en/donat/" rel="noopener noreferrer" target="_blank">voices.org.ua</a></p>
              </section>
            </li>

            <li>
              <h3 className="donate__organization-header">{civil.eastSOS.header}</h3>
              <ExpandableSection
                subHeader={civil.eastSOS.usd}
                copyFields={renderCopyField(donationsEastSOS.usd)}/>
              <ExpandableSection
                subHeader={civil.eastSOS.eur}
                copyFields={renderCopyField(donationsEastSOS.eur)}/>
              <ExpandableSection
                subHeader={civil.eastSOS.uah}
                copyFields={renderCopyField(donationsEastSOS.uah)}/>
            </li>

            <li>
              <h3 className="donate__organization-header">{civil.proliska.header}</h3>
              <ExpandableSection
                subHeader={civil.proliska.anyBank}
                copyFields={renderCopyField(donationsProliska.anyBank)}/>
              <ExpandableSection
                subHeader={civil.proliska.swift}
                copyFields={renderCopyField(donationsProliska.swift)}/>
            </li>
          </ol>
          
        </section>
      </div>
    </Fragment>
  )
}