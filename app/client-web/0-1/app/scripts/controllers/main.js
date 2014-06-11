'use strict';

var app = angular.module('socraticMapApp');

app.controller('MainCtrl', function ($scope, $rootScope, symbolMod) {

	// $scope.items = [{
	//     title: 'Something',
	//     children: [
	//         { title: 'Hello World' },
	//         { title: 'Hello Overflow' },
	//         { title: 'John Doe', children: [
	//             { title: 'Amazing title' },
	//             { title: 'Google it' },
	//             { title: 'Im a child', children: [
	//                 { title: 'Another ' },
	//                 { title: 'He\'s my brother' },
	//                 { title: 'She\'s my mother.', children: [
	//                     {title: 'You never know if im going to have children'}
	//                 ]}
	//             ]}
	//         ]}
	//     ]
	// }];

	$scope.move = function(id) {
		console.log(id, id.length)
		symbolMod.moveLeft(id);
	}

});
