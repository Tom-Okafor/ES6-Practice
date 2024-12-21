(function () {
  /*Moving Away From For Loops
Question
The code below is calling savePost three times, but it is doing so using a for loop. This implementation works, but the for loop makes it more challenging to understand the purpose of the function. Rather than using a for loop, refactor the code below to instead use the forEach helper.

function handlePosts() {
  var posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
  ];

  for (var i = 0; i < posts.length; i++) {
    savePost(posts[i]);
  }
} */

  (function solution() {
    const SAVED_POSTS = [];

    function handlePosts() {
      const POSTS = [
        { id: 23, title: "Daily JS News" },
        { id: 53, title: "Code Refactor City" },
        { id: 195, title: "The Brighest Ruby" },
      ];
      POSTS.forEach((post) => savePost(post));
    }
    function savePost(post) {
      SAVED_POSTS.push(post);
    }
    handlePosts();
    console.log(SAVED_POSTS);
  })();
})();
