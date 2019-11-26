import setupEnv from '../../../common/utils/setup-test-env';

import { updateCollection, sortCollection, updateStateFilters, filterCollection } from '../collections';

const initialState = {
  collection: [
    {
      id: '1',
      name: 'Peter',
    },
    {
      id: '2',
      name: 'Joseph',
    },
  ],
  filters: {
    name: '',
  },
};

beforeAll(() => {
  setupEnv();
});

describe('Collections utils', () => {
  describe('updateCollection', () => {
    it('should update a collection without new data', () => {
      const output = updateCollection(initialState.collection);

      expect(output).toBe(initialState.collection);
    });

    it('should update an empty collection', () => {
      const output = updateCollection([], initialState.collection);

      expect(output).toBe(initialState.collection);
    });

    it('should add a new element to the collection', () => {
      const output = updateCollection(initialState.collection, [{ id: '3', name: 'Mike' }]);

      expect(output).toStrictEqual([...initialState.collection, { id: '3', name: 'Mike' }]);
    });

    it('should replace an element from the collection', () => {
      const output = updateCollection(initialState.collection, [{ id: '2', name: 'Mike' }]);

      expect(output).toStrictEqual([
        { id: '1', name: 'Peter' },
        { id: '2', name: 'Mike' },
      ]);
    });
  });

  describe('sortCollection', () => {
    it('should sort a collection with an invalid key', () => {
      const output = sortCollection(initialState.collection, 'age');

      expect(output).toStrictEqual(initialState.collection);
    });

    it('should sort a collection', () => {
      const output = sortCollection(initialState.collection, 'name', 'asc');

      expect(output).toStrictEqual([
        { id: '2', name: 'Joseph' },
        { id: '1', name: 'Peter' },
      ]);
    });
  });

  describe('updateStateFilters', () => {
    it('should update filters for a different collection', () => {
      const output = updateStateFilters('test', initialState, { collection: 'test2' });

      expect(output).toBe(initialState);
    });

    it('should update existing filter', () => {
      const output = updateStateFilters('test', initialState, {
        collection: 'test',
        filter: { name: 'name', value: 'Mi' },
      });

      expect(output).toStrictEqual({
        ...initialState,
        filters: {
          ...initialState.filters,
          name: 'Mi',
        },
      });
    });

    it('should add a new filter', () => {
      const output = updateStateFilters('test', initialState, {
        collection: 'test',
        filter: { name: 'age', value: '1' },
      });

      expect(output).toStrictEqual({
        ...initialState,
        filters: {
          ...initialState.filters,
          age: '1',
        },
      });
    });
  });

  describe('filterCollection', () => {
    it('should filter an empty collection', () => {
      const output = filterCollection([], { name: 'Pe' });

      expect(output).toStrictEqual([]);
    });

    it('should filter a collection with an empty list of filters', () => {
      const output = filterCollection(initialState.collection, {});

      expect(output).toBe(initialState.collection);
    });

    it('should filter a collection by a string field', () => {
      const output = filterCollection(initialState.collection, { name: 'Pe' });

      expect(output).toStrictEqual([{ id: '1', name: 'Peter' }]);
    });

    it('should filter a collection by beforeThan a date', () => {
      const input = [
        {
          id: '1',
          name: 'Peter',
          created: '2018/06/10',
        },
        {
          id: '2',
          name: 'Joseph',
          created: '2018/06/20',
        },
      ];

      const output = filterCollection(input, { beforeThan: '2018/06/15' });

      expect(output).toStrictEqual([{ id: '1', name: 'Peter', created: '2018/06/10' }]);
    });

    it('should filter a collection by laterThan a date', () => {
      const input = [
        {
          id: '1',
          name: 'Peter',
          created: '2018/06/10',
        },
        {
          id: '2',
          name: 'Joseph',
          created: '2018/06/20',
        },
      ];

      const output = filterCollection(input, { laterThan: '2018/06/15' });

      expect(output).toStrictEqual([{ id: '2', name: 'Joseph', created: '2018/06/20' }]);
    });
  });
});
