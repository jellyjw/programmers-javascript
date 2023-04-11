/**
 * photo의 배열을 map 메서드를 이용해서 name과 일치하는것만 filter
 * key가 name이고 value가 yearning인 객체 생성
 * 더하기!
 */
function solution(name, yearning, photo) {
  //   const arr = [];
  //   const obj = name.reduce(
  //     (acc, cur, idx) => ({ ...acc, [cur]: yearning[idx] }),
  //     {}
  //   );
  //   console.log(obj);

  //   for(let i=0; i<photo.length; i++){
  //     let score = 0;
  //     for(let j=0; j<photo[i].length; j++){
  //         score +=
  //     }
  //   }
  const answer = [];
  const hash = new Map();
  name.forEach((item, index) => {
    hash.set(item, yearning[index]);
  });
  for (let i = 0; i < photo.length; i++) {
    let count = 0;
    for (let j = 0; j < photo[i].length; j++) {
      const score = hash.get(photo[i][j]);
      if (!score) continue;
      count += score;
    }
    answer.push(count);
  }
  return answer;
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
); // [19, 15, 6]
