// Write a function called minSubArrayLen which accepts two parameters: an array of positive
// integers, and a positive integer. This function should return the minimal length of a contiguous
// subarray of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

// Time complexity O(n)
// Space complexity O(1)

const minSubArrayLen = (numberList, limit) => {
  let sum = 0;
  let leftPointer = 0;
  let rightPointer = 0;
  let minLength = Infinity;

  while (leftPointer < numberList.length) {
    if (sum < limit && rightPointer < numberList.length) {
      // If the current sum is less than the limit
      // AND the rightPointer is less than the list length, add the nest number to sum.
      sum += numberList[rightPointer];
      rightPointer++;
    } else if (sum >= limit) {
      // If the current sum is >= to the limit, update minLength, subtract the leftPointer
      // and increment it.
      minLength = Math.min(minLength, rightPointer - leftPointer);
      sum -= numberList[leftPointer];
      leftPointer++;
    } else {
      // Sum is less than the numberList length, and we reached the end of numberList.
      break;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};

module.exports = {
  minSubArrayLen,
};
