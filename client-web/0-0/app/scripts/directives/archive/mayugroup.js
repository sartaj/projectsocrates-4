angular.module('mayuUiApp')
    .directive('mayugroup', function (mayuModel, $rootScope) {
        
        'use strict';

        var compile = function(element, attrs, transclude) {

            return {
                pre: preLink,
                post: postLink
            }
        }

        var preLink = function($scope, element, attrs, ngModel) {

            element.append('<div class="col w33 m p mayu" ><input ng-repeat="key in mayuGroup[' + attrs.id + '].effects" noresize /></div>');

            if(attrs.id==0) {
                
                var iterate = function(list, mainList) {
                    
                    var insertLine = function(id, tab, mainList) {
                        console.log("insertLine", _.findWhere($rootScope.mayuLine, {'_id': id}) , tab);
                        
                        var object = _.findWhere($rootScope.mayuLine, {'_id': id});
                        // element.append('<input msd-elastic class="" compileline noresize ng-model="mayuLine[' + id + '].text" />')
                    };

                    _.each(list, function(value, key, list) {

                        insertLine(value._id, value.tab, mainList)

                        if(typeof value.effects === "object") {
                            iterate(value.effects, mainList)
                        }
                    });
                };
                var _final;
                var adsf = function() {
                    _final = iterate($rootScope.mayuGroup[attrs.id].effects, $rootScope.mayuGroup[attrs.id].effects);
                }
                adsf();

                console.log("_", _final );
                console.log("=", $scope.mayuGroup[attrs.id].effects[0]._id);

                // lineId = $rootScope.mayuGroup[attrs.id].effects[0]._id;

                // ngLine = "mayuLine['" + lineId + "'].text";

                // attrs.$set('ngModel', 'new value');
                // element.children(0).children(0).attr('ng-model', ngLine);

                // console.log(attrs.id,element.children(0).children(0).attr('ng-model') )

            }            
        }

        var postLink = function($scope, element, attrs) {

            // Event Bindings

                element.bind('keydown', function(e) {
                    
                    if (e.keyCode === 13) { // Enter was pressed
                        e.preventDefault();

                        return false;
                    }

                    if (e.keyCode === 9) { // tab was pressed
                        e.preventDefault();
                        console.log(element)
                        // // get caret position/selection
                        // var val = this.value,
                        //     start = this.selectionStart,
                        //     end = this.selectionEnd;
                        // // set textarea value to: text before caret + tab + text after caret
                        // this.value = val.substring(0, start) + '\t' + val.substring(end);

                        // // put caret at right position again
                        // this.selectionStart = this.selectionEnd = start + 1;

                        // prevent the focus lose
                        return false;

                    }

                });


        };

        return {
            replace: true,
            restrict: 'E',
            compile: compile
        };
    });