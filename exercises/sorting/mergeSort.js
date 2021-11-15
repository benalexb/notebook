// Merging sorted arrays, the idea is to iterate both array at the same time using pointers.
// On each iteration, we compare both pointers, and the smallest value is inserted in the
// results array. If the arrays are of different length, when one of them has been iterated until
// the end, we simply concatenated the remainder to the results array, assuming already sorted.

const mergeSortedLists = (firstList, secondList) => {
  const result = [];
  let firstPointer = 0;
  let secondPointer = 0;

  // Merge arrays
  while (firstPointer < firstList.length && secondPointer < secondList.length) {
    if (firstList[firstPointer] < secondList[secondPointer]) {
      result.push(firstList[firstPointer]);
      firstPointer++;
    } else {
      result.push(secondList[secondPointer]);
      secondPointer++;
    }
  }

  // Add remaining values if any
  while (firstPointer < firstList.length) {
    result.push(firstList[firstPointer]);
    firstPointer++;
  }

  // Add remaining values if any
  while (secondPointer < secondList.length) {
    result.push(secondList[secondPointer]);
    secondPointer++;
  }

  return result;
};

module.exports = { mergeSortedLists };
