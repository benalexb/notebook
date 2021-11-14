// Write a function called binarySearch which accepts a sorted array and a value, and returns the
// index at which the value exists. Otherwise, return -1.

// The idea of binary search comes from Divide and Conquer, assuming a sorted array of numbers.
// Using leftPointer and rightPointer, we mark the beginning and the end of the list.
// Looping, take the center between pointers and check the current value against the search value.
// The center point is the average between points, rounded up.
// If the current value is greater than the search value, leftPointer moves to the current pos.
// if the current value is less than the search value, rightPointer moves to the current pos.
// The loop breaks when the value has been found, or the pointers intercept each other.

const binarySearch = (numberList, searchValue) => {
  if (!numberList || numberList.length === 0) return -1;

  let leftPointer = 0;
  let rightPointer = numberList.length - 1;
  let centerPointer = Math.floor((leftPointer + rightPointer) / 2);

  while (numberList[centerPointer] !== searchValue && leftPointer <= rightPointer) {
    if (numberList[centerPointer] < searchValue) {
      leftPointer = centerPointer + 1;
    }
    if (numberList[centerPointer] > searchValue) {
      rightPointer = centerPointer - 1;
    }
    centerPointer = Math.floor((leftPointer + rightPointer) / 2);
  }

  return numberList[centerPointer] === searchValue ? centerPointer : -1;
};

module.exports = { binarySearch };
