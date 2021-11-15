const { mergeSortedLists, mergeSort } = require('./mergeSort');

describe('mergeSortedLists', () => {
  it('should returned an array of merged numbers', () => {
    expect(mergeSortedLists([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(mergeSortedLists([2], [1, 3])).toEqual([1, 2, 3]);
    expect(mergeSortedLists([-1, 6], [2, 7, 8])).toEqual([-1, 2, 6, 7, 8]);
    expect(mergeSortedLists([1, 6, 10], [2, 7, 8])).toEqual([1, 2, 6, 7, 8, 10]);
  });
});

describe('mergeSort', () => {
  it('should return a sorted array', () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeSort([6, 4, 8, 2, 10, 31, 4, 11])).toEqual([2, 4, 4, 6, 8, 10, 11, 31]);
    expect(mergeSort([6, 4, 8, 2, -1, 31, 4, 11])).toEqual([-1, 2, 4, 4, 6, 8, 11, 31]);
  });

  it('should not continually iterate a nearly sorted array', () => {
    expect(mergeSort([8, 1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
