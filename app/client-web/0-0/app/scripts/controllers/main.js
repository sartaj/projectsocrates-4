'use strict';

angular.module('mayuUiApp')
	.controller('MainCtrl', function ($rootScope, $scope, mayuModel) {

		mayuModel.getModel();

		// Set padding for mayuLine
		// Dep: Directive.mayutextarea
		// $scope.setPadding = function(tab) {
		// 	return {paddingLeft: tab*15 + 'px' } 
		// }

});

