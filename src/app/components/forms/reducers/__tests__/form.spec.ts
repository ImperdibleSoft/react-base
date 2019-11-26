import reducer from '../form';

import { getState } from '../../models/form';

const initialState = getState();

describe('Form component reducer', () => {
  it('should return initial state', () => {
    const expectedOutput = {
      ...initialState,
    };

    const next = reducer(initialState, { type: '' });

    expect(next).toStrictEqual(expectedOutput);
  });

  it('should set canBeLocked to false', () => {
    const expectedOutput = {
      ...initialState,
      canBeLocked: false,
    };

    const next = reducer(initialState, {
      type: 'UPDATE_FORM_STATUS',
      payload: {
        canBeLocked: false,
      },
    });

    expect(next).toStrictEqual(expectedOutput);
  });

  it('should set hasPermissions to true', () => {
    const expectedOutput = {
      ...initialState,
      hasPermissions: true,
    };

    const next = reducer(initialState, {
      type: 'UPDATE_FORM_STATUS',
      payload: {
        hasPermissions: true,
      },
    });

    expect(next).toStrictEqual(expectedOutput);
  });

  it('should set isEditEnabled to true', () => {
    const expectedOutput = {
      ...initialState,
      isEditEnabled: true,
    };

    const next = reducer(initialState, {
      type: 'UPDATE_FORM_STATUS',
      payload: {
        isEditEnabled: true,
      },
    });

    expect(next).toStrictEqual(expectedOutput);
  });
});
