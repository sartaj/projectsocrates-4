'use strict';

describe('Directive: symbolLineMod', function () {

  // load the directive's module
  beforeEach(module('symbolMapAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<symbol-line-mod></symbol-line-mod>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the symbolLineMod directive');
  }));
});
