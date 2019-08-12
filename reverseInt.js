// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let str = `${n}`;
  const q = str.split("").reduce((rev, char) => {
    return char + rev;
  }, "");
  if (str < 0) {
    return parseInt("-" + q);
  }
  return parseInt(q);
}

function reverseInt2(n) {
  let str = n.toString();
  let q = str.split("").reduce((rev, char) => {
    return char + rev;
  }, "");
  if (str < 0) {
    return parseInt("-" + q);
  }
  return parseInt(q);
}

function reverseInt3(n) {
  let str = n.toString();

  function reverse() {
    return str.split("").reduce((rev, char) => {
      return char + rev;
    }, "");
  }
  if (str < 0) {
    return parseInt("-" + reverse());
  }
  return parseInt(reverse());
}

function reverseInt4(n) {
  let rev = n
    .toString()
    .split("")
    .reverse()
    .join("");
  if (n < 0) {
    return parseInt(rev) * -1;
  }

  return parseInt(rev);
}

function reverseInt5(n) {
  let rev = n
    .toString()
    .split("")
    .reverse()
    .join("");
  if (n < 0) {
    return parseInt(rev) * -1;
  }
  return parseInt(rev);
}

function reverseInt6(n) {
  let rev = n
    .toString()
    .split("")
    .reverse()
    .join("");
  if (n < 0) {
    return parseInt(rev) * Math.sign(n);
  }
  return parseInt(rev);
}
debugger;
module.exports = reverseInt;
