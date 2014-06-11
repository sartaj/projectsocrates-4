'use strict';

angular.module('mayuUiApp')
  .controller('EditorMultilineCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	$scope.codemirrorOptions = {
        lineWrapping : true,
        lineNumbers: false,
        indentWithTabs: true,

	};
  });
