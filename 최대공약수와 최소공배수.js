// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 유클리드 호제법 이용

// 최대공약수 구하는 함수
function gcd(a, b) {
  // 단, a가 b보다 커야함.
  if (b == 0) return a;
  else return gcd(b, a % b);
}

// function gcd(a, b) {
//   return b ? gcd(b, a % b) : Math.abs(a);
// }

function solution(n, m) {
  let a1 = n > m ? n : m; // n이 m보다 크면 n을 리턴, 작으면 m을 리턴
  let a2 = n < m ? n : m; // n이 m보다 작으면 n을 리턴, 작으면 m을 리턴
  let a3 = gcd(a1, a2); // 최대공약수
  return [a3, (a1 * a2) / a3];
}

console.log(solution(3, 12)); // [3, 12]
console.log(solution(2, 5)); // [1, 10]
