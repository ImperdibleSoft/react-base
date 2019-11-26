import * as React from 'react';

import { Content } from '../../../touchable';
import { Wrapper, Input, Label, ErrorMessage, Description } from '../styles';

import { FieldProps } from '../../types';

interface Options extends FieldProps {
  isChecked?: boolean;
}

interface OwnProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
  options: Options;
}

// TODO: Add a React date-picker
const DatePicker: React.FC<OwnProps> = ({ onChange, onClick, onFocus, options }: OwnProps) => (
  <Wrapper>
    <Description>
      <Label htmlFor={options.id}>
        <Content options={options} />
      </Label>
    </Description>

    <Input
      type="date"
      id={options.id}
      name={options.id}
      defaultValue={options.model || ''}
      disabled={options.isDisabled}
      onClick={onClick}
      onChange={onChange}
      onFocus={onFocus}
      placeholder={options.placeholder}
      required={options.isRequired}
    />

    {options.error && <ErrorMessage>{options.error}</ErrorMessage>}
  </Wrapper>
);

export default DatePicker;
