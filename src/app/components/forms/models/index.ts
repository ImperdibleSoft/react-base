import { FieldTypes, PersistedSmartForm, SmartFormState } from '../types';

export const TEXT: FieldTypes = 'text';
export const EMAIL: FieldTypes = 'email';
export const NUMBER: FieldTypes = 'number';
export const PASSWORD: FieldTypes = 'password';
export const TEXTAREA: FieldTypes = 'textarea';
export const SWITCH: FieldTypes = 'switch';
export const CHECKBOX: FieldTypes = 'checkbox';
export const DROPDOWN: FieldTypes = 'dropdown';
export const DATE: FieldTypes = 'date';
export const BUTTON: FieldTypes = 'button';
export const SUBMIT: FieldTypes = 'submit';
export const ARRAY: FieldTypes = 'array';

const initForm = (): PersistedSmartForm => {
  return {
    state: 'pristine',
    errors: [],
  };
};

export const getState = (): SmartFormState => ({
  form: initForm(),
});
