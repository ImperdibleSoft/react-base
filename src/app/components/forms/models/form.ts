import { FormState } from '../types/form';

export const getState = (): FormState => ({
  canBeLocked: true,
  hasPermissions: false,
  isEditEnabled: false,
});
