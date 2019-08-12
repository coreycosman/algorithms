function countSemiPrimes(P, Q, N) {
  const staticArrayLength = P.length;
  let arrayLength = P.length;
  let arrayOfEmptyArrays = [];
  let arrayOfSeqElements = [];
  let obj = {};
  let copyP = P;
  let copyQ = Q;

  while (arrayLength > 0) {
    arrayOfEmptyArrays.push(new Array());
    arrayLength--;
  }

  arrayLength = P.length;

  while (arrayLength > 0) {
    arrayOfSeqElements.push(copyP[0]);
    copyP.shift();
    arrayOfSeqElements.push(copyQ[0]);
    copyQ.shift();
    arrayLength--;
  }

  arrayLength = staticArrayLength;
  while (arrayLength > 0) {
    arrayOfEmptyArrays.forEach((e, i) => {
      obj[i] = arrayOfSeqElements.splice(0, 2);
      arrayLength--;
      return obj;
    });
  }
  let obj2 = {};
  let test = Object.values(obj);

  test.forEach((e, i, a, max = N) => {
    if (e[0] > e[1]) e.sort();

    if (e[1] > max) e[1] = max;
    function range(start, end) {
      if (start === end) {
        return [start];
      }
      return [start, ...range(start + 1, end)];
    }
    obj2[i] = range(e[0], e[1]);
  });

  debugger;
}

countSemiPrimes([1, 4, 16], [36, 10, 20], 26);

// function test(P, Q) {
//   const sp = [4, 6, 9, 10, 14, 15, 21, 22, 25, 26];
//   const array = [];
//   // for K from 1 to M
//   let thing = 0;
//   let pThing = P[thing];
//   let qThing = Q[thing];
//   sp.forEach((e, i, arr1 = P, arr2 = Q) => {
//     if (thing < 3 && e > pThing && e < qThing) {
//       array.push(e);
//       debugger;
//       thing++;
//     }
//     // if (thing < 3) thing++;
//   });
//   debugger;
// }
// test([1, 4, 16], [26, 10, 20]);
// test(10, 20);

// [4, 6, 9, 10, 14, 15, 21, 22, 25, 26]

// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
// [4,5,6,7,8,9,10]
// [16,17,18,19,20]
