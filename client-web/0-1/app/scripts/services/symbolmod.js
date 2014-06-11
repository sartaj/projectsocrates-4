'use strict';

angular.module('socraticMapApp')
    .factory('symbolMod', function ($rootScope) {
        // Service logic
        // ...

        var meaningOfLife = 42;

        /**
         * Retrieve nested item from object/array
         * If setValue is passed, it should set the value at that path, regardless of whether or not the object path exists.
         * Inspired by http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key
         * @param {Object|Array} obj
         * @param {String} path dot separated with arrays
         * @param {String} setValue value to set to path
         * @returns {*}
         */

        function objectString(obj, path, setVal) {

            var i,
                len;

            path = path
                .replace(/\[(\w+)\]/g, '.$1') // convert indexes to properties
                .replace(/^\./, '') // strip a leading dot
                .split('.'); // Split into an array


            for (i = 0, len = path.length; i < len; i++) {
                    
                if(!obj || typeof obj !== 'object') return;

                // Set value on final path if setVal exists
                if (setVal && i === len - 1) {
                    obj[path[i]] = setVal;
                    return;
                }

                if (obj[path[i]] === undefined && setVal && i < len - 1) {
                    obj[path[i]] = {};
                }

                obj = obj[path[i]];

            }

            return obj;

        }


        function getLine(id){
            return objectString($rootScope.symbols, id);
        }

        function moveLeft(id) {
            console.groupCollapsed('moveLeft');
                console.log("THIS", this);

                console.log("ID", id, id.length);
                console.log("ID OB", getLine(id));

                // Get parent object
                var obj = getLine(id.substr(0,id.length-3));
                console.log("PARENT OBJ", obj);

                //This shits gonna break on multiples
                var index = id[id.length-2];
                console.log("INDEX", index);

                obj.splice(index,1);
                if(!obj.link) {
                    obj.link = [];
                }
                console.log($rootScope.symbols);

                $rootScope.$apply();

            console.groupEnd();
        }

        return {
            moveLeft: moveLeft
        };
    });
