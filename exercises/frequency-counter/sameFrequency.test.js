const { sameFrequency } = require('./sameFrequency');

describe('sameFrequency', () => {
  it('should return false when the numbers have different char length', () => {
    expect(sameFrequency(1, 15)).toBe(false);
  });

  it('should return true when the numbers have the same char frequency', () => {
    expect(sameFrequency(182, 281)).toBe(true);
    expect(sameFrequency(3589578, 5879385)).toBe(true);
  });

  it('should return false when the numbers have different char frequency', () => {
    expect(sameFrequency(34, 14)).toBe(false);
    expect(sameFrequency(22, 222)).toBe(false);
  });
});
