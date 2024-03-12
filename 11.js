function fetchPosts() {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
  
      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          let posts = JSON.parse(request.responseText);
          resolve(posts);
        } else {
          reject(new Error('Request failed with status: ' + request.status));
        }
      };
  
      request.onerror = function () {
        reject(new Error('Request failed'));
      };
  
      request.send();
    });
  }

  fetchPosts();
  