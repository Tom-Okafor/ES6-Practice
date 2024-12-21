/* Processing Values
Question
The array below contains an array of objects, each of which is a representation of an image. Using the forEach() helper, calculate the area of each image and store it in a new array called areas. The area of an image can be calculated as image.height * image.width.

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];
 */

(() => {
  const IMAGES = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 },
  ];
  const AREAS = [];
  function calculateArea(height, width) {
    return height * width;
  }
  IMAGES.forEach((image) =>
    AREAS.push(calculateArea(image.height, image.width))
  );
  console.log(AREAS);
})();
