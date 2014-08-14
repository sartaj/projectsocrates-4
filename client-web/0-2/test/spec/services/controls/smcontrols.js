'use strict';

describe('Service: smControls', function () {

  // load the service's module
  beforeEach(module('symbolMapApp'));

  // instantiate service
  var smControls;
  beforeEach(inject(function (_smControls_) {
    smControls = _smControls_;
  }));

  it('should do something', function () {
    expect(!!smControls).toBe(true);
  });

});
