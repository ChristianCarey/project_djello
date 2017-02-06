var Djello = angular.module('Djello', ['ui.router', 'restangular', 'Devise', 'ui.bootstrap'])
                   .constant('_', window._);

// CSRF config
Djello.config(
  [ '$httpProvider',
  function($httpProvider){
    var token = angular.element('meta[name=csrf-token]')
      .attr('content');
    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
  }])

// // Devise config
// Djello.config(
//   ['AuthProvider',

//   function(AuthProvider) {
//     AuthProvider.loginPath('/users/sign_in.json');
//     AuthProvider.loginMethod('POST');
//     AuthProvider.resourceName('users');
//   }

// ]);

// Restangular config
Djello.config(
  ['RestangularProvider',

    function(RestangularProvider){
      RestangularProvider.setBaseUrl('/api/v1');
      RestangularProvider.setRequestSuffix('.json');
      RestangularProvider.setDefaultHttpFields({
          'content-type': 'application/json'
      });
    }

]);

Djello.config(
  ['$stateProvider', '$urlRouterProvider',
  
  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/')


    $stateProvider
      .state('main', {
        url: '',
        views: {
          '' : {
            templateUrl: '/templates/main.html'
          }
        }
      })
      // .state('new',{
      //   url: "boards/new",
      //   params: {lastId: ""},
      //   views: {
      //     '': {
      //       templateUrl: "/templates/boards/new.html", 
      //       controller: "BoardCreateCtrl"
      //     }
      //   }
      //   })
      .state('showBoard', {
        parent: 'main',
        url: '/boards/:id',
        resolve: {
          "board": ["boardService", "$stateParams", function(boardService, $stateParams) {
            return boardService.find($stateParams.id)
          }]
        },
        views: {
          '' : {
            templateUrl: '/templates/boards/show.html',
            controller: 'BoardShowCtrl',
          }
          // 'activity-feed@boards' : {
          //   templateUrl: '/templates/boards/activity-feed.html',
          //   controller: 'ListIndexCtrl'
          // }
        }
      })
  }])