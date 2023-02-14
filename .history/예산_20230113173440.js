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
  let result = [];
  for (let i = 0; i < d.length; i++) {
    if (result <= budget) {
      result.push(d[i]);
    }
  }
  return result.length;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
