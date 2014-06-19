angular.module('mayuUiApp')
  .controller('MainCtrl', function ($rootScope, $scope, symbolModel) {

    'use strict';

    symbolModel.getModel();

    // Set padding for mayuLine
    // Dep: Directive.mayutextarea
    // $scope.setPadding = function(tab) {
    //  return {paddingLeft: tab*15 + 'px' } 
    // }

  });