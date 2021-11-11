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

  // We are going to use two pointers. Size is one of them, starts at the bigging of the array.
  // The iterator i is the second counter, starts at index 1.
  let size = 0;

  for (let i = 1; i < values.length; i++) {
    // The iterator pointer moves to the right on each iteration.
    // When the current number is different than the number marked by the size pointer, size is
    // incremented (moves right). We reuse the values parameter by reassigning the different number
    // to the new position marked by the size pointer.
    if (values[i] !== values[size]) {
      size += 1;
      values[size] = values[i];
    }
  }

  return size + 1;
}

module.exports = {
  countUniqueValues,
};
