/* Question
Refactor the function to use template strings

function doubleMessage(number) {
  return "Your number doubled is " + (2 * number);
 
 
 [Exercise] Name Helpers
Question
Refactor the function to use template strings.

function fullName(firstName, lastName) {
  return firstName + lastName;
} */

(() => {
  function doubleMessage(number) {
    return `Your number doubled is ${2 * number}`;
  }
  function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }

  console.log(doubleMessage(40));
  console.log(fullName("Emeka", "Okafor"));
})();
