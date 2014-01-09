'use strict';

describe('Controller: EditorMultilineCtrl', function () {

  // load the controller's module
  beforeEach(module('mayuUiApp'));

  var EditorMultilineCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditorMultilineCtrl = $controller('EditorMultilineCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
