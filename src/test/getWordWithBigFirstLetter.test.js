import { getWordWithBigFirstLetter } from '../utils/helpers';

describe('getWordWithBigFirstLetter', () => {
  test('Small first letter', () => {
    expect(getWordWithBigFirstLetter('ukraine')).toBe('Ukraine');
  });

  test('Already big letter', () => {
    expect(getWordWithBigFirstLetter('Ukraine')).toBe('Ukraine');
  });

  test('Small first letter - cyrrillic word', () => {
    expect(getWordWithBigFirstLetter('україна')).toBe('Україна');
  });

  test('Already big letter - cyrrillic word', () => {
    expect(getWordWithBigFirstLetter('Україна')).toBe('Україна');
  });

  test('Number instead of letter', () => {
    expect(getWordWithBigFirstLetter('123ee')).toBe('123ee');
  });

  test('Throw an error - empty string', () => {
    expect(() => {
      getWordWithBigFirstLetter('')
    }).toThrowError('You provided wrong argument')
  });

  test('Throw an error - array', () => {
    expect(() => {
      getWordWithBigFirstLetter(['ukraine'])
    }).toThrowError('You provided wrong argument')
  });

  test('Throw an error - number', () => {
    expect(() => {
      getWordWithBigFirstLetter(123)
    }).toThrowError('You provided wrong argument')
  });

  test('Throw an error - null', () => {
    expect(() => {
      getWordWithBigFirstLetter(null)
    }).toThrowError('You provided wrong argument')
  });

  test('Throw an error - undefined', () => {
    expect(() => {
      getWordWithBigFirstLetter(undefined)
    }).toThrowError('You provided wrong argument')
  });

  test('Throw an error - no argument', () => {
    expect(() => {
      getWordWithBigFirstLetter()
    }).toThrowError('You provided wrong argument')
  });
});
