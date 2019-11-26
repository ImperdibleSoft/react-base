import { Field as FormikField, FieldProps as FormikFieldProps } from 'formik';
import * as React from 'react';
import { log } from '../../../../common/utils/logger';
import analyticsApi from '../../../../common/apis/reports/analytics';

import { Buttons } from '../../touchable';
import Checkbox from './checkbox';
import DatePicker from './datepicker';
import Dropdown from './dropdown';
import Switch from './switch';
import Text from './text';

import { INTERACTIONS } from '../../../../common/constants/analytics';

import { TEXT, EMAIL, NUMBER, PASSWORD, TEXTAREA, SWITCH, CHECKBOX, DROPDOWN, DATE, BUTTON, SUBMIT } from '../models';

import { FieldProps } from '../types';

interface OwnProps {
  options: FieldProps;
}

const Field: React.FC<OwnProps> = ({ options }: OwnProps) => {
  const logSmartEvent = (action: string) => {
    const { icon, label, type } = options;

    analyticsApi.logSmartEvent({
      category: INTERACTIONS,
      label: `${label || icon} (${type} input)`,
      action,
    });
  };

  const onClick = (
    event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLButtonElement>
  ) => {
    log(`onClick() of <${options.id}>`);
    logSmartEvent('Click');

    if (options.onClick) {
      options.onClick(event);
    }
  };

  const onFocus = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLButtonElement>
  ) => {
    log(`onFocus() of <${options.id}>`);
    logSmartEvent('Focus');

    if (options.onFocus) {
      options.onFocus(event);
    }
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLButtonElement>
  ) => {
    log(`onChange() of <${options.id}>`, options);
    logSmartEvent('Change');

    if (options.onChange) {
      options.onChange(event);
    }
  };

  interface RenderWrappedFieldProps {
    Component: typeof Text | typeof Switch | typeof Checkbox | typeof Dropdown | typeof DatePicker | typeof Buttons;
    props: any;
  }

  const renderWrappedField = ({ Component, props }: RenderWrappedFieldProps) => {
    const styles = {
      wrapper: {
        display: props.options.maxWidth ? 'inline-block' : 'block',
        maxWidth: props.options.maxWidth,
        verticalAlign: 'top',
      } as React.CSSProperties,
    };

    return (
      <span key={options.updateId || options.id} style={styles.wrapper}>
        <FormikField
          id={options.id}
          name={options.id}
          render={({ field: { value, onBlur, ...field } }: FormikFieldProps) => {
            const newProps = {
              ...props,
              ...field,
            };

            if (props.options.type === CHECKBOX || props.options.type === SWITCH) {
              newProps.options.isChecked = !!value;
            } else {
              newProps.options.model = value;
            }

            return (
              <Component
                {...newProps}
                onChange={(event: any) => {
                  props.onChange(event);
                  field.onChange(event);
                }}
              />
            );
          }}
        />
      </span>
    );
  };

  const parsedOptions = {
    ...options,
    isDisabled: (!options.isAlwaysEnabled && options.isDisabled) || options.isAlwaysDisabled,
  };

  switch (parsedOptions.type) {
    case TEXT:
    case EMAIL:
    case NUMBER:
    case PASSWORD:
    case TEXTAREA:
      return renderWrappedField({
        Component: Text,
        props: {
          onChange,
          onClick,
          onFocus,
          options: parsedOptions,
        },
      });

    case SWITCH:
      return renderWrappedField({
        Component: Switch,
        props: {
          onChange,
          onClick,
          onFocus,
          options: parsedOptions,
        },
      });

    case CHECKBOX:
      return renderWrappedField({
        Component: Checkbox,
        props: {
          onChange,
          onClick,
          onFocus,
          options: parsedOptions,
        },
      });

    case DROPDOWN:
      return renderWrappedField({
        Component: Dropdown,
        props: {
          onChange,
          onClick,
          onFocus,
          options: parsedOptions,
        },
      });

    case DATE:
      return renderWrappedField({
        Component: DatePicker,
        props: {
          onChange,
          onClick,
          onFocus,
          options: parsedOptions,
        },
      });

    case BUTTON:
    case SUBMIT:
      return renderWrappedField({
        Component: Buttons,
        props: {
          align: 'center',
          options: [parsedOptions],
        },
      });

    default:
      return null;
  }
};

export default Field;
