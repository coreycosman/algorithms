// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let rev = str.split("").reduce((rev, char) => {
    return char + rev
  }, "");
  if (rev === str) {
    return true;
  }
  return false;
}

function palindrome2(str) {
  let rev = str.split("").reduce((rev, char) => char + rev, "");
  return str === rev;
}                                   

function palindrome3(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

function palindrome4(str) {
  const test = str.split('')
  let result
  test.forEach((e, i) => {
    if (e === test[test.length - i - 1]) {
      result = true
    } else {
      result = false
    }
  })
  return result
}

console.log(palindrome4('aba')) 
module.exports = { palindrome, palindrome3 };
