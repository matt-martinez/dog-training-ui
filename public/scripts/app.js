angular.module('DogTrainingApp')
  .controller('HomeController', HomeController)
  .controller('AuthController', AuthController)
  .controller('BehaviorController', BehaviorController)
  .controller('CommentController', CommentController)
  .controller('PostController', PostController)
  .controller('MeetupController', MeetupController)
  .factory('AuthTokenFactory', AuthTokenFactory)
  .factory('AuthInterceptor', AuthInterceptor)

// Citation: http://stackoverflow.com/questions/17289448/angularjs-to-output-plain-text-instead-of-html
// Used angular custom filter found in the above stack overflow link to filter out HTML tags returned by JSON object
  .filter('htmlToText', function() {
    return function(text) {
      return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  });
