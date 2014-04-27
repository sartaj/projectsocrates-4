'use strict';

angular.module('symbolMapApp')
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

                function textSelect(inp, s, e) {
                    e = e || s;
                    if (inp.createTextRange) {
                        var r = inp.createTextRange();
                        r.collapse(true);
                        r.moveEnd('character', e);
                        r.moveStart('character', s);
                        r.select();
                    }else if(inp.setSelectionRange) {
                        inp.focus();
                        inp.setSelectionRange(s, e);
                    }
                }

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
                    symbolId = $rootScope.workspace[workspaceIndex],
                    lines = $rootScope.symbols[symbolId],

                    currentLineIndex = parseInt(attrs.mayutextarea),
                    currentLine = lines[currentLineIndex],
                    currentLineEl = document.getElementById('lineItem-' + workspaceIndex + '-' + currentLineIndex),
                    
                    previousLineIndex = currentLineIndex-1,
                    previousLine = lines[previousLineIndex],
                    previousLineEl = document.getElementById('lineItem-' + workspaceIndex + '-' + previousLineIndex),

                    nextLinexIndex = currentLineIndex+1,
                    nextLine = lines[nextLinexIndex],
                    nextLineEl = document.getElementById('lineItem-' + workspaceIndex + '-' + nextLinexIndex),

                    // View
                    caret = getCaretPosition(currentLineEl),
                    currentValueLength = currentLineEl.value.length,
                    
                    oldLines,
                    newcurrentLineIndex,
                    newVal;

                // Enter
                if (e.keyCode === 13 && e.shiftKey === false) { // Enter was pressed

                    // console.log(e);
                    oldLines = angular.copy(lines);

                    e.preventDefault();

                        // Add new line
                        newcurrentLineIndex = currentLineIndex + 1;
                        lines.splice(newcurrentLineIndex, 0 , { meta: {id: makeId()}, tab: currentLine.tab, media: {} })

                        // Add value to new line
                        if(caret !== currentValueLength) {
                            newVal = currentLineEl.value.slice(caret,currentValueLength);
                            console.log("CURRENTLINE", $rootScope.symbols[currentLine.meta.id])
                            $rootScope.symbols[currentLine.meta.id][0].media.text = currentLineEl.value.slice(0,caret);
                        }

                        // Apply scope
                        $rootScope.$apply();

                        // Emit Ids from this workspace to mayumodel.js
                        $scope.$emit('newIds', _.pluck(lines, '_id'), workspaceIndex, newVal);

                        // Focus on new Element
                        document.getElementById('lineItem-' + workspaceIndex + '-' + newcurrentLineIndex).focus();

                    return false;
                }
                // Tab + Shift Tab
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
                // Left
                if (e.keyCode === 37 && e.shiftKey === false) {
                    if (caret === 0 && previousLine) {
                        e.preventDefault()
                        textSelect(previousLineEl,$rootScope.symbols[previousLine._id].text.length);
                        return false;
                    } 
                }

                // Up
                if (e.keyCode === 38 && e.shiftKey === false) {
                    if (previousLine) {
                        e.preventDefault();
                        textSelect(previousLineEl, caret)
                        return false;
                    } 
                }

                // Right
                if (e.keyCode === 39 && e.shiftKey === false) {
                    if (caret === currentValueLength && nextLine) {
                        e.preventDefault();
                        textSelect(nextLineEl,0);
                        return false;
                    }
                }


                // Down
                if (e.keyCode === 40 && e.shiftKey === false) {
                    if (nextLine) {
                        e.preventDefault();
                        textSelect(nextLineEl, caret)
                        return false;
                    } 
                }
                
                // Right

                // Backspace

                // Shift + Arrows



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