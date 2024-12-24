/* 

[Exercise] Mixing Rest and Spread
Question
Refactor the following to use only the rest operator.

function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}
*/
function unshift(array, ...letters) {
  return [...array, ...letters];
}
console.log(
  unshift(
    ["abacus", "basket", "caterpillar"],
    "dog",
    "elephant",
    "fish",
    "goldfish"
  )
);
