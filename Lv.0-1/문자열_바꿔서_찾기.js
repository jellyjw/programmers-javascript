function solution(myString, pat) {
  const result = [...myString]
    .map((el) => (el === "A" ? "B" : "A"))
    .join("")
    .includes(pat);
  return result ? 1 : 0;
}

console.log(solution("ABAB", "ABAB"));
