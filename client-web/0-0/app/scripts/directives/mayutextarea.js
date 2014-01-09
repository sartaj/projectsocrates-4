'use strict';

angular.module('mayuUiApp')
    .directive('mayutextarea', function($rootScope) {

        var postLink = function($scope, element, attrs) {

            // http://flightschool.acylt.com/devnotes/caret-position-woes/

            /*
             **  Returns the caret (cursor) position of the specified text field.
             **  Return value range is 0-oField.length.
             */

            var getCaretPosition = function (oField) {

                // Initialize
                var iCaretPos = 0;

                // IE Support
                if (document.selection) {

                    // Set focus on the element
                    oField.focus();

                    // To get cursor position, get empty selection range
                    var oSel = document.selection.createRange();

                    // Move selection start to 0 position
                    oSel.moveStart('character', -oField.value.length);

                    // The caret position is selection length
                    iCaretPos = oSel.text.length;
                }

                // Firefox support
                else if (oField.selectionStart || oField.selectionStart == '0')
                    iCaretPos = oField.selectionStart;

                // Return results
                return (iCaretPos);
            };


            /*
             **  Sets the caret (cursor) position of the specified text field.
             **  Valid positions are 0-oField.length.
             */

            var setCaretPosition = function (oField, iCaretPos) {

                // IE Support
                if (document.selection) {

                    // Set focus on the element
                    oField.focus();

                    // Create empty selection range
                    var oSel = document.selection.createRange();

                    // Move selection start and end to 0 position
                    oSel.moveStart('character', -oField.value.length);

                    // Move selection start and end to desired position
                    oSel.moveStart('character', iCaretPos);
                    oSel.moveEnd('character', 0);
                    oSel.select();
                }

                // Firefox support
                else if (oField.selectionStart || oField.selectionStart == '0') {
                    oField.selectionStart = iCaretPos;
                    oField.selectionEnd = iCaretPos;
                    oField.focus();
                }
            };

            var makeId = function () {
                var text = "";
                var possible = "0123456789";

                for( var i=0; i < 7; i++ )
                    text += possible.charAt(Math.floor(Math.random() * possible.length));

                return text;
            };


            element.bind('keydown', function(e) {

                // if(e.ctrlKey || e.shiftKey || e.altKey  || e.metaKey) {
                //     console.log("MODIFIER");
                //     return
                // }

                var 
                    // Model
                    workspaceIndex = parseInt(attrs.workspace),
                    workspace = $rootScope.mayuWorkspace[workspaceIndex],
                    lines = workspace.effects,
                    lineIndex = parseInt(attrs.mayutextarea),
                    currentLine = lines[lineIndex],

                    // View
                    el = element[0],
                    caret = getCaretPosition(el),
                    tLength = el.value.length,
                    
                    oldLines,
                    newLineIndex,
                    newVal;


                if (e.keyCode === 13 && e.shiftKey === false) { // Enter was pressed
    
                    // console.log(e);
                    oldLines = angular.copy(lines);

                    e.preventDefault();

                        // Add new line
                        newLineIndex = lineIndex + 1;
                        lines.splice(newLineIndex, 0 , { _id: makeId(), tab: currentLine.tab })

                        // Add value to new line
                        if(caret !== tLength) {
                            newVal = el.value.slice(caret,tLength);
                            $rootScope.mayuLine[currentLine._id].text = el.value.slice(0,caret);
                        }

                        // Apply scope
                        $rootScope.$apply();

                        // Emit Ids from this workspace to mayumodel.js
                        $scope.$emit('newIds', _.pluck(lines, '_id'), workspaceIndex, newVal);

                        // Focus on new Element
                        document.getElementById('lineItem-' + workspaceIndex + '-' + newLineIndex).focus();

                    return false;
                }

                if (e.keyCode === 9) {
                    e.preventDefault();

                        if (e.shiftKey && currentLine.tab != 0) {
                            currentLine.tab -= 1;
                        } else if (!e.shiftKey) {
                            currentLine.tab += 1;
                        }

                        $scope.$apply();
                        
                    return false;
                }

                // $rootScope.$watchCollection('mayuWorkspace[' + workspaceIndex + ']', function(newL,oldL) {
                //     console.log("DO THAT FUCKIN", newL,oldL)
                // });

            });
        };

        return {
            restrict: 'A',
            link: {
                post: postLink
            }
        };
    });