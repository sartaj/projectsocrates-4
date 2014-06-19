'use strict';

angular
  .module('symbolMapApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($rootScope) {
        $rootScope.session = {
          'currentWorkspaceId': '',
          'currentWorkspace': []
        };
  });