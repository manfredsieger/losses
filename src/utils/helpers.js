const MIN_DESKTOP_SCREEN_WIDTH = 750;

export function getWordWithBigFirstLetter(word) {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}

export function getFullDate(dateObject, language) {
  if (!Object.prototype.toString.call(dateObject).includes('Date')) {
    throw new Error('You provided incorrect Date object');
  }
  return `${getWordWithBigFirstLetter(dateObject.toLocaleString(language, { month: 'long' }))} ${dateObject.getDate()}, ${dateObject.getFullYear()}`;
}

export function getLastDataUpdateDate(losses) {
  return Object.keys(losses)[Object.keys(losses).length - 1];
}

export function getPreviousDataUpdateDate(losses) {
  return Object.keys(losses)[Object.keys(losses).length - 2];
}

export function getLatestLossesObject(losses) {
  return losses[getLastDataUpdateDate(losses)];
}

export function getImage(imgName) {
  try {
    return require(`../img/${imgName}.svg`);
  } catch (err) {
    return require('../img/unknown.svg');
  }
}

export function isUserDeviceValidForScreenshot() {
  return +window.screen.width >= MIN_DESKTOP_SCREEN_WIDTH;
}
