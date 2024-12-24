/* [Exercise] Spreadin' Arrays
Question
Refactor the following to use the spread operator.

function join(array1, array2) {
  return array1.concat(array2);
}
 */

function join(array1, array2) {
  return [...array1, ...array2];
}
console.log(
  ["llama", "dog", "butterfly", "songbird"],
  ["meat", "fishPie", "Afang"]
);
