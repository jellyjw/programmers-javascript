// function solution(a, b) {
//   var answer = 1234567890;
//   let result = 0;
//   for (let i = 0; i < a.length; i++) {
//     result += a[i] * b[i];
//   }
//   return result;
// }

function solution(a, b) {
  return a.reduce((acc, cur, idx) => (acc += cur * b[idx]), 0);
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
console.log(solution([-1, 0, 1], [1, 0, 1]));
