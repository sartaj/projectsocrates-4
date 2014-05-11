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

        function applyWorkspace() {
            for (var key in $rootScope.symbols) {
                if($rootScope.workspace.indexOf(key) < 0){
                    $rootScope.workspace.push(key)
                }
            }
        }

        function addNewLine( symbolId, currentLineIndex ) {

            console.groupCollapsed("Add New Line");

            var symbolArray = $rootScope.symbols[ symbolId ],
                currentLine = symbolArray[ currentLineIndex ],
                newCurrentLineIndex,
                oldSymbolArray,
                symbolId = symbolObjectConstructor();


            // Create new symbol
            oldSymbolArray = Object.create( symbolArray );

            // Add new line            
            console.log("SYMBOLID", symbolId, $rootScope.symbols[symbolId]);

            newCurrentLineIndex = currentLineIndex + 1;
            symbolArray.splice( newCurrentLineIndex, 0, lineObjectConstructor(symbolId, currentLine.tab) );
            console.log(symbolArray)

            // TODO: Remove this for MVP
            applyWorkspace();

            // Apply scope
            $rootScope.$apply( );

            console.groupEnd();

        }

        function deleteLine( symbolId, currentLineIndex ) {

            console.groupCollapsed("Delete Line");

            var symbolArray = $rootScope.symbols[ symbolId ],
                currentLine = symbolArray[ currentLineIndex ],
                oldSymbolArray,
                symbolId = symbolObjectConstructor();

            // Create new symbol
            oldSymbolArray = Object.create( symbolArray );

            // Add new line            
            console.log("SYMBOLID", symbolId, $rootScope.symbols[symbolId]);
            symbolArray.splice( currentLineIndex, 1);
            console.log(symbolArray)


            // Apply scope
            $rootScope.$apply( );

            console.groupEnd();

        }
        
        function deleteSymbol(symbolId) {

            delete $rootScope.symbols[symbolId];
        
        }

        // Public API here
        return {
            addNewLine: addNewLine
        }

    } );