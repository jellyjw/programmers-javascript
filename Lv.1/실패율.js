function solution(N, stages) {
  let answer = [];
  let user = stages.length;

  for (let i = 1; i <= N + 1; i++) {
    let tmp = stages.filter((n) => n === i).length;
    answer.push([i, tmp / user]);
    user -= tmp;
  }
  answer.pop();
  answer = answer.sort((a, b) => b[1] - a[1]);
  return answer.map((a) => a[0]);
}
