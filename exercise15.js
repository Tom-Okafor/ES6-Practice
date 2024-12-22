/* 
[Exercise] Reducing Properties
Question
Use the reduce helper to create an object that tallies the number of sitting and standing desks. The object returned should have the form { sitting: 3, standing: 2 }. The initial value has been provided to you.

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];
*/
(() => {
  const DESKS = [
    { type: "sitting" },
    { type: "standing" },
    { type: "sitting" },
    { type: "sitting" },
    { type: "standing" },
  ];
  const DESK_TYPES = DESKS.reduce(
    (obj, desk) => {
      if (desk.type === "sitting") {
        obj.sitting++;
        return obj;
      }
      obj.standing++;
      return obj;
    },
    {
      sitting: 0,
      standing: 0,
    }
  );
  console.log(DESK_TYPES);
})();
