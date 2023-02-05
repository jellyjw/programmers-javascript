function solution(s) {
  return s
    .split("")
    .map((e, i, a) =>
      a.slice(0, i).includes(e) ? i - a.slice(0, i).lastIndexOf(e) : -1
    );
}

console.log(solution("banana")); // [-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")); // [-1, -1, 1, -1, -1, -1]
