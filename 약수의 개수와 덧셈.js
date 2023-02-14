// function solution(left, right) {
//   var answer = 0;
//   for (let i = left; i <= right; i++) {
//     if (Number.isInteger(Math.sqrt(i))) {
//       answer -= i;
//     } else {
//       answer += i;
//     }
//   }
//   return answer;
// }

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Math.sqrt(i) % 1 === 0) answer -= i;
    else answer += i;
  }
  return answer;
}

console.log(solution(13, 17));
console.log(solution(24, 27));
