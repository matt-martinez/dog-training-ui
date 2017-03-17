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
      templateUrl: '/partials/forum.html'
    })
    .state('post', {
      url: '/post/:id',
      templateUrl: '/partials/post.html',
      controller: 'CommentController as comments'
    })
    .state('createPost', {
      url: '/createPost',
      templateUrl: '/partials/createPost.html'
    })
    .state('behavior', {
      url: '/behavior',
      templateUrl: '/partials/behavior.html',
      controller: 'BehaviorController as behaviors'
    })
  }
