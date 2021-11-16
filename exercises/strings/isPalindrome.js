// Given a string, return true if the string is a palindrome or false if it is not. Palindromes are
// string that form the same word if it is reversed. Do include spaces and punctuation in
// determining if the string is a palindrome.

// O(n + n + n) = O(3n) => O(n)
const isPalindrome = (str) => {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
};

// O(n)
const isPalindrome2 = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

module.exports = { isPalindrome, isPalindrome2 };
