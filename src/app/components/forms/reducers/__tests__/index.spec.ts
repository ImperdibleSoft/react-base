import reducer from '..';

import { FORM_RESET } from '../../actionTypes';
import { getState } from '../../models';

describe('Form reducer', () => {
  const initialState = getState();

  describe('Any form submission', () => {
    describe('Form has been submitted', () => {
      it('should return the form with submitted status', () => {
        const state = {
          ...initialState,
          form: {
            ...initialState.form,
            state: 'failed',
            errors: [{ channel: 'form', reason: 'email' }],
          },
        };

        const nextState = reducer(state, { type: 'TEST_FORM_SUBMITTED', payload: { form: 'form' } });

        const expectedState = {
          ...initialState,
          form: {
            ...initialState.form,
            state: 'submitted',
          },
        };

        expect(nextState).toStrictEqual(expectedState);
      });
    });

    describe('Form has been succeed on server', () => {
      it('should return the form with succeed status', () => {
        const state = {
          ...initialState,
          form: {
            ...initialState.form,
            state: 'submitted',
            errors: [{ channel: 'form', reason: 'email' }],
          },
        };

        const nextState = reducer(state, { type: 'TEST_FORM_SUCCEED', payload: { form: 'form' } });

        const expectedState = { ...initialState, form: { ...initialState.form, state: 'succeed' } };

        expect(nextState).toStrictEqual(expectedState);
      });
    });

    describe('Form has failed on server', () => {
      it('should return the form with failed status', () => {
        const state = {
          ...initialState,
          form: {
            ...initialState.form,
            state: 'submitted',
            errors: [],
          },
        };

        const nextState = reducer(state, {
          type: 'TEST_FORM_FAILED',
          payload: { form: 'form', errors: [{ channel: 'form', reason: 'email' }] },
        });

        const expectedState = {
          ...initialState,
          form: {
            ...initialState.form,
            state: 'failed',
            errors: [{ channel: 'form', reason: 'email' }],
          },
        };

        expect(nextState).toStrictEqual(expectedState);
      });
    });

    describe('Form has been reseted', () => {
      it('should return initial state for form form', () => {
        const state = {
          ...initialState,
          form: {
            ...initialState.form,
            state: 'failed',
            errors: [{ channel: 'form', reason: 'email' }],
          },
        };

        const nextState = reducer(state, { type: FORM_RESET, payload: { form: 'form' } });

        expect(nextState).toStrictEqual(initialState);
      });
    });
  });
});
