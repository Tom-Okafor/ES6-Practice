/* 

[Exercise] Refactor to Use Enhanced Literal Notation
Question
Refactor to use enhanced literal notation.

const color = 'red';

const Car = {
  color: color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};

*/

const color = "red";

const Car = {
  color,
  drive() {
    return "Vroom!";
  },
  getColor() {
    return this.color;
  },
};
console.log(
  `Car is of colour ${
    Car.color
  }. The car is driving ${Car.drive()}. Oh! What a beautiful ${Car.getColor()}  car!`
);
