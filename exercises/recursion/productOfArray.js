// Write a function called productOfArray which takes an array of numbers and returns the product
// of them all. This could be solved using a regular loop, but the intention is to use recursion.

const productOfArray = (numberList) => {
  if (numberList.length === 0) return 1;
  return numberList.pop() * productOfArray(numberList);
};

const productOfArray2 = (numberList) => {
  let product = numberList[numberList.length - 1];

  const recursiveSum = (numbers) => {
    if (numbers.length === 0) return 0;
    const lastIndex = numbers.length - 1;
    product *= numbers[lastIndex];
    return recursiveSum(numbers.slice(0, lastIndex));
  };

  recursiveSum(numberList.slice(0, numberList.length - 1));
  return product;
};

module.exports = { productOfArray, productOfArray2 };
