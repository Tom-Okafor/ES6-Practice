/*
[Exercise] Handling Permissions with Filter
Question
Filter the array of users, only returning users who have admin level access. Assign the result to the variable filteredUsers. Don't forget to use the return keyword in the function!

var users = [
 { id: 1, admin: true },
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers; */

(() => {
  function filterUsers(arr) {
    return arr.filter((item) => {
      const { admin } = item;
      return admin === true;
    });
  }
  const USERS = [
    { id: 1, admin: true },
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
  ];
  const FILTERED_USERS = filterUsers(USERS);
  console.log(FILTERED_USERS);
})();
