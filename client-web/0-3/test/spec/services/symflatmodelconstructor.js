'use strict';

describe('Service: symFlatModelConstructor', function () {

  // load the service's module
  beforeEach(module('symbolMapAppApp'));

  // instantiate service
  var symFlatModelConstructor;
  beforeEach(inject(function (_symFlatModelConstructor_) {
    symFlatModelConstructor = _symFlatModelConstructor_;
  }));

  it('should do something', function () {
    expect(!!symFlatModelConstructor).toBe(true);
  });

});
