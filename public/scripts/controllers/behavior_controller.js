function BehaviorController($scope, $http, $state) {
  var self    = this;
  var server  = 'http://localhost:3000';
  // placeholder for heroku api link
  console.log("Loading Behavior Controller");

  self.allBehaviors = [];

  function getAllBehaviors() {
    console.log("Loading Behaviors")
    $http.get(`${server}/behaviors`)
      .then(function(response) {
        console.log(response);
        console.log(response.data.behaviors);
      });
  }
  getAllBehaviors();

  self.getAllBehaviors = getAllBehaviors;
}
