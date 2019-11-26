import rootReducer from '../../../../reducers';

import { getFormState, getFormErrors } from '..';

const initialState = rootReducer(undefined, { type: 'INITIAL' });
const populatedState = {
  ...initialState,
  form: {
    ...initialState.form,
    account: {
      errors: ['custom-form-error'],
      picture: {
        type: 'custom-picture',
        url: '',
      },
      state: 'custom-form-state',
    },
  },
};

describe('Form Selectors', () => {
  describe('getFormState', () => {
    it('should return form state', () => {
      const state = { ...populatedState };
      const output = getFormState(state)('account');

      expect(output).toBe('custom-form-state');
    });

    it('should return default form state', () => {
      const output = getFormState(initialState)('undefined');

      expect(output).toBe('pristine');
    });
  });

  describe('getFormErrors', () => {
    it('should return form errors', () => {
      const state = { ...populatedState };
      const output = getFormErrors(state)('account');

      expect(output).toStrictEqual(['custom-form-error']);
    });

    it('should return default form errors', () => {
      const output = getFormErrors(initialState)('undefined');

      expect(output).toStrictEqual([]);
    });
  });
});
