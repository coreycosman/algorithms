function arrayRotation(A, K) {
  while (K > 0) {
    let rotated;
    rotated = A.pop();
    A.unshift(rotated);
    K--;
  }
  return A;
}

arrayRotation([1, 2, 3, 4], 4);
