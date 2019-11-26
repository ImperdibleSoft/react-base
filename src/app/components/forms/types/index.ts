import { Dispatch } from 'redux';

export type FieldTypes =
  | 'text'
  | 'email'
  | 'number'
  | 'password'
  | 'textarea'
  | 'switch'
  | 'checkbox'
  | 'dropdown'
  | 'picture'
  | 'date'
  | 'button'
  | 'submit'
  | 'array';

export interface FieldProps {
  type: FieldTypes;
  id: string;
  updateId?: string;
  model?: string | void;
  form?: string;
  name?: string;

  className?: string;
  label?: string;
  icon?: string | React.ReactElement<{}>;
  iconLast?: boolean;
  placeholder?: string;

  isRequired?: boolean;
  isSubmitted?: boolean;
  isChecked?: boolean;
  isDiactivatable?: boolean;
  isDisabled?: boolean;
  isAlwaysDisabled?: boolean;
  isAlwaysEnabled?: boolean;

  error?: string;

  minLength?: number;
  maxLength?: number;
  options?: Option[];
  fields?: FieldProps[];
  resource?: Resource;

  onClick?: Function;
  onChange?: Function;
  onFocus?: Function;
  onUpload?: (result: string, response: any) => void;

  maxWidth?: string;
}

export interface Resource {
  type: string;
  id?: number | string;
}

export interface Option {
  id: string;
  isDisabled?: boolean;
  type: string;
  label: string;
  value: string;
}

export interface Error {
  channel: string;
  reason: string;
  body: string;
}

export interface SmartFormPayload {
  form: string;
  resource: string;
  errors?: any[];
}

export interface PersistedSmartForm {
  state: string;
  errors: any[];
}

export interface SmartFormState {
  [index: string]: PersistedSmartForm;
}

export type FormActionType = 'FORM_RESET';

export interface FormAction {
  type: string;
  payload?: any;
}

export type FormActionCreator = (payload?: any) => (dispatch: Dispatch<FormAction>) => any;
