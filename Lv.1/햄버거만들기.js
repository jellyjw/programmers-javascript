function solution(ingredient) {
  var answer = 0;
  let arr = [];

  for (let i = 0; i < ingredient.length; i++) {
    arr.push(ingredient[i]);
    if (arr.slice(-4).join("") === "1231") {
      arr.splice(-4);
      answer++;
    }
  }

  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); // 2
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); // 0
