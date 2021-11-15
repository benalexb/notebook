/* eslint-disable no-param-reassign */

const insertionSort = (numberList) => {
  if (numberList.length === 0) return [];

  // We start the outer loop at index 1 because the sorted portion of the list starts at 0
  // The iterator i marks the number we are currently inserting.
  for (let i = 1; i < numberList.length; i++) {
    let sorted = i - 1;
    // Save a reference to the number, it is removed before being inserted.
    const number = numberList[i];
    // The inner loop iterates the sorted portion to find the right position to insert.
    // The second condition in this loop ensure we don't continue iterating when we have already
    // found the spot where the current number should be inserted.
    for (sorted; sorted >= 0 && numberList[sorted] > number; sorted--) {
      // If the current sorted is less than the current number, "move" sorted forward.
      if (number < numberList[sorted]) {
        numberList[sorted + 1] = numberList[sorted];
      }
    }
    // Insert number at the correct spot.
    numberList[sorted + 1] = number;
  }

  return numberList;
};

module.exports = { insertionSort };
