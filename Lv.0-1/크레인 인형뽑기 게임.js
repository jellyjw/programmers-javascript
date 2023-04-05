// function solution(board, moves) {
//   let bucket = [];
//   let count = 0;
//   let idx = moves.map((el) => el - 1);
//   console.log(idx);

//   for (let i = 0; i < moves.length; i++) {
//     for (let j = 0; j < board.length; j++) {
//       if (board[j][moves[i] - 1] !== 0) {
//         bucket.push(board[j][moves[i] - 1]);
//       }
//     }
//   }

//   for (let i = 0; i <= bucket.length; i++) {
//     if (bucket[i] === bucket[i + 1]) {
//       bucket.pop();
//       count++;
//     }
//   }

//   /*
//   for (let i = 0; i < board.length; i++) {
//     moves.map((zz) => {
//       if (board[i][zz - 1] !== 0) {
//         bucket.push(board[i][zz - 1]);
//       }
//     });
//   }

//   for (let i = 0; i < bucket.length; i++) {
//     if (bucket[i] === bucket[i + 1]) {
//       count++;
//     }
//   }
//   */

//   return count;
// }

function solution(board, moves) {
  let basket = [];
  let count = 0;
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let num = board[j][moves[i] - 1];

      if (num === 0) {
        continue;
      } else {
        board[j].splice(moves[i] - 1, 1, 0);

        if (basket[basket.length - 1] === num) {
          basket.pop();
          count += 2;
        } else basket.push(num);
        break;
      }
    }
  }
  return count;
}
console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
); // 4

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
