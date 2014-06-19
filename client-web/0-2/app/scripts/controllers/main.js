angular.module('symbolMapApp')
  .controller('MainCtrl', function ($scope, $rootScope, symFlatModelConstructor, storage) {

    'use strict';

    storage.get();

  });


