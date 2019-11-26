export type FormActionType = 'UPDATE_FORM_STATUS' | '';

export interface FormAction {
  type: FormActionType;
  payload?: any;
}

export type FormActionCreator = (payload?: any) => FormAction;

export interface FormState {
  canBeLocked: boolean;
  hasPermissions: boolean;
  isEditEnabled: boolean;
}
