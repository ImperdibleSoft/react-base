import * as React from 'react';

import { Content } from '../../../touchable';
import { Wrapper, HiddenInput, Description, Label, ErrorMessage } from '../styles';
import { CustomCheckbox } from './styles';

import { FieldProps } from '../../types';

interface OwnProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
  options: FieldProps;
}

const Checkbox: React.FC<OwnProps> = ({ onChange, onClick, onFocus, options }: OwnProps) => (
  <Wrapper>
    <Label>
      <HiddenInput
        id={options.id}
        name={options.id}
        defaultChecked={options.isChecked}
        disabled={options.isDisabled}
        onClick={onClick}
        onChange={onChange}
        onFocus={onFocus}
        required={options.isRequired}
        type="checkbox"
      />

      <Description>
        <CustomCheckbox />
        <Content options={options} />
      </Description>
    </Label>

    {options.error && <ErrorMessage>{options.error}</ErrorMessage>}
  </Wrapper>
);

export default Checkbox;
