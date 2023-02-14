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
  let count = 0;
  d.forEach((el, i) => {
    if (el[i] + el[i + 1] < budget) {
      count++;
    }
  });
  return count;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
