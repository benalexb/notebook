const { isSubsequence } = require('./isSubsequence');

describe('isSubsequence', () => {
  it('should return true whe the second string contains a substring of the first', () => {
    expect(isSubsequence('hello', 'hello world')).toBe(true);
    expect(isSubsequence('sing', 'string')).toBe(true);
    expect(isSubsequence('abc', 'abracadabra')).toBe(true);
  });

  it('should return false whe the second string does not contains a substring of the first', () => {
    expect(isSubsequence('abc', 'acb')).toBe(false);
    expect(isSubsequence('tetris', 'ettirs')).toBe(false);
  });
});
