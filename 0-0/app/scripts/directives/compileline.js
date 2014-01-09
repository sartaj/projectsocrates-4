'use strict';

angular.module('mayuUiApp')
  .directive('compileline', function () {

  	var preLink = function($scope, element, attrs, ngScope) {
  	};

  	var postLink = function($scope, element, attrs, ngScope) {
  		console.log("ATTRS",attrs);
  	};

    var compile = function(element, attrs, transclude) {

    	return {
    		pre: preLink,
    		post: postLink
    	}
    };

    return {
      restrict: 'A',
      compile: compile
    };
  });
