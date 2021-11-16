// Write a program that logs the numbers from 1 to n. But for multiple of three, print "fizz"
// instead of the number and for multiple of five print "buzz". For numbers which are multiples of
// both three and five, print "fizzbuzz".

const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    const isFizz = i % 3 === 0;
    const isBuzz = i % 5 === 0;
    const isFizzBuzz = isFizz && isBuzz;

    if (isFizzBuzz) {
      console.log('fizzbuzz');
    } else if (isFizz) {
      console.log('fizz');
    } else if (isBuzz) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
};

module.exports = { fizzBuzz };
