'use strict';

angular.module('symbolMapAppApp')
  .factory('symTreeModelConstructor', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
