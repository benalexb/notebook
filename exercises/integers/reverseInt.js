// Given an integer, return an integer that is the reverse ordering of numbers.

const reverseInt = (int) => {
  // Cast to string, split, and reverse.
  const reversed = int.toString().split('').reverse();

  // We don't have to worry about the negative sign at the end, it is removed when the string is
  // parsed to an integer. We do, however, need to convert to negative accordingly.
  return Number.parseInt(reversed.join(''), 10) * Math.sign(int);
};

module.exports = { reverseInt };
