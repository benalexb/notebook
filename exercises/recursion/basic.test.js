const { recursiveRange, factorial, power } = require('./basic');

describe('recursiveRange', () => {
  it('should return the sum of each number starting at the limit, down to one', () => {
    expect(recursiveRange(0)).toBe(0);
    expect(recursiveRange(2)).toBe(3);
    expect(recursiveRange(3)).toBe(6);
    expect(recursiveRange(4)).toBe(10);
    expect(recursiveRange(5)).toBe(15);
    expect(recursiveRange(6)).toBe(21);
    expect(recursiveRange(10)).toBe(55);
  });
});

describe('factorial', () => {
  it('should return the factorial of the given number', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(8)).toBe(40320);
    expect(factorial(11)).toBe(39916800);
  });
});

describe('power', () => {
  it('should return the power of the base to the exponent', () => {
    expect(power(2, 0)).toBe(1);
    expect(power(2, 2)).toBe(4);
    expect(power(2, 4)).toBe(16);
  });
});
