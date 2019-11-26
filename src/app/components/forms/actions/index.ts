import { FORM_RESET } from '../actionTypes';

import { FormActionCreator } from '../types';

export const resetForm: FormActionCreator = payload => dispatch => {
  const { form } = payload;

  dispatch({
    type: FORM_RESET,
    payload: {
      form,
    },
  });
};
