'use strict';

describe('Service: symFlatToTree', function () {

  // load the service's module
  beforeEach(module('symbolMapApp'));

  // instantiate service
  var symFlatToTree;
  beforeEach(inject(function (_symFlatToTree_) {
    symFlatToTree = _symFlatToTree_;
  }));

  it('should do something', function () {
    expect(!!symFlatToTree).toBe(true);
  });

});
