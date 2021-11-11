// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters.
// You may assume the string contains only lowercase alphabets.
// Time complexity O(n)

// This reducer function builds the frequency map.
function frequencyReducer(acc, cur) {
  acc[cur] = ++acc[cur] || 1;
  return acc;
}

function validAnagram(stringOne, stringTwo) {
  if (stringOne.length !== stringTwo.length) {
    // Different lengths means it's impossible for the words to be an anagram.
    return false;
  }

  // Create a frequency map for each string
  const stringOneFrequency = stringOne.split('').reduce(frequencyReducer, {});
  const stringTwoFrequency = stringTwo.split('').reduce(frequencyReducer, {});

  const stringOneKeys = Object.keys(stringOneFrequency);

  // Iterate the frequency keys from string one, checking if string two contains them.
  // Also check if the frequency count matches.
  for (const key of stringOneKeys) {
    const charMatch = stringTwoFrequency[key];
    if (!charMatch || stringOneFrequency[key] !== charMatch) {
      // If the frequencies don't match, or are missing a char, return false;
      return false;
    }
  }

  return true;
}

module.exports = {
  frequencyReducer,
  validAnagram,
};
