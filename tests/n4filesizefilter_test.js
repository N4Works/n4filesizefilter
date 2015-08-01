"use strict";

describe('n4FileSizeFilter', function()
{
  var _fileSize;

  beforeEach(module('n4FileSizeFilter'));

  beforeEach(inject(function($injector)
  {
    _fileSize = $injector.get('FileSizeFilter');
  }));

  describe('Methods', function()
  {
    it('should return zero when the a not number value is specified', function()
    {
      expect(_fileSize('abc')).toEqual(0);
    });

    it('should return zero when a infinity number is specified', function()
    {
        expect(_fileSize(Infinity)).toEqual(0);
    });

    it('should be able to define precision', function()
    {
        expect(_fileSize(1024, 3)).toEqual('1.000 KB');
    });

    it('should define the unit by the quantity of data', function () {
      expect(_fileSize(1)).toEqual('1.0 bytes');
      expect(_fileSize(1024)).toEqual('1.0 KB');
      expect(_fileSize(1024 * 1024)).toEqual('1.0 MB');
      expect(_fileSize(1024 * 1024 * 1024)).toEqual('1.0 GB');
      expect(_fileSize(1024 * 1024 * 1024 * 1024)).toEqual('1.0 TB');
      expect(_fileSize(1024 * 1024 * 1024 * 1024 * 1024)).toEqual('1.0 PB');
    });
  });
});
