// Write a function that receives a sorted array of integers and a target average.
// Determine if there is a pair of values in the array where the average of the pair equals the
// target average. There may be more than one pair that matches the average target.

// Time complexity O(n)
// Space complexity O(1)

const averagePair = (listOfNumbers, targetAverage) => {
  // Because the list of numbers is sorted, we can use two pointers, start and end.
  // On each iteration, if the average between the two numbers is less than the target average, we
  // increment the start pointer, because we need a higher average. If the average between the two
  // numbers is greater than the target average, we decrement the end pointer, because we need a
  // smaller average.
  let start = 0;
  let end = listOfNumbers.length - 1;

  while (start < end) {
    const average = (listOfNumbers[start] + listOfNumbers[end]) / 2;
    if (average === targetAverage) {
      return true;
    }
    if (average < targetAverage) start++;
    else end--;
  }

  return false;
};

module.exports = {
  averagePair,
};
