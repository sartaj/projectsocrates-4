angular.module( 'symbolMapApp' )
    .controller( 'MainCtrl', function ( $scope, $rootScope ) {

        'use strict';

        $rootScope.workspace = [ '23423423', '5029592', '53535321', '03020323' ];

        $rootScope.symbols = {};

        $rootScope.symbols[ '23423423' ] = [ {
            'meta': {
                'source': [ {
                    'type': 'web'
                }, {
                    'type': 'experience',
                    'origin': [ 'sartaj' ]
                } ],
                'time': '2014-12-01-12-15GMT',
                'authors': [ 'sartaj' ],
                'completion': 100,
                'id': '23423423'
            },
            'tab': 0,
            'media': {
                'text': 'Get Spreadfast as a client'
            }
        }, {
            'meta': {
                'id': '53535321'
            },
            'tab': 1,
            '•': true,
            '→': false,
            '?': true,
            '-': false,
            'priority': 1.0,
        }, {
            'meta': {
                'id': '03020323'
            },
            'tab': 1,
            '+': false,
            '?': false,
            '-': false
        }, {
            'meta': {
                'id': '5029592'
            },
            'tab': 2,
            '+': false,
            '?': false,
            '-': false
        }, {
            'meta': {
                'id': '53535321'
            },
            'tab': 0,
            '•': false,
            '?': false,
            '-': false
        }, {
            'meta': {
                'id': '03020323'
            },
            'tab': 0,
            '→': false,
            '•': false,
            '?': false,
            '-': false
        } ];

        $rootScope.symbols[ '53535321' ] = [ {
            'meta': {
                'source': [ {
                    'type': 'web'
                }, {
                    'type': 'experience',
                    'origin': [ 'sartaj' ]
                } ],
                'time': '2014-12-01-12-15GMT',
                'authors': [ 'sartaj' ],
                'completion': 100,
                'id': '53535321'
            },
            'media': {
                'text': 'Intended Future: Make it possible to use mayu for myself'
            }
        } ];

        $rootScope.symbols[ '03020323' ] = [ {
            'meta': {
                'source': [ {
                    'type': 'web'
                }, {
                    'type': 'experience',
                    'origin': [ 'sartaj' ]
                } ],
                'time': '2014-12-01-12-15GMT',
                'authors': [ 'sartaj' ],
                'completion': 100,
                'id': '03020323'
            },
            'media': {
                'text': 'Lose Weight'
            }
        } ];

        $rootScope.symbols[ '5029592' ] = [ {
            'meta': {
                'source': [ {
                    'type': 'web'
                }, {
                    'type': 'experience',
                    'origin': [ 'sartaj' ]
                } ],
                'time': '2014-12-01-12-15GMT',
                'authors': [ 'sartaj' ],
                'completion': 100,
                'id': '5029592'
            },
            'media': {
                'text': 'Gain Weight'
            }
        } ];
    } );