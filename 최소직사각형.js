function solution(sizes) {
  let w = [];
  let h = [];

  sizes.map((el, idx) => {
    w[idx] = Math.max(...el);
    h[idx] = Math.min(...el);
  });

  return Math.max(...w) * Math.max(...h);
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
); // 4000
