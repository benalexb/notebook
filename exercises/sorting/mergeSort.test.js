const { mergeSortedLists } = require('./mergeSort');

describe('mergeSortedLists', () => {
  it('should returned an array of merged numbers', () => {
    expect(mergeSortedLists([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(mergeSortedLists([2], [1, 3])).toEqual([1, 2, 3]);
    expect(mergeSortedLists([-1, 6], [2, 7, 8])).toEqual([-1, 2, 6, 7, 8]);
    expect(mergeSortedLists([1, 6, 10], [2, 7, 8])).toEqual([1, 2, 6, 7, 8, 10]);
  });
});
