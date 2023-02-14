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
  let rere = [];
  let count = 0;
  for (let i = 0; i < d.length; i++) {
    if (result < budget) {
      result;
      result += d[i];
      count++;
    }
  }
  return count;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
