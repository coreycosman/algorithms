// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunked = [];
  let indexWidth = size;
  for (i = 0; i <= array.length; i += size) {
    let chunk = array.slice(i, indexWidth);
    chunked.push(chunk);
    indexWidth += size;
  }
  return chunked;
}

function chunk2(array, size) {
  let chunked = [];
  for (i = 0; i <= array.length; i += size) {
    let indexWidth = i + size;
    let chunk = array.slice(i, indexWidth);
    chunked.push(chunk);
    debugger;
  }
  return chunked;
}

function chunk3(array, size) {
  let chunked = [];
  let i = 0;
  while (i < array.length) {
    chunked.push(array.slice(i, i + size));
    i += size;
  }
  return chunked;
}

function chunk4(array, size) {
  let chunked = [];

  for (let element of array) {
    let last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([element]);
    } else last.push(element);
  }
  return chunked;
}

chunk2([1, 2, 3, 4, 5], 2);

module.exports = { chunk, chunk2, chunk3 };
