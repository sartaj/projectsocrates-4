'use strict';

/**
 * @ngdoc function
 * @name symbolMapApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the symbolMapApp
 */
angular.module('symbolMapApp')
  .controller('HeaderCtrl', function ($scope, $rootScope, storage, symFlatModelConstructor) {

    $scope.clearStorage = function () {
      storage.clearStorage($scope.session.currentWorkspaceId);
    };

    $scope.getWorkspace = function () {

    	storage.get($scope.session.currentWorkspaceId);

    } 

    $scope.saveStorage = function () {
      storage.put($scope.session.currentWorkspace);
    };    

  });
