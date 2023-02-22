/*
원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용
한번 사용한 카드는 다시 사용할 수 없고,
카드를 사용하지 않고 다음 카드로 넘어갈 수 없다.
기존 카드뭉치의 단어 순서는 바꿀 수 없다.
*/

function solution(cards1, cards2, goal) {
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[0]) {
      cards1.shift();
    } else if (goal[i] === cards2[0]) {
      cards2.shift();
    } else {
      return "No";
    }
  }
  return "Yes";
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); // "Yes"

console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); // "No"
