// 소수 판별하는 함수
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 주어진 배열 중 3개를 더해 소수가 나올 경우의 수를 판별하는 함수
function solution(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) count++;
      }
    }
  }
  return count;
}

console.log(solution([1, 2, 3, 4])); // 1
console.log(solution([1, 2, 7, 6, 4])); // 4
