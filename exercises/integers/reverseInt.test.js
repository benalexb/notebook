const { reverseInt } = require('./reverseInt');

describe('reverseInt', () => {
  it('reverses the given integer, regardless of being positive or negative', () => {
    expect(reverseInt(0)).toEqual(0);
    expect(reverseInt(5)).toEqual(5);
    expect(reverseInt(15)).toEqual(51);
    expect(reverseInt(90)).toEqual(9);
    expect(reverseInt(2359)).toEqual(9532);
    expect(reverseInt(-5)).toEqual(-5);
    expect(reverseInt(-15)).toEqual(-51);
    expect(reverseInt(-90)).toEqual(-9);
    expect(reverseInt(-2359)).toEqual(-9532);
  });
});
