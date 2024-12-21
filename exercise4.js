/*
[Exercise] Calculate Values with map()
Using map(), create a new array that contains the (distance / time) value from each trip. In other words, the new array should contain the (distance / time) value. Assign the result to the variable speeds.

Question
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds; */

(() => {
  const TRIPS = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 },
  ];

  const SPEEDS = TRIPS.map((trip) => {
    const { distance } = trip;
    const { time } = trip;
    return calculateSpeed(distance, time);
  });
  console.log(SPEEDS);
  function calculateSpeed(distance, time) {
    return distance / time;
  }
})();
