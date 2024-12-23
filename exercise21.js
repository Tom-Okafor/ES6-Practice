/* 
[Exercise] Multiple Properties with Enhanced Notation
Question
Refactor to use enhanced literal notation.

const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red: red, blue: blue }; */

(() => {
  const red = "#ff0000";
  const blue = "#0000ff";

  const COLORS = { red, blue };
  console.log(COLORS);
})();
