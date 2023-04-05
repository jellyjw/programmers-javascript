function getPermutation(el) {
  if (el.length === 1) return [el];
  const permutations = [];
  const smallerPermutations = getPermutation(el.slice(1));
  const firstElement = el[0];
  smallerPermutations.forEach((permutation) => {
    for (
      let positionIndex = 0;
      positionIndex <= permutation.length;
      positionIndex++
    ) {
      const prefix = permutation.slice(0, positionIndex);
      const suffix = permutation.slice(positionIndex);
      permutations.push(prefix.concat([firstElement], suffix));
    }
  });
  return permutations;
}

console.log(getPermutation([1, 3, 2]));
