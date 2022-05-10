import { getFullDate } from '../utils/helpers';
import { datesLanguages } from '../utils/languagesConfig';

describe('getFullDate', () => {

  test('Provided a concrete date', () => {
    const date = new Date('2022-05-08');
    const language = datesLanguages.eng;
    expect(getFullDate(date, language)).toBe('May 8, 2022')
  });

  test('Provided a concrete date, written vice-versa', () => {
    const date = new Date('08-05-2022');
    const language = datesLanguages.eng;
    expect(getFullDate(date, language)).toBe('August 5, 2022')
  });

  test('Provided only a year', () => {
    const date = new Date('2022');
    const language = datesLanguages.eng;
    expect(getFullDate(date, language)).toBe('January 1, 2022')
  });

  test('Date not provided', () => {
    const language = datesLanguages.eng;
    expect(() => {
      getFullDate(null, language)
    }).toThrow('You provided invalid date object');
  });

  test('Language not provided', () => {
    const date = new Date('2022');
    expect(getFullDate(date)).toBe('January 1, 2022')
  });

  test('Language is a null', () => {
    const date = new Date('2022');
    expect(() => {
      getFullDate(date, null)
    })
      .toThrow('You provided invalid language string');
  });

  test('Language is UA', () => {
    const date = new Date('2022');
    const language = datesLanguages.ua;
    expect(getFullDate(date, language)).toBe('Січень 1, 2022')
  });

  test('Wrong data type instead of date', () => {
    expect(() => {
      getFullDate(['2022-08-09'])
    }).toThrow('You provided invalid date object');
  });

  test('Wrong data type instead of language', () => {
    const date = new Date('2022');
    expect(() => {
      getFullDate(date, 123)
    })
      .toThrow('You provided invalid language string');
  });
})
