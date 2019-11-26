import { error } from '../../../../common/utils/logger';

import { FORM_RESET } from '../actionTypes';

import { getState } from '../models';
import { PersistedSmartForm, SmartFormPayload, FormAction } from '../types';

const submitForm = (formState: PersistedSmartForm, payload: SmartFormPayload) => {
  if (!payload || !payload.form) {
    error('Dispatching an action form, without form property', payload);
    return formState;
  } else {
    return {
      ...formState,
      state: 'submitted',
      errors: [],
    };
  }
};

const succeedForm = (formState: PersistedSmartForm, payload: SmartFormPayload) => {
  if (!payload || !payload.form) {
    error('Dispatching an action form, without form property', payload);
    return formState;
  } else {
    return {
      ...formState,
      state: 'succeed',
      errors: [],
    };
  }
};

const parseErrors = (formState: PersistedSmartForm, payload: SmartFormPayload) => {
  if (!payload || !payload.form) {
    error('Dispatching an action form, without form property', payload);
    return formState;
  } else {
    return {
      ...formState,
      state: 'failed',
      errors: payload.errors,
    };
  }
};

const initialState = getState();

const reducer = (state = initialState, action: FormAction) => {
  const formAction = action as FormAction;

  // Any request
  if (/FORM_SUBMITTED/.test(formAction.type)) {
    return {
      ...state,
      [formAction.payload.form]: submitForm(state[formAction.payload.form], formAction.payload),
    };
  }

  // Any success
  if (/FORM_SUCCEED/.test(formAction.type)) {
    return {
      ...state,
      [formAction.payload.form]: succeedForm(state[formAction.payload.form], formAction.payload),
    };
  }

  // Any failure
  if (/FORM_FAILED/.test(formAction.type)) {
    return {
      ...state,
      [formAction.payload.form]: parseErrors(state[formAction.payload.form], formAction.payload),
    };
  }

  if (formAction.type === FORM_RESET) {
    return {
      ...state,
      [formAction.payload.form]: initialState[formAction.payload.form],
    };
  }

  return state;
};

export default reducer;
