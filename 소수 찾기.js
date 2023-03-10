function solution(n) {
  const arr = [];

  // 인덱스 번호가 주어진 숫자 n과 대응하도록
  // 빈 배열을 만들고 원소는 true 값으로 채워준다.
  // 여기서 true 는 소수라는 의미이다.
  // 배열은 0부터 시작하므로, 주어진 숫자 n에 1을 더해준다.
  for (let i = 0; i <= n; i++) {
    arr.push(true);
  }

  // 주어진 수의 제곱근까지만 계산해서 불필요한 반복을 최소화한다.
  // arr[i] 가 소수일 경우, 반복문을 진행한다.
  // 맨 처음 시작하는 2는 소수이므로,
  // 2를 제외한 2의 제곱부터, 제곱 값만 체크하여 지워나간다.
  // 제곱근까지 반복한다.
  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  // 0과 1은 소수가 아니므로 false 값으로 바꿔준다.
  arr.splice(0, 2, false, false);

  // 배열에서 true인 값만 걸러내고, true인 값의 개수를 출력한다.
  const result = arr.filter((value) => {
    return value !== false;
  });

  return result.length;
}

console.log(solution(10)); // 4
console.log(solution(5)); // 3
