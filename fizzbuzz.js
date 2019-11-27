// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

(function fizzBuzz(n = 15) {
  const array = Array.from({ length: n }, (v, k) => k + 1);
  const test = array.map(e => {
    if (e % 15 === 0) {
      return "fizzbuzz";
    }
    if (e % 3 === 0) {
      return "fizz";
    }
    if (e % 5 === 0) {
      return "buzz";
    }
    return e;
  });
  return test.forEach(e => console.log(e));
})();

// function fizzBuzz(n) {
//   let count = 0;
//   let arr = [];
//   while (count < n) {
//     arr.push(count + 1);
//     count++;
//   }
//   for (num of arr) {
//     if (num % 3 === 0 && num % 5 === 0) {
//       console.log("fizzbuzz");
//     } else if (num % 3 === 0) {
//       console.log("fizz");
//     } else if (num % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(num);
//     }
//   }
// }
//
// function fizzBuzz2(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 15 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
//
// fizzBuzz2(30);
//
// module.exports = { fizzBuzz, fizzBuzz2 };
