function CommentController($scope, $http, $state, $stateParams) {
  var self    = this;
  var server  = 'http://localhost:3000';
  // placeholder for heroku api link
  // console.log("Loading Comment Controller");
  console.log($stateParams)
  // console.log($scope.$parent.posts.singlePost.id)

  // Show
  function getPostComments() {
    // console.log("Loading Comments by Post")
    var id = $stateParams.id;
    $http.get(`${server}/posts/${id}/comments`)
      .then(function(response) {
        // console.log(response);
        self.postComments = response.data.comments;
      });
  }
  getPostComments();

  // Create

  // Edit

  // Delete

  self.getPostComments = getPostComments;

}
