/**
 * 'X..X'
 * 'XX...XXX..XX'
 * 같은 것들이 있을 때, 머신은 한번에 연속적으로 3칸을 프레스할 수 있다.
 * 머신을 사용하면 X -> . 으로 대체된다.
 * 모든 X를 .로 만드는 최소 머신 사용 횟수를 구하라.
 */

function solution(s) {
  let count = 0;
  const newArr = s.split("");

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "X") {
      i += 2;
      count++;
    }
  }

  return count;
}

console.log(solution("X..X")); // 2
console.log(solution("XX...XXX..XX")); // 3
console.log(solution("XXXX..XXX.XX.XXX.X.X.X.X.X.X.X.XXXXXX.X.XXX.XXX")); // 14
