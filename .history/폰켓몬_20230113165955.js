// function solution(nums) {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== nums[i + 1]) {
//       result.push(nums[i]);
//     }
//   }
//   return result.length;
// }

// function solution(nums) {
//   let result = [];
//   let com = nums.filter((el, i) => el === i )
// return com.length
// }

// function solution(nums) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         continue;
//       } else {
//         count++;
//       }
//     }
//   }
//   return count;
// }

function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];
  return arr.length > max ? max : arr.length;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
