angular.module('DogTrainingApp', ['ui.router'])
  .config(AppRouter)
  .config(authInterceptor)

  function authInterceptor($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor')
  }

  function AppRouter($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('homepage', {
      url: '/',
      templateUrl: '/partials/homepage.html'
    })
    .state('signup', {
      url: '/users',
      templateUrl: '/partials/signup.html',
      controller: 'AuthController as auth'
    })
    .state('forum', {
      url: '/forum',
      templateUrl: '/partials/forum.html',
      controller: 'PostController as posts'
    })
    .state('post', {
      url: '/post/:id',
      templateUrl: '/partials/post.html',
      controller: 'CommentController as comments'
    })
    .state('createPost', {
      url: '/createPost',
      templateUrl: '/partials/createPost.html',
      controller: 'PostController as posts'
    })
    .state('behavior', {
      url: '/behavior',
      templateUrl: '/partials/behavior.html',
      controller: 'BehaviorController as behaviors'
    })
    .state('meetup', {
      url: '/meetup',
      templateUrl: '/partials/meetup.html',
      controller: 'MeetupController as meetups'
    })
  }
