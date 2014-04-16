angular.module('socraticMapApp')
    .directive('symbolmod', function(symbolMod, $rootScope) {

        'use strict';

        function postLink(scope, element, attrs) {
            element.on('click', function(e) {

                scope.sId = this.getAttribute('id');
                console.log(attrs.obj);
                // symbolMod.moveLeft(scope.sId);

            });
        }

        return {
            restrict: 'A',
            link: postLink
        };
    });