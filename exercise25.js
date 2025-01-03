/* 
[Exercise] Using Default Arguments
Question
Refactor the following code to use default function arguments. Be sure to remove any unused code after you refactor it.

function sum(a, b) {
  if (a === undefined) { a = 0; }
  if (b === undefined) { b = 0; }

  return a + b;
} */

(() => {
  function sum(a = 0, b = 0) {
    return a + b;
  }
  console.log(sum(2,6));
})();
