import { Error, FieldProps } from '../components/forms/types';

/**
 * Validate fields client-side
 */
export const mapClientErrors = ({ id, model, isRequired = false, minLength, maxLength }: FieldProps): string => {
  if (model === undefined || (isRequired && model === '') || (minLength && model !== '' && model.length < minLength)) {
    return `The ${id} should have at least ${minLength} characters`;
  }

  if (maxLength && model.length > maxLength) {
    return `The ${id} cannot have more than ${maxLength} characters`;
  }

  return '';
};

/**
 * Given a list of fields and errors, match each error with its field
 */
export const mapServerErrors = (fields: FieldProps[] = [], errors: Error[] = []) =>
  fields.map(field => {
    const error = errors.find(er => er.channel === 'form' && er.reason === field.id);

    field.error = error ? error.body : '';

    return field;
  });

/**
 * Check if any of the fields has errors
 */
export const isValidForm = (fields: FieldProps[] = []) => {
  // If there are fields with errors
  if (fields.filter(f => f.error !== undefined && f.error !== '').length) {
    return false;
  }

  // Array fields
  const arrayFields = fields.filter(field => typeof field.fields !== 'undefined');

  // If array fields, loop through each of them
  let hasErrors = false;
  arrayFields.forEach(arrayField => {
    // If some field has an error
    if (
      arrayField.fields &&
      arrayField.fields.filter(field => field.error !== undefined && field.error !== '').length > 0
    ) {
      hasErrors = true;
    }
  });

  if (hasErrors) {
    return false;
  }

  // Anyways, form is valid
  return true;
};
