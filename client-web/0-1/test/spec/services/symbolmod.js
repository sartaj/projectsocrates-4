'use strict';

describe('Service: symbolMod', function () {

  // load the service's module
  beforeEach(module('socraticMapApp'));

  // instantiate service
  var symbolMod;
  beforeEach(inject(function (_symbolMod_) {
    symbolMod = _symbolMod_;
  }));

  it('should do something', function () {
    expect(!!symbolMod).toBe(true);
  });

});
