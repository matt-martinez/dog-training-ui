function PostController($scope, $http, $state) {
  var self    = this;
  var server  = 'http://localhost:3000';
  // placeholder for heroku api link
  // console.log("Loading Post Controller");

  self.allPosts = [];

  // Index
  function getAllPosts() {
    // console.log("Loading Posts")
    $http.get(`${server}/posts`)
      .then(function(response) {
        // console.log(response.data.posts);
        self.allPosts = response.data.posts;
      });
  }
  getAllPosts();

  function showPost(id) {
    // console.log("Post Show");
    $http.get(`${server}/posts/${id}`)
      .then(function(response) {
        // console.log(response.data.post);
        self.singlePost = response.data.post;

        $state.go('post');
      });
  }

  self.showPost = showPost;
  self.getAllPosts = getAllPosts;

}
