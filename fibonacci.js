function fibonacci(index) {
  let seq = [1, 1];

  if (index === 0) {
    return 1;
  }
  for (let i = 2; i < index; i++) {
    seq[i] = seq[i - 1] + seq[i - 2];
  }
  return seq[index - 1];
}

function fibonacci2(index) {
  let seq = [1, 1];
  let count = 2;
  if (index === 0) return [1];
  if (index === 1) return seq;
  while (index >= count) {
    seq[count] = seq[count - 1] + seq[count - 2];
    count++;
  }
  debugger;
}

// recursive
function fibonacci3(index) {
  if (index < 1) {
    return 0;
  }
  if (index <= 2) {
    return 1;
  }
  return fibonacci3(index - 1) + fibonacci3(index - 2);
}

console.log(fibonacci3(10));
