const { validAnagram } = require('./validAnagram');

describe('validAnagram', () => {
  it('should return false when the words are not anagrams', () => {
    const result = validAnagram('apple', 'potato');
    expect(result).toBe(false);
  });

  it('should return true when the words are valid anagrams', () => {
    expect(validAnagram('abc', 'cab')).toBe(true);
    expect(validAnagram('awesome', 'aewsmeo')).toBe(true);
    expect(validAnagram('three', 'eerht')).toBe(true);
    expect(validAnagram('aaakkkeee', 'ekekekaaa')).toBe(true);
  });
});
