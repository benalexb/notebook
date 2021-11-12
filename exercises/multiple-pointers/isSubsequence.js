// Write a function called isSubsequence which takes in two string and checks whether the characters
// in the first string form a subsequence of the characters in the second string. In other words,
// the function should check whether the characters in the first string appear somewhere in the
// second string, without their order changing.

// Time complexity O(n + m)
// Space complexity O(1)

const isSubsequence = (firstString, secondString) => {
  // Use two pointers, one for each string, firstPointer and secondPointer.
  let firstPointer = 0;
  let secondPointer = 0;

  // Iterate the second string.
  // At the end of each iteration on the second string, increment the secondPointer.
  while (secondPointer < secondString.length) {
    // When the chars match, increment the firstPointer
    if (firstString[firstPointer] === secondString[secondPointer]) {
      firstPointer++;
    }

    // If the first pointer is equal to the length of the first string, there is a substring!
    if (firstPointer === firstString.length) {
      return true;
    }
    secondPointer++;
  }

  // If the while loop breaks by itself, that means we never found a substring, so return false.
  return false;
};

module.exports = {
  isSubsequence,
};
