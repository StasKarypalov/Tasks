function fetchPosts() {
  let request = new XMLHttpRequest();
  request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      let posts = JSON.parse(request.responseText);
      
      console.log(posts);
      
    } else {
      console.error('Request failed with status:', request.status);
    }
  };

  request.onerror = function () {
    console.error('Request failed');
  };

  request.send();
}

fetchPosts();