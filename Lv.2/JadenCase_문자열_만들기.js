function solution(s) {
  const arr = s.split(" ");
  return arr
    .map((item) => {
      if (item.length === 0) {
        return "";
      }
      return item[0].toUpperCase() + item.slice(1).toLowerCase();
    })
    .join(" ");
}

console.log(solution("3people unFollowed me"));
console.log(solution("hello  world")); // "Hello  World"
console.log(solution("for the last week"));
