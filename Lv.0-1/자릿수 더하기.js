function solution(n) {
  return n
    .toString()
    .split("")
    .map((el) => Number(el))
    .reduce((a, b) => a + b);
}

console.log(solution(123));
console.log(solution(987));
