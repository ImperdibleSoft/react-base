import setupEnv from '../../../common/utils/setup-test-env';

import { mapClientErrors, mapServerErrors, isValidForm } from '../error-handler';

import { TEXT, ARRAY } from '../../components/forms/models';

beforeAll(() => {
  setupEnv();
});

describe('Error handler utils', () => {
  // mapClientErrors
  describe('mapClientErrors', () => {
    it('should return no errors', () => {
      const input = { id: 'test-field', model: '', type: TEXT };
      const output = mapClientErrors(input);

      expect(output).toBe('');
    });

    it('should return a minLength error (because field is required)', () => {
      const input = { id: 'test-field', model: '', isRequired: true, minLength: 3, type: TEXT };
      const output = mapClientErrors(input);

      expect(output).toBe(`The ${input.id} should have at least ${input.minLength} characters`);
    });

    it('should return a minLength error', () => {
      const input = { id: 'test-field', model: 'Mi', minLength: 3, type: TEXT };
      const output = mapClientErrors(input);

      expect(output).toBe(`The ${input.id} should have at least ${input.minLength} characters`);
    });

    it('should return a maxLength error', () => {
      const input = { id: 'test-field', model: 'Mike', maxLength: 3, type: TEXT };
      const output = mapClientErrors(input);

      expect(output).toBe(`The ${input.id} cannot have more than ${input.maxLength} characters`);
    });
  });

  // mapServerErrors
  describe('mapServerErrors', () => {
    it('No fields, should return no errors', () => {
      const output = mapServerErrors();

      expect(output).toStrictEqual([]);
    });

    it('No errors, should return no errors', () => {
      const input = { id: 'test-field', model: '', type: TEXT };
      const output = mapServerErrors([input]);

      expect(output).toStrictEqual([input]);
    });

    it('should dismiss no-form errors', () => {
      const input = { id: 'test-field', model: '', type: TEXT };
      const serverError = { channel: 'web', reason: 'global', body: 'Custom error' };
      const output = mapServerErrors([input], [serverError]);

      expect(output).toStrictEqual([input]);
    });

    it('should dismiss errors from other fields', () => {
      const input = { id: 'test-field', model: '', type: TEXT };
      const serverError = { channel: 'form', reason: 'test-field-2', body: 'Custom error' };
      const output = mapServerErrors([input], [serverError]);

      expect(output).toStrictEqual([input]);
    });

    it('should return an error', () => {
      const input = { id: 'test-field', model: '', type: TEXT };
      const serverError = { channel: 'form', reason: 'test-field', body: 'Custom error' };
      const output = mapServerErrors([input], [serverError]);

      expect(output).toStrictEqual([{ ...input, error: 'Custom error' }]);
    });
  });

  // isValidForm
  describe('isValidForm', () => {
    it('No filters, should return true', () => {
      const output = isValidForm();

      expect(output).toBe(true);
    });

    it('Default field with no errors should return true', () => {
      const field = { id: 'test-field', model: '', type: TEXT };
      const output = isValidForm([field]);

      expect(output).toBe(true);
    });

    it('Default field with errors should return false', () => {
      const field = { id: 'test-field', model: '', type: TEXT, error: 'This is required' };
      const output = isValidForm([field]);

      expect(output).toBe(false);
    });

    it('Array field with no errors should return true', () => {
      const field = { id: 'test-field', fields: [{ id: 'test-field-2', model: '', type: TEXT }], type: ARRAY };
      const output = isValidForm([field]);

      expect(output).toBe(true);
    });

    it('Array field with errors should return false', () => {
      const field = {
        id: 'test-field',
        fields: [{ id: 'test-field-2', model: '', type: TEXT, error: 'This is required' }],
        type: ARRAY,
      };
      const output = isValidForm([field]);

      expect(output).toBe(false);
    });
  });
});
