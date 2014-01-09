'use strict';

angular.module('mayuUiApp')
	.controller('MainCtrl', function ($rootScope, $scope, mayuModel) {

		mayuModel.getModel();

		$scope.setPadding = function(tab) {
			return {paddingLeft: tab*15 + 'px' } 
		}

		$scope.codemirrorOptions = {
	        lineWrapping : true,
	        lineNumbers: false,
	        indentWithTabs: true,

    	};
    	$scope.daMirror = "DSKSDKSKd"

});

