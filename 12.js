function getPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      if (!getPosts.index) {
        getPosts.index = 0;
      }

      if (getPosts.index < posts.length) {
        console.log(posts[getPosts.index]);
        getPosts.index++;
      }
    })
    .catch((error) => {
      console.log("Error", error);
    });
}

getPosts();
getPosts();
