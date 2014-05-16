'use strict';

angular.module( 'symbolMapApp' )
    .factory( 'symFlatModelTransforms', function ( $rootScope, symFlatModelConstructor ) {

        var symbols = $rootScope.symbols;

        function addNewLine( symbolId, currentLineIndex ) {

            console.groupCollapsed("Add New Line");

            var symbolArray = $rootScope.symbols[ ( symbolId || symFlatModelConstructor.makeId() ) ],
                currentLine = symbolArray[ ( currentLineIndex || 0 ) ],
                newCurrentLineIndex,
                oldSymbolArray,
                symbolId = symFlatModelConstructor.makeSymbol();

            // Create new symbol
            oldSymbolArray = Object.create( symbolArray );

            // Add new line            
            console.log("SYMBOLID", symbolId, $rootScope.symbols[symbolId]);

            newCurrentLineIndex = currentLineIndex + 1;
            symbolArray.splice( newCurrentLineIndex, 0, symFlatModelConstructor.makeLine(symbolId, currentLine.tab) );
            console.log(symbolArray)

            // Apply scope
            $rootScope.$apply( );

            console.groupEnd();

        }

        function deleteLine( symbolId, currentLineIndex ) {

            console.groupCollapsed("Delete Line");

            var symbolArray = $rootScope.symbols[ symbolId ],
                currentLine = symbolArray[ currentLineIndex ];

            symbolArray.splice( currentLineIndex, 1);

            // Apply scope
            $rootScope.$apply( );

            console.groupEnd();

        }
        
        function deleteSymbol(symbolId) {

            delete $rootScope.symbols[symbolId];
        
        }

        // Public API here
        return {
            addNewLine: addNewLine,
            deleteLine: deleteLine,
            deleteSymbol: deleteSymbol
        }

    } );