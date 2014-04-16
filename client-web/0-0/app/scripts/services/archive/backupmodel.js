'use strict';

angular.module('mayuUiApp')
	.factory('mayuModel', function ($rootScope, saveMayu) {
		
		var integrityCheck,
			getModel;

		getModel = function() {

			$rootScope.definitions = [

				[
					{
						'id': '23423423',
						'children': [
							{
								'id': '53535321',
								'•': true,
								'->': false,
								'?': true,
								'-': false,
								'children': [ 
									{
										'id': '03020323',
										'•': false,
										'?': false,
										'-': false
									},
									{
										'id': '5029592',
										'•': false,
										'?': false,
										'-': false
									}
								]
							}
						]	
					},
					{
						'id': '23423423',
						'children': [
							{
								'id': '03020323',
								'•': true,
								'->': false,
								'?': true,
								'-': false,
								'children': [ 
									{
										'id': '53535321',
										'•': false,
										'?': false,
										'-': false
									}
								]
							}
						]	
					}
				],

				[
					{
						'id': '53535321',
						'children' : 
							[
								{
									'id': '03020323',
									'->': false,
									'•': false,
									'?': false,
									'-': false
								}
							]
					}
				],

				[
					{
						'id' : '03020323',
						'children': []
					}
				]

			];

			$rootScope.definitionLines = {
				'23423423' : "Get Healthy",
				'53535321' : "Lose Weight",
				'03020323' : "Excercise",
				'5029592' : "Gain Weight"
			};
			
			console.log("LOOKUP",$rootScope.definitionLines);

///////////////////////////////

						// $rootScope.mayuWorkspace = [
			// 	{
			// 		_id: 'g4012032',
			// 		effects: [
			// 			{
			// 				_id: '329194',
			// 				tab: 0,
			// 				effects: [
			// 					{
			// 						_id: '3223232',
			// 						tab: 1
			// 					}
			// 				]
			// 			}, 
			// 			{
			// 				_id: '232323',
			// 				tab: 0
			// 			}
			// 		]
			// 	},
			// 	{
			// 		_id: 'g212513',
			// 		effects: [
			// 			{
			// 				_id: '232323',
			// 				effects: [
			// 					{
			// 						'_id': '249242'
			// 					}
			// 				]
			// 			}, 
			// 			{
			// 				_id: '329194'
			// 			}
			// 		]
			// 	},
			// 	{
			// 		_id: 'g291939',
			// 		effects: [
			// 			{
			// 				_id: '492921',
			// 				effects: [
			// 					{
			// 						'_id': '249242'
			// 					}
			// 				]
			// 			}, 
			// 			{
			// 				_id: '329194'
			// 			}
			// 		]
			// 	},
			// 	{
			// 		_id: 'b295104',
			// 		effects: [
			// 			{
			// 				_id: '249242',
			// 				effects: [
			// 					{
			// 						'_id': '249242'
			// 					}
			// 				]
			// 			}, 
			// 			{
			// 				_id: '329194'
			// 			}
			// 		]
			// 	},
			// ];

			// $rootScope.mayuLine = {
			// 	'3223232' :{
			// 		_id: '3223232',
			// 		'text': 'Teach students value of starting a business',
			// 		'effects': ['232323','249242'],
			// 		'effectedBy': ['492921','249242']
			// 	},
			// 	'232323': {
			// 		_id: '232323',
			// 		'text': 'Excercise',
			// 		'effects': ['492921','249242'],
			// 		'effectedBy': ['492921','249242']	
			// 	},
			// 	'249242': {
			// 		_id: '249242',
			// 		'text': 'Teach value of teamwork',
			// 		'effects': ['232323','3223232'],
			// 		'effectedBy': ['492921','249242']				
			// 	},
			// 	'492921': {
			// 		_id: '492921',
			// 		'text': 'Teach Passion',
			// 		'effects': ['232323','249242'],
			// 		'effectedBy': ['492921','249242']	
			// 	},
			// 	'329194': {
			// 		_id: '329194',
			// 		'text': 'Teach it all',
			// 		'effects': ['232323','249242'],
			// 		'effectedBy': ['492921','249242']
			// 	}
			// };


			// $rootScope.mayuWorkspace = [
			// 	{
			// 		_id: 'g4012032',
			// 		effects: [
			// 			{
			// 				_id: '232323',
			// 				tab: 0,
			// 			},
			// 			{
			// 				_id: '3223232',
			// 				tab: 1
			// 			},
			// 			{
			// 				_id: '232323',
			// 				tab: 0
			// 			}
			// 		]
			// 	},
			// 	{
			// 		_id: 'g212513',
			// 		effects: [
			// 			{
			// 				_id: '232323',
			// 				tab: 0
			// 			},
			// 			{
			// 				_id: '249242',
			// 				tab: 1
			// 			},					 
			// 			{
			// 				_id: '329194',
			// 				tab: 2
			// 			}
			// 		]
			// 	},
			// 	{
			// 		_id: 'g291939',
			// 		effects: [
			// 			{
			// 				_id: '492921',
			// 				tab: 0
			// 			},
			// 			{
			// 				_id: '249242',
			// 				tab: 1
			// 			},
			// 			{
			// 				_id: '329194',
			// 				tab: 1
			// 			}
			// 		]
			// 	},
			// 	{
			// 		_id: 'b295104',
			// 		effects: [
			// 			{
			// 				_id: '249242',
			// 				tab: 0
			// 			},
			// 			{
			// 				_id: '492921',
			// 				tab: 1
			// 			},
			// 			{
			// 				_id: '329194',
			// 				tab: 2
			// 			}
			// 		]
			// 	},
			// ];

			console.table($rootScope.mayuWorkspace);
			console.table($rootScope.mayuWorkspace[0].effects);
			
			$rootScope.$on('newIds', function(e, lineArray, workspaceIndex, value){ 
				// console.log("newIds", e, lineArray, workspaceIndex, value);
				
				var differences = _.difference(lineArray, _.pluck($rootScope.mayuLine, '_id'));

				_.each(differences, function(line) {
					console.log('differences',line);
					if($rootScope.mayuLine[line]) {
						console.log("REMOVE the bitch");
					} else {
						console.log("ADD the bitch");
						addLine(line, workspaceIndex, value);
					}
				})
			});

			var addLine = function(line, workspaceIndex, value) {
				console.log("AddLine", line, workspaceIndex, value);
				$rootScope.mayuLine[line] = {
					'_id': line,
					'text': value
				};
				console.log($rootScope.mayuLine[line]);
				$rootScope.$apply();
			}
		}

		integrityCheck = function() {

		}

		return {
			getModel: getModel,
			integrityCheck: integrityCheck
		};
	});