'use strict';

describe('Directive: compileline', function () {

  // load the directive's module
  beforeEach(module('mayuUiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<compileline></compileline>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the compileline directive');
  }));
});
