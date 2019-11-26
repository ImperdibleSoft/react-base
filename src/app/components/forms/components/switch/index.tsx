import * as React from 'react';

import { Content } from '../../../touchable';
import { Wrapper, Label, HiddenInput, Description } from '../styles';
import { CustomSwitch } from './styles';

import { FieldProps } from '../../types';

interface OwnProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
  options: FieldProps;
}

const Switch: React.FC<OwnProps> = ({ onChange, onClick, onFocus, options }: OwnProps) => (
  <Wrapper>
    <Label htmlFor={options.id}>
      <HiddenInput
        id={options.id}
        name={options.id}
        defaultChecked={options.isChecked}
        disabled={options.isDisabled}
        onChange={onChange}
        onClick={onClick}
        onFocus={onFocus}
        required={options.isRequired}
        type="checkbox"
      />

      <Description>
        <CustomSwitch />
        <Content options={options} />
      </Description>
    </Label>
  </Wrapper>
);

export default Switch;
