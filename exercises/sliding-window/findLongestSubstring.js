// Write a function called findLongestSubstring, which accepts a string and returns the length of
// the longest substring with all distinct characters.

const findLongestSubstring = (seedString) => {
  let start = 0;
  let longest = 0;
  const seen = {};

  // Iterate the full length of the string
  for (let i = 0; i < seedString.length; i++) {
    const char = seedString[i];

    // If a char has already been seen, start must be updated.
    // It's like we are starting to count again, so this will update longest if we end up eventually
    // reaching a longer substring.
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    // Mark the longest substring on each iteration, taking the start into account.
    // Always keep the largest value.
    longest = Math.max(longest, i + 1 - start);
    // Keep a reference to the seen char and its position.
    seen[char] = i + 1;
  }

  return longest;
};

module.exports = {
  findLongestSubstring,
};
