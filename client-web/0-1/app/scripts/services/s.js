'use strict';

angular.module('socraticMapApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($rootScope) {

    //////////////
    $rootScope.workspace = ['23423423', '5029592', '53535321', '03020323' ];

    $rootScope.symbols = {};


    $rootScope.symbols['23423423'] = [{
        'meta': {
            'source': [
                {'type': 'web'},
                {'type': 'experience', 'origin': ['sartaj']}
            ],
            'time': '2014-12-01-12-15GMT',
            'authors': ['sartaj'],
            'completion': 100,
            'id': '23423423',
            '__hash': 'E231'
        },
        'media': {
            'text': 'Get Healthy'
        },
        'link': [
            {
                'meta': {
                    'symbol_id': '53535321',
                    'root': '23423423'
                    'parent': 'E231',
                    '__hash': 'E241',
                },
                '•': true,
                '→': false,
                '?': true,
                '-': false,
                'priority': 1.0,
                'link': [
                    {
                        'meta': {'id': '03020323'},
                        '+': false,
                        '?': false,
                        '-': false
                    },
                    {
                        'meta': {'id': '5029592'},
                        '+': false,
                        '?': false,
                        '-': false
                    }
                ]
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
                      'meta': {'id': '03020323'},
                      '→': false,
                      '•': false,
                      '?': false,
                      '-': false
                    }
                ]
            }
        ]
    }];

    $rootScope.symbols['53535321'] = [{
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
                'meta': {'id': '03020323'},
                '→': false,
                '•': false,
                '?': false,
                '-': false
            }
        ]
    }];

    $rootScope.symbols['03020323'] = [{
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
    }];

    $rootScope.symbols['5029592'] = [{
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
    }];
    ///////
  });
