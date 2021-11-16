const { isPalindrome, isPalindrome2 } = require('./isPalindrome');

describe('isPalindrome', () => {
  it('returns true when the given string is a palindrome', () => {
    expect(isPalindrome('aba')).toBe(true);
    expect(isPalindrome(' aba')).toBe(false);
    expect(isPalindrome('aba ')).toBe(false);
    expect(isPalindrome('greetings')).toBe(false);
    expect(isPalindrome('1000000001')).toBe(true);
    expect(isPalindrome('Fish hsif')).toBe(false);
    expect(isPalindrome('pennep')).toBe(true);
  });
});

describe('isPalindrome2', () => {
  it('returns true when the given string is a palindrome', () => {
    expect(isPalindrome2('aba')).toBe(true);
    expect(isPalindrome2(' aba')).toBe(false);
    expect(isPalindrome2('aba ')).toBe(false);
    expect(isPalindrome2('greetings')).toBe(false);
    expect(isPalindrome2('1000000001')).toBe(true);
    expect(isPalindrome2('Fish hsif')).toBe(false);
    expect(isPalindrome2('pennep')).toBe(true);
  });
});
