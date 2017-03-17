function PostController($scope, $http, $state) {
  var self    = this;
  var server  = 'http://localhost:3000';
  // var server  = 'https://pawsitive-reinforcement-api.herokuapp.com/';
  // console.log("Loading Post Controller");

  getAllPosts();
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

  // Show
  function showPost(id) {
    // console.log("Post Show");
        $state.go('post', {'id': id});
  }

  // Create
  self.newPost = {title: '', body: ''};
  function createPost(currentUser) {
    // console.log("Post Create")
    $http.post(`${server}/users/${currentUser.id}/posts`, { post: { title: self.newPost.title, body: self.newPost.body, user_id: currentUser.id }})
    .then(function(response) {
      // console.log(response);
      getAllPosts();
      self.newPost = {title: '', body: ''};
      $state.go('forum');
    });
  }

  self.createPost = createPost;
  self.showPost = showPost;
  self.getAllPosts = getAllPosts;

}
