'use strict';

/**
 * @ngdoc function
 * @name symbolMapApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the symbolMapApp
 */
angular.module('symbolMapApp')
  .controller('HeaderCtrl', function ($scope, $rootScope, $timeout, storage, symFlatModelConstructor) {

    $timeout(function(){
      $scope.currentId = $rootScope.session.currentWorkspaceId;
    }, 1000)

    $scope.$watch('currentId', function(){
      $rootScope.session.currentWorkspaceId = $scope.currentId;
    });

    $scope.clearStorage = function () {
      storage.clearStorage($scope.currentId);
    };

    $scope.getWorkspace = function () {

    	storage.get($scope.currentId);

    } 

    $scope.saveStorage = function () {
      storage.put($scope.currentId);
    };    

  });
