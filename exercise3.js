/* Plucking Values
Question
Using map(), create a new array that contains the height property of each object. Assign this new array to the variable heights. Don't forget to use the return keyword in the function!

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights; */
(() => {
  const IMAGES = [
    { height: "34px", width: "39px" },
    { height: "54px", width: "19px" },
    { height: "83px", width: "75px" },
  ];
  const HEIGHTS = IMAGES.map((image) => image.height);
  console.log(HEIGHTS);
})();
