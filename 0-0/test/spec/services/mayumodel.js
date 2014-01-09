'use strict';

describe('Service: mayuModel', function () {

  // load the service's module
  beforeEach(module('mayuUiApp'));

  // instantiate service
  var mayuModel;
  beforeEach(inject(function (_mayuModel_) {
    mayuModel = _mayuModel_;
  }));

  it('should do something', function () {
    expect(!!mayuModel).toBe(true);
  });

});
