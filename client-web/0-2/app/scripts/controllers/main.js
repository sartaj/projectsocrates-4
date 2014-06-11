angular.module('symbolMapApp')
    .controller('MainCtrl', function($scope, $rootScope, symFlatModelConstructor, storage) {

        'use strict';

        $rootScope.workspace = [];

        $rootScope.symbols = storage.get();

        symFlatModelConstructor.applyWorkspace();

        console.log($rootScope.symbols);

        if (!$rootScope.symbols || $rootScope.symbols.length < 1) {
            $rootScope.symbols = {};
            symFlatModelConstructor.makeSymbol();
        }

        $scope.clearStorage = function() {
            storage.clearStorage();
        };

    });