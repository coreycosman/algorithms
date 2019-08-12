function solution(N) {
  const binaryN = N.toString(2);

  let countGapLength = 0;
  let gapLengthArray = [];
  let binaryArray = [];

  for (let char of binaryN) {
    binaryArray.push(char);
  }
  binaryArray.forEach((e, i, a) => {
    if (e === "1") {
      gapLengthArray.push(countGapLength);
      countGapLength = 0;
    } else if (e === "0") {
      countGapLength++;
    }
  });

  let intArray = gapLengthArray.map(e => {
    return parseInt(e);
  });
  let highestInt = 0;
  intArray.forEach((e, i, a) => {
    if (e > highestInt) {
      highestInt = e;
    }
  });
  return highestInt;
}

solution(9);
solution(17);
solution(6291457);
solution(1610612737);
solution(1073741825);
