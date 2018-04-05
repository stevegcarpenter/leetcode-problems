const twosum = require('../lib/solution');
require('jest');

describe('#twosum', () => {
  describe('Valid input', () => {
    it('should return back proper indices for positive values', () => {
      expect(twosum([1, 2, 3, 4, 5, 6], 8)).toEqual([2, 4]);
    });

    it('should still work with negative values', () => {
      expect(twosum([-1, 2, 3, 4, 5, 6], 1)).toEqual([0, 1]);
    });

    it('should return an empty array if no two valid sums could be found', () => {
      expect(twosum([23, 5, 100, 33, 49, 344, 888], 15000)).toEqual([]);
    });
  });

  describe('Invalid input', () => {
    it('should return back an empty array when provided an empty array', () => {
      expect(twosum([], 10)).toEqual([]);
    });

    it('should return back and empty array when no sum value was provided', () => {
      expect(twosum([1, 2, 3, 4, 5, 6])).toEqual([]);
    });
  });
});
