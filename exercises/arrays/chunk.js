// Given an array and chunk size, divide the array into many sub arrays where each sub array is of
// the provided size.

// Both solutions here are O(n) but I think the shorter one is easier to understand.

const chunk = (list = [], chunkSize = 2) => {
  const result = [];
  let leftPointer = 0;
  let rightPointer = chunkSize - 1;

  // Handle even chunks, using a sliding window approach.
  while (rightPointer <= list.length - 1) {
    const currentChunk = [];
    for (let i = leftPointer; i <= rightPointer; i++) {
      currentChunk.push(list[i]);
    }
    result.push(currentChunk);
    leftPointer += chunkSize;
    rightPointer += chunkSize;
  }

  // Handle remainder with a regular loop.
  const remainder = list.length % chunkSize;
  if (remainder !== 0) {
    const lastChunk = [];
    for (let i = list.length - remainder; i < list.length; i++) {
      lastChunk.push(list[i]);
    }
    result.push(lastChunk);
  }

  return result;
};

const chunk2 = (list = [], chunkSize = 2) => {
  const result = [];

  for (let i = 0; i < list.length; i++) {
    // If the current chunk is not the results array yet, or it has been filled already, then
    // we add a new current chunk array.
    if (result.length === 0 || result[result.length - 1].length === chunkSize) {
      result.push([]);
    }
    // We always push into the last chunk in the results array.
    result[result.length - 1].push(list[i]);
  }

  return result;
};

const chunk3 = (list = [], chunkSize = 2) => {
  const result = [];

  for (let i = 0; i < list.length; i += chunkSize) {
    // Using slice, we don't need to worry about running pas the end of the array when we sum the
    // iterator with chunkSize.
    result.push(list.slice(i, i + chunkSize));
  }

  return result;
};

module.exports = { chunk, chunk2, chunk3 };
