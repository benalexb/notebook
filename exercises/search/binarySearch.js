// Write a function called binarySearch which accepts a sorted array and a value, and returns the
// index at which the value exists. Otherwise, return -1.

const binarySearch = (numberList, searchValue) => {
  // The idea of binary search comes from Divide and Conquer, assuming a sorted array of numbers.
  // Using leftPointer and rightPointer, we mark the beginning and the end of the list.
  // Looping, take the center between pointers and check the current value against the search value.
  // The center point is the average between points, rounded up.
  // If the current value is greater than the search value, leftPointer moves to the current pos.
  // if the current value is less than the search value, rightPointer moves to the current pos.
  // The loop breaks when the value has been found, or the pointers are equal.
  if (!numberList || numberList.length === 0) return -1;

  let leftPointer = 0;
  let rightPointer = numberList.length - 1;

  while (leftPointer < rightPointer) {
    const searchPoint = Math.ceil((rightPointer + leftPointer) / 2);
    const currentValue = numberList[searchPoint];
    if (currentValue > searchValue) {
      rightPointer = searchPoint;
    } else if (currentValue < searchValue) {
      leftPointer = searchPoint;
    } else {
      // currentValue must be equal to searchValue
      return searchPoint;
    }
  }

  return -1;
};

module.exports = { binarySearch };
