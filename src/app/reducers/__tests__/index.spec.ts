import reducer from '..';

import { getState as formsGetState } from '../../components/forms/models';

import { RootState } from '../../types';

const rootState = reducer(undefined, { type: 'INIT' });

describe('Root reducer', () => {
  it('should return a valid object', () => {
    const expectedState: RootState = {
      form: formsGetState(),
    };

    expect(rootState).toStrictEqual(expectedState);
  });
});
