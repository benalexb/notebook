// Write a function called sameFrequency. Given two positive integers, find out if the two numbers
// have the same frequency of digits.

// The solution MUST have time complexity O(n)

const frequencyReducer = (acc, cur) => {
  acc[cur] = ++acc[cur] || 1;
  return acc;
};

const sameFrequency = (firstNumber, secondNumber) => {
  // Create an array of chars out of the provided numbers
  const firstString = firstNumber.toString().split('');
  const secondString = secondNumber.toString().split('');

  // If the strings have different lengths, then we already know the char frequency won't match.
  if (firstString.length !== secondString.length) {
    return false;
  }

  // Calculate the char frequency of each string
  const firstNumberFrequency = firstString.reduce(frequencyReducer, {});
  const secondNumberFrequency = secondString.reduce(frequencyReducer, {});

  // Loop over the keys of the first string, checking if the second string contains them.
  for (const key of Object.keys(firstNumberFrequency)) {
    const match = secondNumberFrequency[key];

    // The moment we find a mismatch, we can break and return false.
    if (!match || firstNumberFrequency[key] !== match) {
      return false;
    }
  }

  return true;
};

module.exports = {
  sameFrequency,
};
