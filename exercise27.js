/* 
[Exercise] Many, Many Arguments
Question
Refactor the following function to use the rest operator. Remember, an argument using the rest operator does not need to be called 'rest'.

function product(a, b, c, d, e) {
  var numbers = [a, b, c, d, e];

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}
*/
(() => {
    
function product(...numbers) {

  return numbers.reduce(function (acc, number) {
    return acc * number;
  }, 1);
}
console.log(product(1,4,2,9,6,3,9))
})();
