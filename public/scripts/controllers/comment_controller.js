function CommentController($scope, $http, $state, $stateParams) {
  var self    = this;
  var server  = 'http://localhost:3000';
  // placeholder for heroku api link
  // console.log("Loading Comment Controller");
  // console.log($stateParams)
  // console.log($scope.$parent.posts.singlePost.id)

  // Show
  function getPostsAndComments() {
    // console.log("Loading Posts and Comments")
    var id = $stateParams.id;
    // calling posts
    $http.get(`${server}/posts/${id}`)
      .then(function(response) {
        // console.log(response.data.post);
        self.singlePost = response.data.post;
      });

    // calling comments
    $http.get(`${server}/posts/${id}/comments`)
      .then(function(response) {
        // console.log(response);
        self.postComments = response.data.comments;
      });
  }
  getPostsAndComments();

  // Post Edit
  function editPost(post, currentUser, id) {
    // console.log("Post Edit");
    // console.log(post)
    // console.log(currentUser)
    // console.log(id)
    $http.put(`${server}/posts/${id}`, { post: {title: post.title, body: post.body }})
      .then(function(response) {
        console.log(response);
        getPostsAndComments();
      });
  }

  // Post Delete
  function deletePost(currentUser, id) {
    // console.log("Post Delete");
    // console.log(currentUser)
    // console.log(id)
    $http.delete(`${server}/posts/${id}`)
      .then(function(response) {
        // console.log(response);
        $state.go('forum');
      });
  }

  // Comment Create

  // Comment Edit

  // Comment Delete

  self.deletePost = deletePost;
  self.editPost = editPost;
  self.getPostsAndComments = getPostsAndComments;

}
