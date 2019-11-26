import { UPDATE_FORM_STATUS } from '../actionTypes/form';

import { FormState, FormAction } from '../types/form';

const reducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case UPDATE_FORM_STATUS:
      return {
        ...state,
        canBeLocked: typeof action.payload.canBeLocked !== 'undefined' ? action.payload.canBeLocked : state.canBeLocked,
        hasPermissions:
          typeof action.payload.hasPermissions !== 'undefined' ? action.payload.hasPermissions : state.hasPermissions,
        isEditEnabled:
          typeof action.payload.isEditEnabled !== 'undefined' ? action.payload.isEditEnabled : state.isEditEnabled,
      };

    default:
      return state;
  }
};

export default reducer;
