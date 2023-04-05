function solution(s) {
  if (s.includes("e")) return false;
  if ((s.length === 4 || s.length === 6) && !isNaN(Number(s))) {
    return true;
  } else {
    return false;
  }
}

console.log(solution("a234")); // false
console.log(solution("1234")); // true
console.log(solution("3e10")); // false
console.log(solution("10e1")); // false

console.log(parseInt("a234"));
console.log(parseInt("1234"));
