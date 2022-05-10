/**
 * Website languages
 */
export default {
  eng: 'eng',
  ua: 'ua',
};

/**
 * Languages to configure how dates are rendered
 * @type {{ua: string, eng: string}}
 */
export const datesLanguages = {
  eng: 'en-us',
  ua: 'uk-Ua',
};

/**
 * Difference between dates and website languages:
 * - website lang is written like 'eng', but the dates lang is written like 'en-us', 'en-uk' etc
 * If you want to get a 'Ukrainian' date and provide just a 'ua' - it won't work and you'll get
 * an 'English' date
 */
