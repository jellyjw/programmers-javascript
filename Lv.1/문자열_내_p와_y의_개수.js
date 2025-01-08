function solution(s) {
  var answer = true;

  const string = s.toUpperCase();
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "P") {
      count += 1;
    } else if (string[i] === "Y") {
      count -= 1;
    }
  }

  if (count !== 0) {
    answer = false;
  }

  return answer;
}
