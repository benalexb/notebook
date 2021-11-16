// Given a string , return a new string with the reversed order of chars.

// O(n + n + n) = O(3n) => O(n)
const stringReverseOneLiner = (str) => str.split('').reverse().join('');

// O(n)
const stringReverse = (str) => {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

module.exports = { stringReverse, stringReverseOneLiner };
