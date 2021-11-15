/* eslint-disable no-param-reassign */

const swap = (itemOne, itemTwo, itemList) => {
  const temp = itemList[itemOne];
  itemList[itemOne] = itemList[itemTwo];
  itemList[itemTwo] = temp;
};

// Bubble sort uses a nested loop.
// The outer loop starts at the end (using length instead of length - 1)
// The inner loop starts at zero, while its position is < i - 1 (because i started at length)
// In ascending order, if j is less than j + 1, we swap them.
// Optimization is done by introducing shouldBreak, which is set to false when swap is called.
// At the end of the outer loop, if shouldBreak is true, we stop iterating.

const bubbleSort = (numberList) => {
  for (let i = numberList.length; i > 0; i--) {
    let shouldBreak = true;
    for (let j = 0; j < i - 1; j++) {
      if (numberList[j] > numberList[j + 1]) {
        swap(j, j + 1, numberList);
        shouldBreak = false;
      }
    }
    if (shouldBreak) break;
  }
  return numberList;
};

module.exports = { bubbleSort };
