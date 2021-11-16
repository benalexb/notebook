const { stringReverse, stringReverseOneLiner } = require('./stringReverse');

describe('stringReverseOneLiner', () => {
  it('should reverse the given string', () => {
    expect(stringReverseOneLiner('apple')).toBe('elppa');
    expect(stringReverseOneLiner('hello')).toBe('olleh');
    expect(stringReverseOneLiner('Greetings!')).toBe('!sgniteerG');
  });
});

describe('stringReverse', () => {
  it('should reverse the given string', () => {
    expect(stringReverse('apple')).toBe('elppa');
    expect(stringReverse('hello')).toBe('olleh');
    expect(stringReverse('Greetings!')).toBe('!sgniteerG');
  });
});
