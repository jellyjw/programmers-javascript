function solution(name, yearning, photo) {
  var answer = [];
  let chart = {};
  name.forEach((x, i) => {
    chart[x] = yearning[i];
  });

  answer = photo.map((p) => {
    let sum = 0;
    p.forEach((n) => {
      if (chart[n]) {
        sum += chart[n];
      } else {
        sum += 0;
      }
    });
    return sum;
  });
  return answer;
}
