'use strict';

describe('Service: symTreeToFlat', function () {

  // load the service's module
  beforeEach(module('symbolMapAppApp'));

  // instantiate service
  var symTreeToFlat;
  beforeEach(inject(function (_symTreeToFlat_) {
    symTreeToFlat = _symTreeToFlat_;
  }));

  it('should do something', function () {
    expect(!!symTreeToFlat).toBe(true);
  });

});
