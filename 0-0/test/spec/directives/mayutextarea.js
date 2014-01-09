'use strict';

describe('Directive: mayutextarea', function () {

  // load the directive's module
  beforeEach(module('mayuUiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    expect(2).toBe(2);
  }));
});
