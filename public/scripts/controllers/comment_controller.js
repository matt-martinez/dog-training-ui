function CommentController($scope, $http, $state, $stateParams) {
  var self    = this;
  var server  = 'http://localhost:3000';
  // var server  = 'https://pawsitive-reinforcement-api.herokuapp.com/';
  // console.log("Loading Comment Controller");

  // Refactor was needed to address scoping issue in post.html. Upon page refresh,
  // post.id was lost which caused post.html to break. Using $stateParams to
  // assign the id and moving all post functions dependent on post.html to this
  // controller solved the issue.
  // Show
  function getPostsAndComments() {
    // console.log("Loading Posts and Comments")
    var id = $stateParams.id;
    // calling posts and comments
    $http.get(`${server}/posts/${id}`)
      .then(function(response) {
        // console.log(response.data.post);

        self.singlePost = response.data.post;
        self.postComments = response.data.comments;
      });
  }
  getPostsAndComments();

  // Post Edit
  function editPost(post, currentUser, id) {
    // console.log("Post Edit");
    $http.put(`${server}/posts/${id}`, post)
      .then(function(response) {
        // console.log(response);
        getPostsAndComments();
      });
  }

  // Post Delete
  function deletePost(currentUser, id) {
    // console.log("Post Delete");
    $http.delete(`${server}/posts/${id}`)
      .then(function(response) {
        // console.log(response);
        $state.go('forum');
      });
  }

  // Comment Create
  self.newComment = {body: ''};
  function createComment(currentUser, id) {
    // console.log("Comment Create");
    $http.post(`${server}/posts/${id}/comments`, { comment: { body: self.newComment.body, user_id: currentUser.id, post_id: id }})
      .then(function(response) {
        // console.log(response);
        getPostsAndComments();
        self.newComment = {body: ''};
      });
  }

  // Comment Edit
  function editComment(comment, currentUser, id) {
    // console.log("Comment Edit");
    $http.put(`${server}/comments/${id}`, comment)
      .then(function(response) {
        // console.log(response);
        getPostsAndComments();
      });
  }

  // Comment Delete
  function deleteComment(currentUser, id) {
    // console.log("Comment Delete");
    $http.delete(`${server}/comments/${id}`)
      .then(function(response) {
        // console.log(response);
        getPostsAndComments();
      });
  }

  self.deleteComment = deleteComment;
  self.editComment = editComment;
  self.createComment = createComment;
  self.deletePost = deletePost;
  self.editPost = editPost;
  self.getPostsAndComments = getPostsAndComments;

}
