/* [Exercise] Destructuring in Practice
Question
The snippet of code below duplicates references to profile inside of the isEngineer function. Perhaps we can reduce the amount of code used for referencing the title and department properties. Refactor this code to use destructuring. Can you get the body of the isEngineer function down to a single line?

const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer(profile) {
  var title = profile.title;
  var department = profile.department;
  return title === 'Engineer' && department === 'Engineering';
} */

(() => {
  const profile = {
    title: "Engineer",
    department: "Engineering",
  };

  function isEngineer({ title, department }) {
    return title === "Engineer" && department === "Engineering";
  }
  console.log(isEngineer(profile));
})();
