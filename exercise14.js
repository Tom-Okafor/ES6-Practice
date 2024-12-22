/* 
[Exercise] Distance Traveled
Question
Use the reduce helper to find the sum of all the distances traveled. Assign the result to the variable totalDistance.

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance; */

(() => {
  const TRIPS = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];
  const TOTAL_DISTANCE = TRIPS.reduce((totalDistance, trip) => {
    return totalDistance + trip.distance;
  }, 0);
  console.log(TOTAL_DISTANCE);
})();
