const recursiveRange = (num) => {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
};

const factorial = (num) => {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
};

const power = (base, exponent) => {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
};

module.exports = {
  recursiveRange,
  factorial,
  power,
};
