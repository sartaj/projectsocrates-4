'use strict';

/**
 * @ngdoc service
 * @name symbolMapApp.smControls
 * @description
 * # smControls
 * Factory in the symbolMapApp.
 */
angular.module('symbolMapApp')
  .factory('smControls', function () {
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
