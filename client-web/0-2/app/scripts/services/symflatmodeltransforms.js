'use strict';

angular.module( 'symbolMapApp' )
    .factory( 'symFlatModelTransforms', function ( $rootScope ) {
        // Service logic
        // ...

        var symbols = $rootScope.symbols;

        function makeId( ) {
            var text = "";
            var possible = "0123456789";

            for ( var i = 0; i < 7; i++ )
                text += possible.charAt( Math.floor( Math.random( ) * possible.length ) );

            return text;
        }

        function symbolObjectConstructor() {

            var id = makeId();
            
            $rootScope.symbols[id] = [{
                meta: {
                    id: id
                },
                tab: 0,
                media: {
                    text: ""
                }
                
            }];

            return id
        
        }

        function lineObjectConstructor(symbolId,tabNumber) {

            return {
                'meta': {
                    'id': symbolId
                },
                'tab': tabNumber,
                '•': false,
                '->': true,
                '?': true,
                '-': false,
                'priority': 1.0
            }
        
        }

        function addNewLine( symbolId, currentLineIndex ) {

            var symbolArray = $rootScope.symbols[ symbolId ],
                currentLine = symbolArray[ currentLineIndex ],
                newCurrentLineIndex,
                oldSymbolArray;


            // Create new symbol

            oldSymbolArray = Object.create( symbolArray );

            // Add new line
            var symbolId = symbolObjectConstructor();
            
            console.log("SYMBOLID", symbolId, $rootScope.symbols[symbolId]);

            newCurrentLineIndex = currentLineIndex + 1;
            symbolArray.splice( newCurrentLineIndex, 0, lineObjectConstructor(symbolId, currentLine.tab) );
            console.log(symbolArray)

            // // Add value to new line
            // if ( caret !== currentValueLength ) {
            //     newVal = currentLineEl.value.slice( caret, currentValueLength );
            //     console.log( "CURRENTLINE", $rootScope.symbols[ currentLine.meta.id ] )
            //     $rootScope.symbols[ currentLine.meta.id ][ 0 ].media.text = currentLineEl.value.slice( 0, caret );
            // }

            // Apply scope
            $rootScope.$apply( );


            // // Emit Ids from this workspace to mayumodel.js
            // $scope.$emit( 'newIds', _.pluck( symbolArray, '_id' ), workspaceIndex, newVal );

            // // Focus on new Element
            // document.getElementById( parentSymbolId + '-' + newcurrentLineIndex )
            //     .focus( );


        }

        // Public API here
        return {
            addNewLine: addNewLine
        }

    } );