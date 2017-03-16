angular.module('DogTrainingApp')
  .directive('comment', comment);

  function comment() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: './partials/_commentView.html'
    }
  }
