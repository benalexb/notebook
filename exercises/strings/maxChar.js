const maxChar = (str) => {
  // Create a frequency map for each character
  const frequencyMap = str
    .split('')
    .reduce((acc, cur) => {
      if (!acc[cur]) acc[cur] = 0;
      acc[cur] += 1;
      return acc;
    }, {});

  let result;
  let maxCount = 0;

  // Iterate keys and identify the max count
  Object
    .keys(frequencyMap)
    .forEach((char) => {
      const count = frequencyMap[char];
      if (count > maxCount) {
        maxCount = count;
        result = char;
      }
    });

  return result;
};

module.exports = { maxChar };
