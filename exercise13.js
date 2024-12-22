/*
[Exercise] In Progress Network Requests
Question
Given an array of network objects representing network requests, assign the boolean true to the variable inProgress if any network request has a status of pending.

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress;
 */

(() => {
  const requests = [
    { url: "/photos", status: "complete" },
    { url: "/albums", status: "pending" },
    { url: "/users", status: "failed" },
  ];
  const inProgress = requests.some((request) => {
    return request.status === "pending";
  });
  console.log(inProgress);
})();
