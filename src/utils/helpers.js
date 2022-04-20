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
 * @param {object} losses is the object containing all losses in the war.
 * Find it here /Users/admin_mac/Desktop/losses/src/utils/losses.js.
 * @returns the object with last recorded losses.
 */
export function getLatestLossesObject(losses) {
  return losses[getPastDataUpdateDate(losses, -1)];
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
 * since the package used for image dowload (html-to-image)
 * does not work with Safari.
 * @returns true if user agent is Safari
 */
export function isUserAgentSafari() {
  const browser = detect();
  if (browser && browser.name) {
    return browser.name === 'safari';
  }
  return false;
}
