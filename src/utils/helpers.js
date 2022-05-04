const { detect } = require('detect-browser');

/**
 * Returns the word provided as an argument but with capitalized first letter
 * @param {String} word is any word
 * @returns the same argument with first letter capitalized
 */
export function getWordWithBigFirstLetter(word) {
  if (!Object.prototype.toString.call(word).includes('String')) {
    throw new Error('You provided not a string');
  }
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}

/**
 * Provides a string describing the date.
 * @param {Date} dateObject is an object of Date
 * @param {String} language is any language the website supports.
 * The language shall be provided in a short form and be a value of the 'languages'
 * object in the /Users/admin_mac/Desktop/losses/src/redux/changeLang.js file.
 * @returns a string with the date in the following format 'January 1, 2022'
 */
export function getFullDate(dateObject, language) {
  if (!Object.prototype.toString.call(dateObject).includes('Date')) {
    throw new Error('You provided incorrect Date object');
  }
  return `${getWordWithBigFirstLetter(dateObject.toLocaleString(language, { month: 'long' }))} ${dateObject.getDate()}, ${dateObject.getFullYear()}`;
}

/**
 * Provides the date of the n-added losses numbers as a string.
 * @param {object} losses is the object containing all losses in the war.
 * Find it here /Users/admin_mac/Desktop/losses/src/utils/losses.js.
 * @param {number} dateFromEnd is a negative number like -1 or -2.
 * @returns the date of the last added losses numbers as a string.
 */
export function getPastDataUpdateDate(losses, dateFromEnd) {
  const datesArray = Object.keys(losses);
  return datesArray[datesArray.length + dateFromEnd];
}

/**
 * Provides an object with the last recorded losses.
 * @param {object} losses is the object containing all losses in the war
 * for all days. This object is received from server. Since it takes
 * some time to get this object one shall return an empty object
 * while waiting.
 * @returns the object with last recorded losses or an empty object.
 */
export function getLatestLossesObject(losses) {
  if (losses.length === 0) {
    return {};
  }
  return losses[0];
}

/**
 * Imports an image based on the name submitted as argument.
 * @param {String} imgName is the name of the image to be imported.
 * @returns the svg-image.
 */
export function getImage(imgName) {
  try {
    return require(`../img/${imgName}.svg`);
  } catch (err) {
    return require('../img/unknown.svg');
  }
}

/**
 * Checks whether user agent is Safari or not. This is important
 * since the package used for image download (html-to-image)
 * does not work with Safari.
 * @returns true if user agent is Safari
 */
export function isUserAgentSafari() {
  const userAgent = detect();
  if (userAgent && userAgent.name) {
    return userAgent.name === 'safari' || (navigator.userAgent.match(/safari/i) && !window.chrome);
  }
  return false;
}

/**
 * The function checks whether user's browser supports flex gaps (css property).
 * Depending on this different styles will be applied.
 * @returns {boolean} true if supports flex gap.
 */
export function isFlexGapSupported() {
  // create flex container with row-gap set
  const flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  // create two, elements inside it
  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  // append to the DOM (needed to obtain scrollHeight)
  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
  flex.parentNode.removeChild(flex);

  return isSupported;
}

export function scrollToTop() {
  window.scrollTo(0, 0);
}
