'use strict';

angular.module('mayuUiApp')
  .factory('saveMayu', function () {
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
