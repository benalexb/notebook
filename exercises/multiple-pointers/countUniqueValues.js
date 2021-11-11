/* eslint-disable no-param-reassign */

// Implement a function called countUniqueValues, which accepts a sorted array, and counts the
// unique values in the array. There can be negative numbers in the array, but it will always
// be sorted.

// Time complexity O(n)
// Space complexity O(n)
// Bonus, reuse the values parameter and try to keep space complexity at O(1)

function countUniqueValues(values) {
  // If the values array is empty, the count is surely zero.
  if (values.length === 0) {
    return 0;
  }

  // We are going to use two pointers.
  // leftPointer is one of them, starts at the beginning of the array.
  // rightPointer is the second pointer, starts at index 1.
  let leftPointer = 0;
  let rightPointer = 1;

  for (; rightPointer < values.length; rightPointer++) {
    // rightPointer moves to the right on each iteration.
    // When the current number marked by rightPointer is different than the number marked by
    // leftPointer, leftPointer is incremented (moves right).
    // We reuse the values parameter by reassigning the different number to the new position
    // marked by leftPointer.
    if (values[leftPointer] !== values[rightPointer]) {
      leftPointer += 1;
      values[leftPointer] = values[rightPointer];
    }
  }

  return leftPointer + 1;
}

module.exports = {
  countUniqueValues,
};
