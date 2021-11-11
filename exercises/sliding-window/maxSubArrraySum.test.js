const { maxSubArraySum } = require('./maxSubArraySum');

describe('maxSubArraySum', () => {
  it('should return null if the number list length is less than the consecutive marker', () => {
    expect(maxSubArraySum([], 4)).toBe(null);
  });

  it('should return the maximum sum of consecutive numbers in the provided number list', () => {
    expect(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
    expect(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
    expect(maxSubArraySum([4, 2, 1, 6], 1)).toBe(6);
    expect(maxSubArraySum([4, 2, 1, 6, 2], 4)).toBe(13);
  });
});
