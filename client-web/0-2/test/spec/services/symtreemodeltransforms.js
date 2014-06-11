'use strict';

describe('Service: symTreeModelTransforms', function () {

  // load the service's module
  beforeEach(module('symbolMapAppApp'));

  // instantiate service
  var symTreeModelTransforms;
  beforeEach(inject(function (_symTreeModelTransforms_) {
    symTreeModelTransforms = _symTreeModelTransforms_;
  }));

  it('should do something', function () {
    expect(!!symTreeModelTransforms).toBe(true);
  });

});
