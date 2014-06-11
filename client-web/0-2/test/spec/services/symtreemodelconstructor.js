'use strict';

describe('Service: symTreeModelConstructor', function () {

  // load the service's module
  beforeEach(module('symbolMapAppApp'));

  // instantiate service
  var symTreeModelConstructor;
  beforeEach(inject(function (_symTreeModelConstructor_) {
    symTreeModelConstructor = _symTreeModelConstructor_;
  }));

  it('should do something', function () {
    expect(!!symTreeModelConstructor).toBe(true);
  });

});
