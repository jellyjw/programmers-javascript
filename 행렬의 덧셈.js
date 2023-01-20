function solution(arr1, arr2) {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    arr[i] = [];
    for (let j = 0; j < arr1[i].length; j++) {
      arr[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return arr;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);

console.log(solution([[1, 2]], [[3, 4]]));

// [[4,6],[7,9]]
