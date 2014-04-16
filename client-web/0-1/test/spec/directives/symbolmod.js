'use strict';

describe('Directive: symbolmod', function () {

  // load the directive's module
  beforeEach(module('socraticMapApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<symbolmod></symbolmod>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the symbolmod directive');
  }));
});
