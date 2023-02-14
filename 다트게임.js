function solution(dartResult) {
  // S, D, T 영역이 존재하고 각 영역 당첨시 1제곱, 2제곱, 3제곱으로 계산

  // 제곱해주는 함수
  const pow = (num1, num2) => {
    return Math.pow(Number(num1), num2);
  };

  // 스타상 * 바로 전 점수 2배, 첫번째 기회에서 나올경우 첫번째 스타상의 점수만 2배
  // 아차상 # 해당 점수 마이너스
  // 중첩된 스타상(*)은 4배가 된다.
  // S, D, T는 하나씩 존재
  // *이나 #은 둘 중 하나만 존재할 수 있다.

  // 기호는 기호대로,
  // 점수는 점수대로 나눠보기

  const 기호 = ["*", "#"];
  const 상 = ["S", "D", "T"];
  var arr = [];
  상.map((ele) => {
    for (let i = 0; i < dartResult.length; i++) {
      if (
        dartResult[i] === ele ||
        dartResult[i] === 기호[0] ||
        dartResult[i] === 기호[1]
      ) {
        arr.push(dartResult.slice(i - 1, i + 1));
      }
    }
  });

  arr;
  const set = [...new Set(arr)];
  set;
  const carc = [];

  const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  arr.map((el) => {
    for (let i = 0; i < number.length; i++) {
      if (el === number[i] + "S") {
        carc.push(pow(number[i], 1));
      } else if (el === number[i] + "D") {
        carc.push(pow(number[i], 2));
      } else if (el === number[i] + "T") {
        carc.push(pow(number[i], 3));
      }
    }
  });

  carc;
  return carc.reduce((acc, cur) => acc + cur);
}

console.log(solution("1S2D*3T")); // 37
// console.log(solution("1D2S#1")); // 9
// console.log(solution("1D2S0T")); // 3
// console.log(solution("1S*2T*")); // 23
// console.log(solution("1D#2S*")); // 5
// console.log(solution("1T2D3D#")); // -4
// console.log(solution("1D2S3T*")); // 59
