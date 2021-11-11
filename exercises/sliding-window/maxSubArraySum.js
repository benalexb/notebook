// Write a function called maxSubArraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// Time complexity O(n)

// Using the sliding window approach to solve this problem, the idea is to move the window right, as
// we look at a new number, and subtract the number that is no longer within the window.

const maxSubArraySum = (numberList, consecutive) => {
  // If the list of numbers is less than the consecutive marker, then it's pointless to calculate
  // anything, therefore we return null.
  if (numberList.length < consecutive) {
    return null;
  }

  let sum = 0;
  let currentSum = 0;

  // The first window is calculated separately, so we have a starting point for sum
  for (let i = 0; i < consecutive; i++) {
    sum += numberList[i];
  }

  // currentSum will mark the sum of the current iteration.
  currentSum = sum;

  for (let i = consecutive; i < numberList.length; i++) {
    // On each iteration, the window moves right, so we subtract the left-most number, and add the
    // new right-most number.
    currentSum = currentSum - numberList[i - consecutive] + numberList[i];
    // Update the maximum sum accordingly.
    sum = Math.max(sum, currentSum);
  }

  return sum;
};

module.exports = {
  maxSubArraySum,
};
