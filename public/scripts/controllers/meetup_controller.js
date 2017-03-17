function MeetupController($scope, $http, $state) {
  var self    = this;
  var server  = 'http://localhost:3000';
  // placeholder for heroku api link
  // console.log("Loading Meetup Controller");

  self.meetupSearch = {zip: '', radius: ''}
  function findMeetups(zip, radius) {
    console.log("Looking for Meetups")
    $http.post(`${server}/meetups/search`, { zip: self.meetupSearch.zip, radius: self.meetupSearch.radius })
      .then(function(response) {
        // console.log(response);
        self.meetupResults = response.data.groups;
        // console.log(self.meetupResults)
        self.meetupSearch = {zip: '', radius: ''};
      });
  }

  self.findMeetups = findMeetups;

}
