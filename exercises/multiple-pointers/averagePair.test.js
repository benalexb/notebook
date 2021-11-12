const { averagePair } = require('./averagePair');

describe('averagePair', () => {
  it('should return true when there is an average pair that matches the target average', () => {
    expect(averagePair([1, 2, 3], 2.5)).toBe(true);
    expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
  });
  it('should return false when no pairs match the given target average', () => {
    expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
    expect(averagePair([], 4)).toBe(false);
  });
});
