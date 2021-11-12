const { areThereDuplicates, areThereDuplicates2 } = require('./areThereDuplicates');

describe('areThereDuplicates', () => {
  it('should return false when there are no duplicates', () => {
    expect(areThereDuplicates(1, 2, 3)).toBe(false);
  });

  it('should return true when there are duplicates', () => {
    expect(areThereDuplicates(1, 2, 2)).toBe(true);
    expect(areThereDuplicates('a', 'b', 'c', 'a')).toBe(true);
  });
});

describe('areThereDuplicates2', () => {
  it('should return false when there are no duplicates', () => {
    expect(areThereDuplicates2(1, 2, 3)).toBe(false);
  });

  it('should return true when there are duplicates', () => {
    expect(areThereDuplicates2(1, 2, 2)).toBe(true);
    expect(areThereDuplicates2('a', 'b', 'c', 'a')).toBe(true);
  });
});
