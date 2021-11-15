const { insertionSort } = require('./insertionSort');

describe('insertionSort', () => {
  it('should return a sorted array', () => {
    expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(insertionSort([6, 4, 8, 2, 10, 31, 4, 11])).toEqual([2, 4, 4, 6, 8, 10, 11, 31]);
    expect(insertionSort([6, 4, 8, 2, -1, 31, 4, 11])).toEqual([-1, 2, 4, 4, 6, 8, 11, 31]);
  });

  it('should not continually iterate a nearly sorted array', () => {
    expect(insertionSort([8, 1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
