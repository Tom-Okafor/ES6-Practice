/*
[Exercise] Implementing reject
Question
Create a function called reject. Reject should work in the opposite way of filter - if a function returns true, the item should not be included in the new array.



THE FILTER HELPER
Hint: you can reuse filter.

Example:

var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number) {
  return number > 15;
});

// returns: [10]
lessThanFifteen()
 */

// personal solution
function reject(arr) {
  return arr.filter((item) => {
    return !(item > 50);
  });
}

console.log(reject([40, 70, 100, 45, 88]));

//solution based on hint
function reject2(arr, cb) {
  const firstFilter = arr.filter(cb);
  return arr.filter((item) => {
    return firstFilter.indexOf(item) === -1;
  });
}
const GREATER_THAN_50 = reject2([40, 70, 100, 45, 88], (number) => {
  return number > 50;
});
console.log(GREATER_THAN_50);
