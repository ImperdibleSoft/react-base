import { UPDATE_FORM_STATUS } from '../actionTypes/form';

import { FormActionCreator } from '../types/form';

export const updateFormStatus: FormActionCreator = payload => ({
  type: UPDATE_FORM_STATUS,
  payload,
});
