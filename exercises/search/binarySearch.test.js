const { binarySearch } = require('./binarySearch');

describe('binarySearch', () => {
  it('should return -1 when the passed value is not in the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], -1)).toBe(-1);
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    expect(binarySearch(
      [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
      -10,
    )).toBe(-1);
    expect(binarySearch(
      [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
      100,
    )).toBe(-1);
  });

  it('should return the index at which the value is located', () => {
    expect(binarySearch([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5], -1)).toBe(4);
    expect(binarySearch([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5], -5)).toBe(0);
    expect(binarySearch([1, 2, 3, 4, 5], 2)).toBe(1);
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
    expect(binarySearch(
      [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
      10,
    )).toBe(2);
    expect(binarySearch(
      [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
      95,
    )).toBe(16);
  });
});
