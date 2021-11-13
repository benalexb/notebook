const { productOfArray } = require('./productOfArray');

describe('productOfArray', () => {
  it('should return the sum of all numbers in the given array', () => {
    expect(productOfArray([1, 2, 3])).toBe(6);
    expect(productOfArray([1, 2, 3, 10])).toBe(60);
    expect(productOfArray([1, 2, 3, 10, 2, 2])).toBe(240);
  });
});
