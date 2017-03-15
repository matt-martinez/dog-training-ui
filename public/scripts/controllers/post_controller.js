function PostController($scope, $http) {
  var self    = this;
  var server  = 'http://localhost:3000';
  // placeholder for heroku api link

  self.allPosts = [];
  getAllPosts();

  // Index
  function getAllPosts() {
    console.log("Loading Posts")
    $http.get(`${server}/posts`)
      .then(function(response) {
        console.log(response.data.posts);
        self.allPosts = response.data.posts;
      });
  }


  self.getAllPosts = getAllPosts;

}
