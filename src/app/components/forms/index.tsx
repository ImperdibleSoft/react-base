import { Formik, FormikValues, FormikErrors } from 'formik';
import * as React from 'react';
import { useDispatch } from 'react-redux';

import { resetForm } from './actions';
import { updateFormStatus } from './actions/form';
import reducer from './reducers/form';

import Field from './components';
import { Buttons } from '../touchable';

import { CANCEL_ICON, EDIT_ICON, CANCEL_LABEL, EDIT_LABEL } from '../../../common/constants/buttons';
import { ButtonProps } from '../touchable/types';
import { BUTTON, CHECKBOX, SWITCH, SUBMIT } from './models';
import { getState } from './models/form';
import { FieldProps } from './types';

interface FormContent {
  Buttons: typeof Buttons;
  controlledButtons: ButtonProps[];
  controlledFields: FieldProps[];
  Field: typeof Field;
  isEditEnabled: boolean;
  values: FormikValues;
}

export const updateCollection = (originalCollection: FieldProps[], controlledCollection: FieldProps[]) =>
  originalCollection.map(field => {
    const controlledField = controlledCollection.find(f => f.id === field.id);
    return {
      ...field,
      ...controlledField,
      error: controlledField && controlledField.error ? controlledField.error : field.error,
      model: controlledField && controlledField.model ? controlledField.model : field.model,
    };
  });

const mapFieldValues = (field: FieldProps) => {
  const values: FormikValues = {};

  if (field.fields) {
    field.fields.forEach(f => {
      const fieldValues = mapFieldValues(f);
      Object.keys(fieldValues).forEach(key => {
        values[key] = fieldValues[key];
      });
    });
  } else if (field.type === CHECKBOX || field.type === SWITCH) {
    values[field.id] = field.isChecked;
  } else {
    values[field.id] = field.model;
  }

  return values;
};

const getInitialValues = (fields: FieldProps[]) => {
  const values: FormikValues = {};

  fields.forEach(field => {
    const fieldValues = mapFieldValues(field);
    Object.keys(fieldValues).forEach(key => {
      values[key] = fieldValues[key];
    });
  });

  return values;
};

const mapValuesToField = (field: FieldProps, values: FormikValues): FieldProps => {
  if (field.fields) {
    return {
      ...field,
      fields: field.fields.map(f => {
        return mapValuesToField(f, values);
      }),
    };
  }

  if (field.type === CHECKBOX || field.type === SWITCH) {
    return {
      ...field,
      error: undefined,
      isChecked: values[field.id],
    };
  }

  return {
    ...field,
    error: undefined,
    model: values[field.id],
  };
};

const mapValuesToFields = (fields: FieldProps[], values: FormikValues) =>
  fields.map(field => mapValuesToField(field, values));

interface OwnProps {
  buttons: ButtonProps[];
  children: (props: FormContent) => React.ReactNode;
  defaultEnabled?: boolean;
  fields: FieldProps[];
  form: string;
  handleSubmit: (fields: FieldProps[]) => void;
  isFetching: boolean;
  validate?: (values: FormikValues) => FormikErrors<FormikValues>;
}

const Form: React.FC<OwnProps> = ({
  buttons,
  children,
  defaultEnabled,
  fields,
  form,
  handleSubmit,
  isFetching,
  validate,
}: OwnProps) => {
  const [{ canBeLocked, hasPermissions, isEditEnabled }, stateDispatch] = React.useReducer(reducer, getState());

  const initialValues = getInitialValues(fields);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // Reset form data
    dispatch(resetForm({ form }));

    // Set initial form status
    stateDispatch(
      updateFormStatus({
        canBeLocked: false,
        hasPermissions: true,
        isEditEnabled: defaultEnabled === true,
      })
    );
  }, []);

  const onSubmit = (values: FormikValues): void => {
    if (isEditEnabled && (!canBeLocked || (canBeLocked && hasPermissions))) {
      handleSubmit(mapValuesToFields(fields, values));
    }
  };

  const toggleEnabledState = () => {
    stateDispatch(
      updateFormStatus({
        isEditEnabled: !isEditEnabled,
      })
    );
  };

  const toggleButton: ButtonProps = {
    buttonType: isEditEnabled ? undefined : 'primary',
    icon: isEditEnabled ? CANCEL_ICON : EDIT_ICON,
    id: 'toggle',
    isDisabled: canBeLocked && !hasPermissions,
    label: isEditEnabled ? CANCEL_LABEL : EDIT_LABEL,
    onClick: toggleEnabledState,
    type: BUTTON,
  };

  return (
    <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
      {({
        /* eslint-disable @typescript-eslint/no-unused-vars */
        errors,
        handleBlur,
        handleChange,
        handleSubmit: handleFormikSubmit,
        isSubmitting,
        touched,
        values,
        /* eslint-enable @typescript-eslint/no-unused-vars */
      }) => (
        <form id={form} name={form} onSubmit={handleFormikSubmit} noValidate>
          {children({
            Buttons,
            controlledButtons: buttons.map(b => ({
              ...b,
              isDisabled: b.type === SUBMIT || b.isDisabled || !isEditEnabled || isFetching,
            })),
            controlledFields: fields.map(f => ({
              ...f,
              isDisabled: f.isDisabled || !isEditEnabled || isFetching,
            })),
            Field,
            isEditEnabled,
            values,
          })}

          {canBeLocked && <Buttons options={[toggleButton]} />}
        </form>
      )}
    </Formik>
  );
};

export default Form;
