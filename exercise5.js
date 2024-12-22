/*
[Exercise] Implement Pluck
Question
Implement a pluck function. Pluck should accept an array and a string representing a property name and return an array containing that property from each object.

Example

var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

// returns ['red', 'yellow', 'blue']
pluck(paints, 'color');
Hint

Remember that you can access a property on an object by using square bracket notation.

var person = { name: 'Bill' };
// returns 'Bill'
person['name']; */

(() => {
  function pluck(array, string) {
    return array.map((item) => item[string]);
  }
  const PAINTS = [{ color: "red" }, { color: "blue" }, { color: "yellow" }];
  console.log(pluck(PAINTS, "color"));
  const INVENTORY = [
    { id: "001", item: "Glassware", stock: 199 },
    { id: "002", item: "Bowl Plates", stock: 233 },
    { id: "003", item: "Rubber Spoons", stock: 199 },
  ];
  console.log(pluck(INVENTORY, "item"));
})();
