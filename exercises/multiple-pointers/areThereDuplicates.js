// Implement a function called areThereDuplicates which accepts a variable number of arguments, and
// checks whether there are any duplicates among the arguments passed in. You can solve this using
// the frequency counter pattern, OR the multiple pointers pattern.

// Time complexity O(n)
// Space complexity O9n)

// Bonus, time complexity O(n log n) and space O(1)

const areThereDuplicates = (...args) => {
  // Check arguments to see if they are empty. If empty, return false.
  if (args.length === 0) {
    return false;
  }

  let hasDuplicates = false;

  // Sort arguments so we can use multiple pointers to determine the unique values count.
  args.sort();

  // Use multiple pointers to count unique values.
  let leftPointer = 0;
  let rightPointer = 1;
  for (; rightPointer < args.length; rightPointer++) {
    if (args[leftPointer] !== args[rightPointer]) {
      leftPointer += 1;
      /* eslint-disable no-param-reassign */
      args[leftPointer] = args[rightPointer];
    }
  }

  // If the unique values count is equal to args.length, then there are no duplicates.
  hasDuplicates = args.length !== leftPointer + 1;

  return hasDuplicates;
};

const areThereDuplicates2 = (...args) => new Set(args).size !== args.length;

module.exports = {
  areThereDuplicates,
  areThereDuplicates2,
};
