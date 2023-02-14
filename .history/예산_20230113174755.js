// function solution(d, budget) {
//   let count = 0;
//   d.forEach((el, i) => {
//     if (el[i] + el[i + 1] < budget) {
//       count++;
//     }
//   });
//   return count;
// }

function solution(d, budget) {
  let result = 0;
  d.sort((a, b) => a - b); // 오름차순 정렬로 최대한 많은 부서 지원
  for (let i = 0; result <= budget; i++) {
    if (result + d[i] <= budget) {
      result += d[i];
      continue;
    }
  }
  return i;
}
console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
