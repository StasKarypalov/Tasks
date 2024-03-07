function getPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      return posts;
    })
    .catch((error) => {
      console.log("Error", error);
    });
}

getPosts()
  .then((posts) => {
    console.log(posts);
  })
  .catch((error) => {
    console.log("Error", error);
  });
