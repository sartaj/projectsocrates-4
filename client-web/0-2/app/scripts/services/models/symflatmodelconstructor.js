'use strict';

angular.module('symbolMapApp')
  .factory('symFlatModelConstructor', function ($rootScope) {

    // $rootScope.symbols[ '23423423' ] = [ {
    //     'meta': {
    //         'source': [ {
    //             'type': 'web'
    //         }, {
    //             'type': 'experience',
    //             'origin': [ 'sartaj' ]
    //         } ],
    //         'time': '2014-12-01-12-15GMT',
    //         'authors': [ 'sartaj' ],
    //         'completion': 100,
    //         'id': '23423423'
    //     },
    //     'tab': 0,
    //     'media': {
    //         'text': 'Get Spreadfast as a client'
    //     }
    // }, {
    //     'meta': {
    //         'id': '53535321'
    //     },
    //     'tab': 1,
    //     '•': true,
    //     '→': false,
    //     '?': true,
    //     '-': false,
    //     'priority': 1.0,
    // }, {
    //     'meta': {
    //         'id': '03020323'
    //     },
    //     'tab': 1,
    //     '+': false,
    //     '?': false,
    //     '-': false
    // }, {
    //     'meta': {
    //         'id': '5029592'
    //     },
    //     'tab': 2,
    //     '+': false,
    //     '?': false,
    //     '-': false
    // }, {
    //     'meta': {
    //         'id': '53535321'
    //     },
    //     'tab': 0,
    //     '•': false,
    //     '?': false,
    //     '-': false
    // }, {
    //     'meta': {
    //         'id': '03020323'
    //     },
    //     'tab': 0,
    //     '→': false,
    //     '•': false,
    //     '?': false,
    //     '-': false
    // } ];

    // $rootScope.symbols[ '53535321' ] = [ {
    //     'meta': {
    //         'source': [ {
    //             'type': 'web'
    //         }, {
    //             'type': 'experience',
    //             'origin': [ 'sartaj' ]
    //         } ],
    //         'time': '2014-12-01-12-15GMT',
    //         'authors': [ 'sartaj' ],
    //         'completion': 100,
    //         'id': '53535321'
    //     },
    //     'tab': 0,
    //     'media': {
    //         'text': 'Intended Future: Make it possible to use mayu for myself'
    //     }
    // } ];

    // $rootScope.symbols[ '03020323' ] = [ {
    //     'meta': {
    //         'source': [ {
    //             'type': 'web'
    //         }, {
    //             'type': 'experience',
    //             'origin': [ 'sartaj' ]
    //         } ],
    //         'time': '2014-12-01-12-15GMT',
    //         'authors': [ 'sartaj' ],
    //         'completion': 100,
    //         'id': '03020323'
    //     },
    //     'tab': 0,            
    //     'media': {
    //         'text': 'Lose Weight'
    //     }
    // } ];

    // $rootScope.symbols[ '5029592' ] = [ {
    //     'meta': {
    //         'source': [ {
    //             'type': 'web'
    //         }, {
    //             'type': 'experience',
    //             'origin': [ 'sartaj' ]
    //         } ],
    //         'time': '2014-12-01-12-15GMT',
    //         'authors': [ 'sartaj' ],
    //         'completion': 100,
    //         'id': '5029592'
    //     },
    //     'tab': 0,
    //     'media': {
    //         'text': 'Gain Weight'
    //     }
    // } ];


    function makeId() {
      var text = "";
      var possible = "0123456789";

      for (var i = 0; i < 7; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }

    function makeSymbol() {

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

      applyWorkspace();

      return id

    }

    function makeLine(symbolId, tabNumber) {

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

      if ($rootScope.session.currentWorkspace.length < 1) {

        $rootScope.session.currentWorkspace = [];

        for (var key in $rootScope.symbols) {
          if ($rootScope.session.currentWorkspace.indexOf(key) < 0) {
            $rootScope.session.currentWorkspace.push(key)
          }
        }

      }
    }

    // Public API here
    return {
      makeSymbol: makeSymbol,
      makeLine: makeLine,
      makeId: makeId,
      applyWorkspace: applyWorkspace
    };
  });