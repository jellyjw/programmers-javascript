function solution(s, skip, index) {
  //   const 알파벳 = [
  //     "A",
  //     "B",
  //     "C",
  //     "D",
  //     "E",
  //     "F",
  //     "G",
  //     "H",
  //     "I",
  //     "J",
  //     "K",
  //     "L",
  //     "M",
  //     "N",
  //     "O",
  //     "P",
  //     "Q",
  //     "R",
  //     "S",
  //     "T",
  //     "U",
  //     "V",
  //     "W",
  //     "X",
  //     "Y",
  //     "Z",
  //   ];

  //   const 소문자 = 알파벳.map((el) => el.toLowerCase());
  //   const idx = s.split("").map((el) => 소문자.indexOf(el));
  //   const skipStr = skip.split("");

  //   // 소문자 배열에서 skipStr 배열이 없는걸 필터링한다.
  //   const newArr = 소문자.filter((el) => !skipStr.includes(el));

  //   // 1. 문자열 s의 각 알파벳을 index 만틈 뒤의 알파벳으로 바꿔준다.
  //   // ==> s의 인덱스를 알파벳 모아놓은 배열로 찾고, + index를 해서 또 알파벳 배열에서 찾는다.
  //   const a = idx.map((el) => newArr[el]);

  //   return s
  //     .split("")
  //     .map((el) => {
  //       let i = newArr.indexOf(el);
  //       return i + index >= newArr.length
  //         ? newArr[i + index] % newArr.length
  //         : newArr[i + index];
  //     })
  //     .join("");
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let newAlphabets = alphabets.split("").filter((e) => !skip.includes(e));
  console.log(skip.includes("d"));
  return s
    .split("")
    .map((e) => {
      let i = newAlphabets.indexOf(e);
      return i + index >= newAlphabets.length
        ? newAlphabets[(i + index) % newAlphabets.length]
        : newAlphabets[i + index];
    })
    .join("");
}

console.log(solution("aukks", "wbqd", 5)); // 'happy'
