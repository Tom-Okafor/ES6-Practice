/*[Exercise] Finding Admin Users
Question
Find the user in the users's array who is an admin. Assign this user to the variable admin.

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin;
 */
(() => {
  const USERS = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true },
  ];
  function findAdminUsers(users) {
    return users.find((user) => {
      return user.admin === true;
    });
  }
  console.log(findAdminUsers(USERS));
})();
