import * as React from 'react';
import Select from 'react-select';
import { FocusEventHandler, ValueType } from 'react-select/src/types';

import { Content } from '../../../touchable';
import { Wrapper, ErrorMessage, Label, Description } from '../styles';
import dropdownStyles from './styles';

import { useThemeContext } from '../../../../contexts/theme';
import { FieldProps, Option } from '../../types';

interface OwnProps {
  options: FieldProps;
  onClick: (event: React.MouseEvent<HTMLSelectElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onFocus: (event: React.FocusEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<OwnProps> = ({ onChange, onClick, onFocus, options }: OwnProps) => {
  const handleChange = (value: ValueType<Option>) => {
    let newValue;
    if (value) {
      newValue = value as Option;
    }

    onChange({
      target: {
        id: options.id,
        name: options.id,
        value: newValue ? newValue.value : '',
      },
    } as React.ChangeEvent<HTMLSelectElement>);
  };

  const handleFocus: FocusEventHandler = event => {
    onFocus(event as React.FocusEvent<HTMLSelectElement>);
  };

  const theme = useThemeContext();

  return (
    <Wrapper>
      <Description>
        <Label htmlFor={options.id}>
          <Content options={options} />
        </Label>
      </Description>

      <Select
        id={options.id}
        name={options.id}
        defaultValue={
          (options.options && options.options.find(option => option.value === options.model)) ||
          (options.options && options.options[0])
        }
        isDisabled={options.isDisabled}
        isSearchable
        onClick={onClick}
        onChange={handleChange}
        onFocus={handleFocus}
        options={options.options}
        placeholder={options.placeholder}
        required={options.isRequired}
        styles={dropdownStyles(theme.active)}
      ></Select>

      {options.error && <ErrorMessage>{options.error}</ErrorMessage>}
    </Wrapper>
  );
};

export default Dropdown;
