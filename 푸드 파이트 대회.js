function solution(food) {
  // 음식의 양을 2로 나눠서 몫만큼만 음식을 배치
  // 홀수일땐
  let arr = [];
  food.map((a, i) => {
    if (a >= 2) {
      let result = Math.floor(a / 2);
      arr.push(String(i).repeat(result));
    }
  });
  const ans = [arr.join(""), 0, arr.reverse().join("")];
  return ans.join("");
}

console.log(solution([1, 3, 4, 6]));
console.log(solution([1, 7, 1, 2]));
