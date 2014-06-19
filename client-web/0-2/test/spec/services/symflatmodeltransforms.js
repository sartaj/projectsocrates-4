'use strict';

describe('Service: symFlatModelTransforms', function () {

  // load the service's module
  beforeEach(module('symbolMapApp'));

  // instantiate service
  var symFlatModelTransforms;
  beforeEach(inject(function (_symFlatModelTransforms_) {
    symFlatModelTransforms = _symFlatModelTransforms_;
  }));

  it('should do something', function () {
    expect(!!symFlatModelTransforms).toBe(true);
  });

});
