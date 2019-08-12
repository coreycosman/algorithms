// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {};
  q = str.split("");
  let n = 2;
  let max = 0;
  let maxChar = "";

  q.forEach((char, i) => {
    if (!obj[char]) {
      obj[`${char}`] = 1;
    } else {
      obj[char]++;
    }
  });
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      maxChar = key;
    }
  }
  return maxChar;
}

function maxChar2(str) {
  let obj = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      maxChar = key;
    }
  }
  console.log(maxChar);
  return maxChar;
}
maxChar2("qqqellloooo ");

module.exports = { maxChar, maxChar2 };
