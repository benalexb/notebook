const { findLongestSubstring } = require('./findLongestSubstring');

describe('findLongestSubstring', () => {
  it('should return the length of the longest substring', () => {
    expect(findLongestSubstring('')).toBe(0);
    expect(findLongestSubstring('rithmschool')).toBe(7);
    expect(findLongestSubstring('thisisawesome')).toBe(6);
    expect(findLongestSubstring('thecatinthehat')).toBe(7);
    expect(findLongestSubstring('bbbbbbb')).toBe(1);
    expect(findLongestSubstring('longestsubstring')).toBe(8);
    expect(findLongestSubstring('thisishowwedoit')).toBe(6);
  });
});
