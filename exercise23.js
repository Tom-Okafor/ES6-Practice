/* [Exercise] Literals in Functions
Question
Refactor to use enhanced literal notation.

const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return {
    width: width,
    height: height
  };
} */

const canvasDimensions = function (width, initialHeight) {
  const height = (initialHeight * 9) / 16;
  return {
    width,
    height,
  };
};
console.log(canvasDimensions(300, 180));
