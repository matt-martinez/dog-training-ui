function HomeController($scope, $http) {
  var self = this;

  $scope.$on('loggedInUser', function(event, data) {
    self.currentUser = data;
    // In case login data needs to be broadcast to a controller
    // $scope.$broadcast('loginData', self.currentUser);
  });

  $scope.$on('loggedOutUser', function(event, data) {
    self.currentUser = null;
  });
}
