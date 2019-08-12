function test(array) {
  let order = {};
  let count = 0;
  array.forEach(e => {
    if (e > count) count = e;
  });

  array.forEach(e => {
    order[e] = order[e] ? order[e] + 1 : 1;
  });

  const orderArray = Object.keys(order).map(key => {
    return parseInt(key);
  });

  const lastInt = orderArray.slice(-1)[0];

  const newArray = Array.from({ length: lastInt }, (v, k) => k + 1);

  const newArrayAsObject = {};

  newArray.forEach(e => {
    newArrayAsObject[e] = newArrayAsObject[e] ? newArrayAsObject[e] + 1 : 1;
  });

  const filtered = Object.keys(newArrayAsObject).filter(key => {
    return !orderArray.includes(parseInt(key));
  });

  const filteredObject = {};
  filtered.forEach(e => {
    filteredObject[e] = filteredObject[e] ? filteredObject[e] + 1 : 1;
  });

  const checkSpacingEquals1 = array => {
    let result = null;
    return (result = array.slice(-1)[0] === array.length ? true : false);
    // for (let i = 0; i < a.length - 1; i++) {
    //
    //   debugger
    //
  };

  // array.forEach((e, i, a) => {
  // value[i+1] - vlaue[i] = value[i+2] - value[i+1]
  //         1 2 5, i=0
  //        2-1

  // result = e + 1 - e === e + 2 - (e + 1) ? true : false;
  // if ((a + 1) - e === (e + 2) - (e + 1)) {
  //   result = true;
  // } else {
  //   result = false;
  // }
  // });
  // return result;
  // };

  // const a = [1, 2, 3, 4];
  //
  // a.forEach((e, i, a) => {
  //   debugger;
  // });

  // checkEqualSpacing(array);

  if (checkSpacingEquals1(array)) {
    return count + 1;
  } else {
    return parseInt(filtered[0]);
  }

  // return parseInt(filtered[0]);
}

//if i=length-1 then stop

// console.log(test([1, 3, 6, 10, 1, 2, 18, 20]));
console.log(test([1, 2, 3, 4]));
// console.log(test([1, 3, 6, 4, 1, 2]));
// console.log(test([−1, −3]));

// This is a demo task.
//
// Write a function:
//
// function solution(A);
//
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
//
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
//
// Given A = [1, 2, 3], the function should return 4.
//
// Given A = [−1, −3], the function should return 1.
//
// Write an efficient algorithm for the following assumptions:
//
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
