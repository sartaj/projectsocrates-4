'use strict';

angular.module('symbolMapApp')
  .factory('storage', function ($rootScope, symFlatModelConstructor) {

    function put() {
      var id = $rootScope.session.currentWorkspaceId;
      console.log(id);
      localStore.put(id);
    }

    function get(id) {
      return localStore.get(id);
    }

    function clearStorage(id) {
      localStore.clearStorage(id);
    }

    var localStore = Object.create({});

    localStore.get = function (id) {

      if (!id) {
        // HACK: MVP CODE
        id = 'mvpSymbols';
        $rootScope.session.currentWorkspaceId = id;
      }

      var sym = JSON.parse(localStorage.getItem(id));

      if (!sym || sym.length < 1) {
        $rootScope.symbols = Object.create({});
        symFlatModelConstructor.makeSymbol();
      } else {
        $rootScope.symbols = sym;
      }
      console.log($rootScope.symbols);
      symFlatModelConstructor.applyWorkspace();

    };

    localStore.put = function (id) {

      var saveFile = $rootScope.symbols;

      console.log("put", id, saveFile);

      localStorage.setItem(id, JSON.stringify(saveFile));

    };

    localStore.clearStorage = function (id) {

      localStorage.removeItem(id);

      $rootScope.session.currentWorkspaceId = id;
      $rootScope.currentWorkspace = [];
      $rootScope.symbols = Object.create({});
      symFlatModelConstructor.makeSymbol();
      symFlatModelConstructor.applyWorkspace();

    };


    return {
      get: get,
      put: put,
      clearStorage: clearStorage
    }

  });