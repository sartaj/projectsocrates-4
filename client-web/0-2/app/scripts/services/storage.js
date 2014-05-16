'use strict';

angular.module('symbolMapApp')
    .factory('storage', function($rootScope) {

        function put() {
            localStore.put();
        }

        function get() {
            return localStore.get();
        }

        function clearStorage() {
            localStore.clearStorage();
        }

        var localStore = Object.create({});

        localStore.id  = "mvpSymbols";

        localStore.get = function() {
            console.log("GET", this);
            return JSON.parse(localStorage.getItem(this.id) || '[]');
        };

        localStore.put = function() {
            localStorage.setItem(this.id, JSON.stringify($rootScope.symbols));
        };

        localStore.clearStorage = function() {
            console.log("clear", this.id);
            localStorage.removeItem(this.id);
        };


        return {
            get: get,
            put: put,
            clearStorage: clearStorage
        }

    });