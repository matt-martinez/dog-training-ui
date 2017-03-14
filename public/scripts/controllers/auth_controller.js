function AuthController($http, $state, $scope, $rootScope, AuthTokenFactory) {
  var self    = this;
  var server  = 'http://localhost:3000';
  // placeholder for heroku api link

  function signup(userPass) {
    console.log("Frontend Sign Up");
    $http.post(`${server}/users`, { user: userPass})
      .then(function(response) {
        console.log(response);
        $state.go('homepage');
      });
  }

  

}
