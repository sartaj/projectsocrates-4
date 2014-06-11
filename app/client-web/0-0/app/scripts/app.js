'use strict';

angular.module('mayuUiApp', [
  'ngCookies',
  'ngSanitize',
  'ngRoute',
  'monospaced.elastic',
  'ui.codemirror'
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
  .run(function() {

  })
;
