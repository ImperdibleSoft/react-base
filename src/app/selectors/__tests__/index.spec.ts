import rootReducer from '../../reducers';
import * as selectors from '..';

const initialState = rootReducer(undefined, { type: 'INIT' });

describe('Root selectors', () => {
  describe('getAppStore', () => {
    it('should return the entire state', () => {
      const result = selectors.getAppStore(initialState);

      expect(result).toStrictEqual(initialState);
    });
  });
});
