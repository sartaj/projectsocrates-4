angular.module('mayuUiApp')
    .factory('mayuModel', function($rootScope, saveMayu) {

        'use strict';

        var getModel,
            integrity;

        getModel = function() {

            $rootScope.workspace = ['23423423'];

            $rootScope.symbols = {};

            $rootScope.symbols['23423423'] = {
                'meta': {
                    'source': [
                        {'type': 'web'},
                        {'type': 'experience', 'origin': ['sartaj']}
                    ],
                    'time': '2014-12-01-12-15GMT',
                    'authors': ['sartaj'],
                    'completion': 100,
                    'id': '23423423'
                },
                'media': {
                    'text': 'Get Healthy'
                },
                'link': [
                    {
                        'meta': {'id': '53535321'},
                        '•': true,
                        '→': false,
                        '?': true,
                        '-': false,
                        'priority': 1.0,
                        'link': {
                            '03020323': {
                                'meta': {'id': '03020323'},
                                '+': false,
                                '?': false,
                                '-': false
                            },
                            '5029592': {
                                'meta': {'id': '5029592'},
                                '+': false,
                                '?': false,
                                '-': false
                            }
                        }
                    },
                    {
                        'meta': {'id': '03020323'},
                        ',': true,
                        '→': false,
                        '?': true,
                        '-': false,
                        'link': [
                            {
                                'meta': {'id': '03020323'},
                                '•': true,
                                '→': false,
                                '?': true,
                                '-': false,
                                'link': [
                                    {
                                        'meta': {'id': '53535321'},
                                        '•': false,
                                        '?': false,
                                        '-': false
                                    }
                                ]
                            },
                            {
                                'link': [
                                    {
                                        'meta': {'id': '03020323'},
                                        '→': false,
                                        '•': false,
                                        '?': false,
                                        '-': false
                                    }
                                ]
                            }//,
                            // '03020323': {
                            //     '→': false,
                            //     '•': false,
                            //     '?': false,
                            //     '-': false
                            // }
                        ]
                    }
                ]
            };

            $rootScope.symbols['53535321'] = {
                'meta': {
                    'source': [
                        {'type': 'web'},
                        {'type': 'experience', 'origin': ['sartaj']}
                    ],
                    'time': '2014-12-01-12-15GMT',
                    'authors': ['sartaj'],
                    'completion': 100,
                    'id': '53535321'
                },
                'media': {
                    'text': 'Run Fast'
                },
                'link': {}
            };

            $rootScope.symbols['03020323'] = {
                'meta': {
                    'source': [
                        {'type': 'web'},
                        {'type': 'experience', 'origin': ['sartaj']}
                    ],
                    'time': '2014-12-01-12-15GMT',
                    'authors': ['sartaj'],
                    'completion': 100,
                    'id': '03020323'
                },
                'media': {
                    'text': 'Lose Weight'
                },
                'link': {}
            };

            $rootScope.symbols['5029592'] = {
                'meta': {
                    'source': [
                        {'type': 'web'},
                        {'type': 'experience', 'origin': ['sartaj']}
                    ],
                    'time': '2014-12-01-12-15GMT',
                    'authors': ['sartaj'],
                    'completion': 100,
                    'id': '5029592'
                },
                'media': {
                    'text': 'Gain Weight'
                },
                'link': {}
            };
        };

        integrity = function() {

            // Check symbols consitency

            // Check Child Conistency

            // Check definitionLine consistency

            // Check 

            var moveToParent = function(symbol, line) {

            };

            var moveToChild = function(symbol, line) {

            };

            var removeLineFromSymbol = function() {

            };

            var integrityCheck = function() {
                // Check if symbolLines are all available
            };

        };

        return {
            getModel: getModel,
            integrity: integrity
        };
    });

