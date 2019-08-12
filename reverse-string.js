// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// without reverse

function reverse(str) {
  let toArray = str.split("");
  let reversedArray = [];
  for (let i = 0; i < toArray.length + i; i++) {
    reversedArray.push(toArray.pop());
  }
  reversedArray.push(toArray.join(","));
  reversedArray.pop();
  return reversedArray.join("");
}

function reverse2(str) {
  let reversed = "";
  for (let character of str) {
    console.log(reversed);
    reversed = character + reversed;
  }
  return reversed;
}

function reverse3(str) {
  return str
    .split("")
    .reduce((reversed, character) => character + reversed, "");
}

//with reverse
//
function revWithReverseFn(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

module.exports = {
  reverse,
  revWithReverseFn,
  reverse2,
  reverse3
};
