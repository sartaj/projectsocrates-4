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

    function symbolMap() {

    }

    symbolMap.prototype.getId = function(symbol, id, callback) {

        var self = this;

        _.each(symbol, function(item) {

            if(item.meta.id === id) {
                callback(item)
            } 

            if(item.link) {
                self.getId(item.link, id, callback);
            }

        });

    }

    symbolMap.prototype.buildLink = function(symbol, parentObject) {
        var self = this;
        _.each(symbol, function(item) {

            // Link to parent object
            item.parent = parentObject;
            
            if(item.link) self.buildLink(item.link, item);

        });

    }

    symbolMap.prototype.getObject = function(container, id, callback) {
        var self = this;
        _.each(container, function(item) {
            if(item.name === id) callback(item);
            else if(item.tree) self.getObject(item.tree, id, callback);
        });
    }

    symbolMap.prototype.getPath = function(symbol, parentObject) {
        _.each(symbol, function(item) {
            item.parent = parentObject;
            if(item.link) buildLink(item.link, item);
        });
    }

    var symbols = new symbolMap;

    // symbols.getId($rootScope.symbols['23423423'], '03020323', function(item){
    //     console.log(item)
    // });
    symbols.buildLink($rootScope.symbols['23423423']);

    console.log("rootScope", $rootScope.symbols['23423423']);

});
