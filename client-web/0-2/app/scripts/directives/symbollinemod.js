/**
 **  Returns the caret (cursor) position of the specified text field.
 **  Return value range is 0-oField.length.
 */

var caretPosition = {


    /*
     **  Returns the caret (cursor) position of the specified text field.
     **  Return value range is 0-oField.length.
     */

    get: function ( oField ) {

        // http://flightschool.acylt.com/devnotes/caret-position-woes/


        // Initialize
        var iCaretPos = 0;

        // IE Support
        if ( document.selection ) {

            // Set focus on the element
            oField.focus( );

            // To get cursor position, get empty selection range
            var oSel = document.selection.createRange( );

            // Move selection start to 0 position
            oSel.moveStart( 'character', -oField.value.length );

            // The caret position is selection length
            iCaretPos = oSel.text.length;
        }

        // Firefox support
        else if ( oField.selectionStart || oField.selectionStart == '0' )
            iCaretPos = oField.selectionStart;

        // Return results
        return ( iCaretPos );

    },

    /*
     **  Set position to where you want.
     **
     */

    set: function ( oField, iCaretPos ) {

        // IE Support
        if ( document.selection ) {

            // Set focus on the element
            oField.focus( );

            // Create empty selection range
            var oSel = document.selection.createRange( );

            // Move selection start and end to 0 position
            oSel.moveStart( 'character', -oField.value.length );

            // Move selection start and end to desired position
            oSel.moveStart( 'character', iCaretPos );
            oSel.moveEnd( 'character', 0 );
            oSel.select( );
        }

        // Firefox support
        else if ( oField.selectionStart || oField.selectionStart == '0' ) {
            oField.selectionStart = iCaretPos;
            oField.selectionEnd = iCaretPos;
            oField.focus( );
        }

    }

};

////////////////////////////////////////////////////////////






function textSelect( inp, s, e ) {
    e = e || s;
    if ( inp.createTextRange ) {
        var r = inp.createTextRange( );
        r.collapse( true );
        r.moveEnd( 'character', e );
        r.moveStart( 'character', s );
        r.select( );
    }
    else if ( inp.setSelectionRange ) {
        inp.focus( );
        inp.setSelectionRange( s, e );
    }
}






//////////////////////////////



angular.module( 'symbolMapApp' )
    .directive( 'symbollinemod', function ( $rootScope, symFlatModelTransforms ) {

        'use strict';

        var postLink = function ( $scope, element, attrs ) {

            element.bind( 'keydown', function ( e ) {


                /*
                 **  Get Attribute from DOM based on where event was placed.
                 **  This includes workspace, symbol, current line, previous line, and following line
                 **  @angularDependecies directive attrs , $rootScope
                 */

                // Get Attributes from DOM. Uses Angular attrs to get attributes.
                console.groupCollapsed( "Input Bind Variables" );

                var workspaceIndex = parseInt( attrs.workspace ),
                    parentSymbolId = attrs.parentsymbolid,
                    symbolArray = $rootScope.symbols[ parentSymbolId ];
                console.log( workspaceIndex, parentSymbolId, symbolArray );

                var currentLineIndex = parseInt( attrs.lineindex ),
                    currentLine = symbolArray[ currentLineIndex ],
                    currentLineMainSymbolId = currentLine.meta.id,
                    currentLineEl = document.getElementById( parentSymbolId + '-' + currentLineIndex );
                console.log( "%c CURRENT", "font-weight: bold; color: green", currentLineIndex, currentLine, currentLineMainSymbolId, currentLineEl );

                if ( currentLineIndex > 0 ) {
                    var previousLineIndex = currentLineIndex - 1,
                        previousLine = symbolArray[ previousLineIndex ],
                        previousLineMainSymbolId = previousLine.meta.id,
                        previousLineEl = document.getElementById( parentSymbolId + '-' + currentLineIndex );
                    console.log( "%c PREVIOUS", "font-weight: bold; color: green", previousLineIndex, previousLine, previousLineMainSymbolId, previousLineEl );
                }

                if ( currentLineIndex < symbolArray.length - 1 ) {
                    var nextLineIndex = currentLineIndex + 1,
                        nextLine = symbolArray[ nextLineIndex ],
                        nextLineMainSymbolId = nextLine.meta.id,
                        nextLineEl = document.getElementById( parentSymbolId + '-' + currentLineIndex );
                    console.log( "%c NEXT", "font-weight: bold; color: green", nextLineIndex, nextLine, nextLineMainSymbolId, nextLineEl );
                }

                console.groupEnd( );

                var
                // View
                caret = caretPosition.get( currentLineEl ),
                    currentValueLength = currentLineEl.value.length,

                    oldSymbolArray,
                    newcurrentLineIndex,
                    newVal;

                // Enter
                if ( e.keyCode === 13 && e.shiftKey === false ) { // Enter was pressed

                    e.preventDefault( );

                    // Create New Line
                    symFlatModelTransforms.addNewLine( parentSymbolId, currentLineIndex );

                    // Move Cursor to New line
                    document.getElementById(parentSymbolId + '-' + (currentLineIndex+1)).focus();

                    return false;

                }
                // Tab + Shift Tab
                if ( e.keyCode === 9 ) {
                    e.preventDefault( );

                    if ( e.shiftKey && currentLine.tab != 0 ) {
                        currentLine.tab -= 1;
                    }
                    else if ( !e.shiftKey ) {
                        currentLine.tab += 1;
                    }

                    $scope.$apply( );

                    return false;
                }
                // Left
                if ( e.keyCode === 37 && e.shiftKey === false ) {
                    if ( caret === 0 && previousLine ) {
                        e.preventDefault( )
                        textSelect( previousLineEl, $rootScope.symbols[ previousLine._id ].text.length );
                        return false;
                    }
                }

                // Up
                if ( e.keyCode === 38 && e.shiftKey === false ) {
                    if ( previousLine ) {
                        e.preventDefault( );
                        textSelect( previousLineEl, caret )
                        return false;
                    }
                }

                // Right
                if ( e.keyCode === 39 && e.shiftKey === false ) {
                    if ( caret === currentValueLength && nextLine ) {
                        e.preventDefault( );
                        textSelect( nextLineEl, 0 );
                        return false;
                    }
                }


                // Down
                if ( e.keyCode === 40 && e.shiftKey === false ) {
                    if ( nextLine ) {
                        e.preventDefault( );
                        textSelect( nextLineEl, caret )
                        return false;
                    }
                }

                // Right

                // Backspace

                // Shift + Arrows


            } );
        };

        return {
            restrict: 'A',
            link: {
                post: postLink
            }
        };
    } );