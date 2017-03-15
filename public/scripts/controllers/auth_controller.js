function AuthController($http, $state, $scope, $rootScope, AuthTokenFactory) {
  var self    = this;
  var server  = 'http://localhost:3000';
  // placeholder for heroku api link

  function signup(userPass) {
    // console.log("Frontend Sign Up");
    $http.post(`${server}/users`, { user: userPass })
      .then(function(response) {
        // console.log(response);
        $state.go('homepage');
      });
  }

  function login(userPass) {
    // console.log("Frontend Login");
    $http.post(`${server}/users/login`, { user: userPass })
      .then(function(response) {
        // console.log(response.data);
        AuthTokenFactory.setToken(response.data.token);

        $scope.$emit('loggedInUser', response.data.user);
        // $state.go('homepage');
      });
  }

  function logout() {
    // console.log("Frontend Logout");
    AuthTokenFactory.setToken()

    $scope.$emit('loggedOutUser');
    $state.go('homepage');
  }

  this.logout = logout;
  this.login = login;
  this.signup = signup;
}
