import setupEnv from '../../../common/utils/setup-test-env';

import { sortBy } from '../arrays';

beforeEach(() => {
  setupEnv();
});

describe('Arrays utils', () => {
  describe('sortBy', () => {
    it('should sort an array by key', () => {
      const inputArray = [{ name: 'Peter', age: 20 }, { name: 'Joseph', age: 30 }];
      const output = inputArray.sort(sortBy('age'));

      expect(output).toStrictEqual([{ name: 'Joseph', age: 30 }, { name: 'Peter', age: 20 }]);
    });

    it('should sort an array by key using a custom order', () => {
      const inputArray = [{ name: 'Joseph', age: 30 }, { name: 'Peter', age: 20 }];
      const output = inputArray.sort(sortBy('age', 'asc'));

      expect(output).toStrictEqual([{ name: 'Peter', age: 20 }, { name: 'Joseph', age: 30 }]);
    });
  });
});
