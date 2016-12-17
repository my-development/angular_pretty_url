'use strict';

describe('Service: tshirtService', function () {

  // load the service's module
  beforeEach(module('angularPrettyUrlApp'));

  // instantiate service
  var tshirtService;
  beforeEach(inject(function (_tshirtService_) {
    tshirtService = _tshirtService_;
  }));

  it('should do something', function () {
    expect(!!tshirtService).toBe(true);
  });

});
