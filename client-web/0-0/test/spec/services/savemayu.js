'use strict';

describe('Service: saveMayu', function () {

  // load the service's module
  beforeEach(module('mayuUiApp'));

  // instantiate service
  var saveMayu;
  beforeEach(inject(function (_saveMayu_) {
    saveMayu = _saveMayu_;
  }));

  it('should do something', function () {
    expect(!!saveMayu).toBe(true);
  });

});
