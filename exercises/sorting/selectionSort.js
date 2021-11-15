/* eslint-disable no-param-reassign */

const swap = (itemOne, itemTwo, itemList) => {
  const temp = itemList[itemOne];
  itemList[itemOne] = itemList[itemTwo];
  itemList[itemTwo] = temp;
};

// The idea behind selection sorting is that we keep a reference to the lowest value.
// As we iterate over the list of numbers, when a new lowest value is found, we swap it.
// There will be an outer loop going the full length of the array, and an inner loop going from
// lowest until the end of the list of numbers.
// An optimization can be made by comparing the current position of the outer loop against the
// lowest value. Swap should only take place when these are different.

const selectionSort = (numberList) => {
  for (let i = 0; i < numberList.length; i++) {
    let lowest = i;

    // find new lowest
    for (let j = i + 1; j < numberList.length; j++) {
      if (numberList[j] < numberList[lowest]) {
        lowest = j;
      }
    }

    // Only swap if a new lowest value has actually been found.
    if (i !== lowest) {
      swap(i, lowest, numberList);
    }
  }
  return numberList;
};

module.exports = { selectionSort };
