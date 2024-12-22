/* 
[Exercise] Custom Unique Helper
Question
Write a function called unique that will remove all the duplicate values from an array. For example, given the following array var numbers = [1, 1, 2, 3, 4, 4];. Your function should return [1, 2, 3, 4]. 
*Hint: Use the reduce and find helpers.

*/

(() => {
  /*function unique(arr) {
    let accumulate = [];
    let checked;
    arr.forEach((item) => {
      checked = accumulate.find((elem) => {
        return elem === item;
      });
      if (!checked) {
        accumulate.push(item);
      }
    });
    return accumulate;
  }
*/

  function unique(array) {
    return array.reduce((empty, elem) => {
      const check = empty.find((target) => {
        return target === elem;
      });
      if (!check) {
        empty.push(elem);
      }
      return empty;
    }, []);
  }

  const NUMBERS = [
    0, 0, 1, 1, 3, 4, 5, 3, 2, 4, 5, 2, 3, 5, 7, 8, 6, 3, 2, 1, 8,
  ];
  console.log(unique(NUMBERS));
})();
