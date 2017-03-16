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
      })
  }
  getAllComments();

  // Show

  // Create

  // Edit

  // Delete

  self.getAllComments = getAllComments;

}
