function CommentController($scope, $http, $state) {
  var self    = this;
  var server  = 'http://localhost:3000';
  // placeholder for heroku api link
  console.log("Loading Comment Controller");

  self.allComments = [];

  // Index
  function getAllComments() {
    console.log("Loading Comments")
    $http.get(`${server}/comments`)
      .then(function(response) {
        console.log(response)
        console.log(response.data.comments);
        self.allComments = response.data.comments;
      })
  }
  getAllComments();

  // Show
  // function getPostComments(id) {
  //   console.log("Loading Comments by Post")
  //   $http.get(`${server}/posts/${id}/comments`)
  //     .then(function(response) {
  //       console.log(response);
  //     });
  // }
  // getPostComments();

  // Create

  // Edit

  // Delete

  // self.getPostComments = getPostComments;
  self.getAllComments = getAllComments;

}
