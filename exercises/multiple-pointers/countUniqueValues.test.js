const { countUniqueValues } = require('./countUniqueValues');

describe('countUniqueValues', () => {
  it('should return zero when the values array is empty', () => {
    expect(countUniqueValues([])).toBe(0);
  });

  it('should return the correct count of unique values', () => {
    expect(countUniqueValues([1, 1, 1, 2, 2])).toBe(2);
    expect(countUniqueValues([1, 1, 1, 2, 2])).toBe(2);
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 13])).toBe(7);
    expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
  });
});
