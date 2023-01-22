function createMatrix(edges) {
  // TODO: 여기에 코드를 작성합니다.
  let matrix = [];
  // 최댓값 구하기
  let num = Math.max(...edges.map((e) => e.slice(0, 2)).flat());
  for (let i = 0; i < num + 1; i++) {
    matrix.push(new Array(num + 1).fill(0));
  }
  edges.forEach((e) => {
    e[2] === "undirected" ? (matrix[e[1]][e[0]] = 1) : null;
    matrix[e[0]][e[1]] = 1;
  });
  return matrix;
}

const output1 = createMatrix([
  [0, 3, "directed"],
  [0, 2, "directed"],
  [1, 3, "directed"],
  [2, 1, "directed"],
]);

console.log(output1);
/**
 * [
 *  [0, 0, 1, 1],
 *  [0, 0, 0, 1],
 *  [0, 1, 0, 0],
 *  [0, 0, 0, 0]
 * ]
 */

const output2 = createMatrix([
  [0, 2, "directed"],
  [2, 4, "undirected"],
  [1, 3, "undirected"],
  [2, 1, "directed"],
]);

console.log(output2);
/**
 * [
 *  [0, 0, 1, 0, 0],
 *  [0, 0, 0, 1, 0],
 *  [0, 1, 0, 0, 1],
 *  [0, 1, 0, 0, 0],
 *  [0, 0, 1, 0, 0],
 * ]
 */
