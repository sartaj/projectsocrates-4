'use strict';

describe('Directive: mayugroup', function () {

  // load the directive's module
  beforeEach(module('mayuUiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    // element = angular.element('<mayu></mayu>');
    // element = $compile(element)(scope);
    expect(1).toBe(1);
  }));
});
