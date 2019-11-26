import { RootState } from '../../../types';

export const getFormState = ({ form }: RootState) => (formName: string): string =>
  form[formName] ? form[formName].state : 'pristine';

export const getFormErrors = ({ form }: RootState) => (formName: string): any[] =>
  form[formName] ? form[formName].errors : [];
