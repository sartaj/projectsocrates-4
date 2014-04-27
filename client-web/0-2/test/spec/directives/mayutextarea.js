'use strict';

describe('Directive: mayutextarea', function () {

  // load the directive's module
  beforeEach(module('02App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mayutextarea></mayutextarea>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mayutextarea directive');
  }));
});
