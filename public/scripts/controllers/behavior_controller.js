function BehaviorController($scope, $http, $state) {
  var self    = this;
  var server  = 'http://localhost:3000';
  // var server  = 'https://pawsitive-reinforcement-api.herokuapp.com/';
  // console.log("Loading Behavior Controller");

  self.allBehaviors = [];

  function getAllBehaviors() {
    // console.log("Loading Behaviors")
    $http.get(`${server}/behaviors`)
      .then(function(response) {
        // console.log(response);
        self.allBehaviors = response.data.behaviors;
        // console.log(self.allBehaviors);
      });
  }
  getAllBehaviors();

  self.getAllBehaviors = getAllBehaviors;
}
