// Write a recursive function called fib which accepts a number and return the nth number in the
// Fibonacci sequence; 1 1 2 3 5 8 13 21 ...

const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

const fib2 = (n) => {
  let previous = 1;
  let position = 2;

  const recursiveFib = (current) => {
    if (position === n) return current;
    position++;
    const next = current + previous;
    previous = current;
    return recursiveFib(next);
  };

  return recursiveFib(1);
};

module.exports = { fib, fib2 };
